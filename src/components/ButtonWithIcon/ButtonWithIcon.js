import styled from 'styled-components/macro';

export const ButtonWithIcon = ({
    iconSrc,
    text,
    highlightend,
    inactive,
    onClick,
}) => {
    return (
        <Button
            highlightend={highlightend}
            disabled={inactive}
            onClick={onClick}
        >
            <img src={iconSrc} alt="" />
            {text}
        </Button>
    );
};

const Button = styled.button`
    padding: 10px 20px 10px 18px;
    margin-top: 18px;
    border-radius: 20px;

    display: grid;
    grid-template-columns: 24px auto;
    gap: 18px;
    align-items: center;

    opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
