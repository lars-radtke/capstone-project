import styled from 'styled-components/macro';

export const InputNotice = ({ error, errorText, helpText }) => {
    return (
        <Wrapper error={error}>
            <Grid>
                <img src="/assets/icons/warning.svg" alt="Warning:" />
                <ErrorMessage>{errorText}</ErrorMessage>
            </Grid>
            <HelpText>{helpText}</HelpText>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    grid-template-rows: auto auto;
    gap: 10px;

    border: 1px solid var(--red);

    padding: 10px 20px;

    color: var(--red);

    margin-bottom: 25px;

    display: ${({ error }) => (error ? 'grid' : 'none')};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 10px;
    align-items: center;
`;

const ErrorMessage = styled.p`
    font-weight: 500;
    font-size: 18px;
`;

const HelpText = styled.p`
    font-style: italic;
    font-weight: 200;
    font-size: 16px;
`;
