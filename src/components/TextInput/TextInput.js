import styled from 'styled-components/macro';

export const TextInput = ({
    label,
    name,
    placeholder,
    focusOut,
    dataNotFound,
}) => {
    return (
        <>
            <Label>
                {label}
                <Input
                    type="text"
                    autoComplete="off"
                    name={name}
                    placeholder={placeholder}
                    onBlur={event => focusOut(event)}
                    dataNotFound={dataNotFound}
                    required
                ></Input>
            </Label>
        </>
    );
};

const Label = styled.label`
    display: block;
    width: 100%;

    font-size: 14px;
    font-weight: 400;

    border-bottom: 1px solid var(--black);

    margin-bottom: 25px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 0;

    font-size: 16px;
    font-weight: 600;

    background: none;

    &::placeholder {
        font-weight: 400;
        opacity: 0.3;
    }

    border: none;
`;
