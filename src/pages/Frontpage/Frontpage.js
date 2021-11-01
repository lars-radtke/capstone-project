import { Logo, Login, ButtonWithIcon } from 'components';
import userData from 'mockData/userData.json';
import styled from 'styled-components/macro';
import { useState } from 'react';

export const Frontpage = ({ onAuthenticateUser }) => {
    const [loginFormOpen, setLoginFormOpen] = useState(false);
    const [dataNotFound, setDataNotFound] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const { name, password } = event.target.elements;

        const user = userData.find(
            user =>
                user.login === name.value && user.password === password.value,
        );

        if (user) {
            setDataNotFound(false);
            onAuthenticateUser(user);
        } else {
            setDataNotFound(true);
        }
    };

    const toggleLoginForm = () => {
        setLoginFormOpen(!loginFormOpen);
    };

    return (
        <Section>
            <Logo />
            {/* <Login onLogin={handleLogin} dataNotFound={dataNotFound} /> */}

            {loginFormOpen ? (
                <>
                    <Login onLogin={handleLogin} dataNotFound={dataNotFound} />
                    <ButtonWithIcon
                        iconSrc="/assets/icons/close.svg"
                        text="Abbrechen"
                        onClick={toggleLoginForm}
                        highlighted={true}
                    />
                </>
            ) : (
                <ButtonArea>
                    <ButtonWithIcon
                        iconSrc="/assets/icons/login.svg"
                        text="Anmelden"
                        onClick={toggleLoginForm}
                    />
                    <ButtonWithIcon
                        iconSrc="/assets/icons/register.svg"
                        text="Registrieren"
                        inactive={true}
                    />
                </ButtonArea>
            )}
        </Section>
    );
};

const Section = styled.section`
    height: 100%;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;
