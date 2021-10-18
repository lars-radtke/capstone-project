import { Logo } from 'components';
import styled from 'styled-components/macro';

export const Frontpage = () => {
    return (
        <Page>
            <Logo />
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
