import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import {
    InputNotice,
    TextInput,
    PasswordInput,
    ButtonWithIcon,
} from 'components';

export const Login = ({ handleLogin, dataNotFound }) => {
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
        if (input === '') {
            setPasswordFilled(false);
            setPasswordWrongLength(false);
        } else if (input >= 6) {
            setPasswordFilled(true);
            setPasswordWrongLength(false);
        } else {
            setPasswordFilled(false);
            setPasswordWrongLength(true);
        }
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
                <Wrapper>
                    <ButtonWithIcon
                        iconSrc="/assets/icons/login.svg"
                        text="Anmelden"
                        inactive={inactive}
                    />
                </Wrapper>
            </Form>
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
