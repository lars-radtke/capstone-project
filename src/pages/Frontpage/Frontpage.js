import { Logo, Login } from 'components';
import userData from '../../userData.json';
import styled from 'styled-components/macro';
import { useState } from 'react';

export const Frontpage = ({ onAuthenticateUser }) => {
    const [dataNotFound, setDataNotFound] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const { name, password } = event.target.elements;

        const user = userData.find(
            user =>
                user.login === name.value && user.password === password.value,
        );

        if (user.length !== 0) {
            setDataNotFound(false);
            onAuthenticateUser(user);
        } else {
            setDataNotFound(true);
        }
    };

    return (
        <Section>
            <Logo />
            <Login onLogin={handleLogin} dataNotFound={dataNotFound} />
        </Section>
    );
};

const Section = styled.section`
    height: 100%;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
