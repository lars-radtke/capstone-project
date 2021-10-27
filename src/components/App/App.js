import { Switch, Route, Redirect } from 'react-router-dom';
import { Frontpage, Dashboard } from 'pages';
import { useState } from 'react';
import { useInterval } from 'hooks/useInterval';
import { useBackgroundColor } from 'hooks';

export const App = () => {
    const initialDate = new Date();
    const [day, setDay] = useState(initialDate.getDay());
    const [hours, setHours] = useState(initialDate.getHours());
    const [minutes, setMinutes] = useState(initialDate.getMinutes());

    // This is a custom function, that mocks the setInterval function.
    // As setInterval() does not work in React as you would think, the use of a custom hook was necessary.
    // It tests for changes every second, but only updates states when a change is detected
    useInterval(() => {
        const newDate = new Date();
        if (newDate.getDay() !== day) {
            setDay(newDate.getDay());
        }
        if (newDate.getHours() !== hours) {
            setHours(newDate.getHours());
        }
        if (newDate.getMinutes() !== minutes) {
            setMinutes(newDate.getMinutes());
        }
    }, 1000);

    useBackgroundColor(hours);

    const [user, setUser] = useState(() => {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else return [];
    });

    const userIsAuthenticated = user.length !== 0;

    const handleAuthenticateUser = array => {
        localStorage.setItem('user', JSON.stringify(array));
        setUser(array);
    };

    const logoutUser = () => {
        localStorage.removeItem('user');
        setUser([]);
        document.title = 'Anmelden | Student Compass';
    };

    return (
        <Switch>
            <Route exact path="/">
                {userIsAuthenticated ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Frontpage onAuthenticateUser={handleAuthenticateUser} />
                )}
            </Route>
            <Route path="/dashboard">
                {userIsAuthenticated ? (
                    <Dashboard
                        day={day}
                        user={user}
                        hours={hours}
                        logoutUser={logoutUser}
                    />
                ) : (
                    <Redirect to="/" />
                )}
            </Route>
        </Switch>
    );
};
