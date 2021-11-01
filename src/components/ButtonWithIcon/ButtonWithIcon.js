import styled from 'styled-components/macro';

export const ButtonWithIcon = ({
    iconSrc,
    text,
    highlighted,
    inactive,
    onClick,
}) => {
    return (
        <Button highlighted={highlighted} disabled={inactive} onClick={onClick}>
            <img src={iconSrc} alt="" />
            {text}
        </Button>
    );
};

const Button = styled.button`
    width: 100%;
    padding: 10px 0;

    display: grid;
    grid-template-columns: 24px auto;
    gap: 18px;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 10px;

    color: ${({ highlighted }) =>
        highlighted ? 'var(--white)' : 'var(--black)'};
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;

    transition: 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    background-color: ${({ highlighted }) =>
        highlighted ? 'var(--red)' : 'var(--white)'};
    opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    img {
        filter: ${({ highlighted }) =>
            highlighted ? 'invert(1)' : 'invert(0)'};
    }

    :active {
        transform: translateY(8px);
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
`;
