import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import {
    TextInput,
    ButtonWithIcon,
    PasswordInput,
    InputNotice,
} from 'components';

export const Login = ({ handleLogin }) => {
    const [nameFilled, setNameFilled] = useState(false);
    const [nameWrongFormat, setNameWrongFormat] = useState(false);
    const [passwordWrongLength, setPasswordWrongLength] = useState(false);
    const [passwordFilled, setPasswordFilled] = useState(false);
    const [inactive, setInactive] = useState(true);

    const focusOutName = event => {
        const input = event.target.value;
        if (
            input &&
            input.indexOf('.') !== -1 &&
            input.indexOf('@') !== -1 &&
            input.indexOf('@') > input.indexOf('.') + 1 &&
            input.indexOf('@') + 1 < input.length
        ) {
            setNameFilled(true);
            setNameWrongFormat(false);
        } else {
            setNameFilled(false);
            setNameWrongFormat(true);
        }
    };

    const focusOutPassword = event => {
        const input = event.target.value;
        const inputIsValid = input.length >= 6;
        setPasswordFilled(inputIsValid);
        setPasswordWrongLength(!inputIsValid);
    };

    useEffect(() => {
        if (nameFilled === true && passwordFilled === true) {
            setInactive(false);
        } else {
            setInactive(true);
        }
    }, [passwordFilled, nameFilled]);

    return (
        <>
            <Form onSubmit={handleLogin}>
                <TextInput
                    label="Benutzername"
                    name="name"
                    placeholder="max.musterschueler@klasse"
                    focusOut={focusOutName}
                />
                {nameWrongFormat && (
                    <InputNotice
                        errorText="Deine Eingabe entspricht nicht dem gültigen Format."
                        helpText="Beispiel: max(dot)musterschueler(at)klasse"
                    />
                )}
                <PasswordInput
                    label="Passwort"
                    type="password"
                    name="password"
                    placeholder="SuperSicheresPasswort"
                    focusOut={focusOutPassword}
                />
                {passwordWrongLength && (
                    <InputNotice
                        passwordWrongLength
                        errorText="Deine Eingabe entspricht nicht der gültigen Mindestlänge."
                        helpText="Das Passwort muss aus mindestens 6 Zeichen bestehen."
                    />
                )}
            </Form>
            <Wrapper>
                <ButtonWithIcon
                    iconSrc="/assets/icons/login.svg"
                    text="Anmelden"
                    inactive={inactive}
                />
            </Wrapper>
        </>
    );
};

const Form = styled.form`
    width: 100%;
    margin-top: 30px;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
