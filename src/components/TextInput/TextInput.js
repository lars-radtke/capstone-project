import styled from 'styled-components/macro';
import { InputNotice } from 'components';

export const TextInput = ({
    label,
    name,
    placeholder,
    focusOut,
    dataNotFound,
    error,
    errorText,
    helpText,
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
                    error={error}
                    dataNotFound={dataNotFound}
                    required
                ></Input>
            </Label>
            <InputNotice
                error={error}
                errorText={errorText}
                helpText={helpText}
            />
        </>
    );
};

const Label = styled.label`
    display: block;
    width: 100%;

    font-size: 14px;
    font-weight: 100;

    border-bottom: 1px solid var(--black);

    margin-bottom: 25px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 0;

    font-size: 16px;
    font-weight: 500;

    background: none;

    &::placeholder {
        font-weight: 200;
        opacity: 0.3;
    }

    border: none;

    color: ${({ error }) => (error ? 'var(--red)' : 'var(--black)')};
`;
