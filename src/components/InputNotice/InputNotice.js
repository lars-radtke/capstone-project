import styled from 'styled-components/macro';

export const InputNotice = ({ errorText, helpText }) => {
    return (
        <Div>
            <img src="/assets/icons/warning.svg" alt="Warnung" />
            <ErrorMessage>{errorText}</ErrorMessage>
            <HelpText>{helpText}</HelpText>
        </Div>
    );
};

const Div = styled.div`
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 10px;
    align-items: center;

    border: 1px solid var(--red);

    padding: 10px 20px;

    color: var(--red);

    margin-bottom: 25px;
`;

const ErrorMessage = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: var(--red);
`;

const HelpText = styled.p`
    grid-column: 1 / -1;

    font-style: italic;
    font-weight: 200;
    font-size: 16px;

    color: var(--red);
`;
