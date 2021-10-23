import { Switch, Route, Redirect } from 'react-router-dom';
import { Frontpage, Dashboard } from 'pages';
import { useState } from 'react';

export const App = () => {
    const [user, setUser] = useState(() => {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else return [];
    });

    const userIsAuthenticated = user.length !== 0;

    const authenticateUser = array => {
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
                    <Frontpage authenticateUser={authenticateUser} />
                )}
            </Route>
            <Route path="/dashboard">
                {userIsAuthenticated ? (
                    <Dashboard user={user} logoutUser={logoutUser} />
                ) : (
                    <Redirect to="/" />
                )}
            </Route>
        </Switch>
    );
};
