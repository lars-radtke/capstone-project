import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import {
    InputNotice,
    TextInput,
    PasswordInput,
    ButtonWithIcon,
} from 'components';

export const Login = ({ onLogin, dataNotFound }) => {
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
        } else if (input === '') {
            setNameFilled(false);
            setNameWrongFormat(false);
        } else {
            setNameFilled(false);
            setNameWrongFormat(true);
        }
    };

    const focusOutPassword = event => {
        const input = event.target.value;
        if (input.length === 0) {
            setPasswordFilled(false);
            setPasswordWrongLength(false);
        } else if (input.length >= 6) {
            setPasswordFilled(true);
            setPasswordWrongLength(false);
        } else {
            setPasswordFilled(false);
            setPasswordWrongLength(true);
        }
    };

    useEffect(() => {
        setInactive(!(nameFilled && passwordFilled));
    }, [passwordFilled, nameFilled]);

    return (
        <>
            <Form id="loginForm" onSubmit={onLogin}>
                {dataNotFound && (
                    <InputNotice
                        errorText="Wir konnten die gesuchte Person nicht finden."
                        helpText="Bitte überprüfe deine Eingaben."
                    />
                )}
                <TextInput
                    label="Benutzername"
                    name="name"
                    placeholder="max.musterschueler@klasse"
                    focusOut={focusOutName}
                />
                {nameWrongFormat && (
                    <InputNotice
                        errorText="Deine Eingabe entspricht nicht dem gültigen Format."
                        helpText="Beispiel: max (dot) musterschueler (at) klasse"
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
                <ButtonWithIcon
                    iconSrc="/assets/icons/login.svg"
                    text="Anmelden"
                    inactive={inactive}
                />
            </Form>
        </>
    );
};

const Form = styled.form`
    width: 100%;
    padding: 30px;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;
