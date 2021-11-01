import styled from 'styled-components/macro';

export const Separator = ({ text }) => {
    return <Text>{text}</Text>;
};

const Text = styled.p`
    width: 100%;
    padding: 0 30px;
    font-size: 28px;
    font-weight: 200;
    color: white;
    border-bottom: 1px solid white;
`;
