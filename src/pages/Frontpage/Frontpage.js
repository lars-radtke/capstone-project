import { Logo, Login } from 'components';
import styled from 'styled-components/macro';

export const Frontpage = onSubmit => {
    return (
        <Page>
            <Logo />
            <Login onSubmit={onSubmit} />
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
