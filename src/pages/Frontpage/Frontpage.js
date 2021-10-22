import { Logo, Login } from 'components';
import data from '../../data.json';
import styled from 'styled-components/macro';
import { useState } from 'react';

export const Frontpage = ({ authenticateUser }) => {
    const [dataNotFound, setDataNotFound] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const { name, password } = event.target.elements;

        const user = data.filter(
            user =>
                user.login === name.value && user.password === password.value,
        );

        if (user.length !== 0) {
            setDataNotFound(false);
            authenticateUser(user);
        } else {
            setDataNotFound(true);
        }
    };

    return (
        <Page>
            <Logo />
            <Login handleLogin={handleLogin} dataNotFound={dataNotFound} />
        </Page>
    );
};

const Page = styled.section`
    height: 100%;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
