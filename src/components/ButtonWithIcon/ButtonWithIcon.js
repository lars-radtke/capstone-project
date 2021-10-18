import styled from 'styled-components/macro';

export const ButtonWithIcon = ({
    icon,
    text,
    highlightend,
    disabled,
    action,
}) => {
    return (
        <ButtonSpacer>
            <Click
                highlightend={highlightend}
                disabled={disabled}
                onClick={action}
            >
                <img src={icon} alt="" />
                {text}
            </Click>
        </ButtonSpacer>
    );
};

const ButtonSpacer = styled.div`
    display: inline-block;

    padding-top: 48px;
`;

const Click = styled.button`
    padding: 10px 20px 10px 18px;

    display: grid;
    grid-template-columns: 24px auto;
    gap: 18px;
    align-items: center;
`;
