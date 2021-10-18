import styled from 'styled-components/macro';
import { ButtonWithIcon } from 'components';

export const Login = onSubmit => {
    function login(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        if (name.indexOf('.') !== -1 && name.indexOf('@') !== -1) {
            onSubmit(name);
            form.reset();
        }
    }

    return (
        <Form onSubmit={event => login(event)}>
            <StyledLabel>
                Benutzername
                <StyledInput
                    type="text"
                    name="name"
                    placeholder="max.musterschueler@class"
                    autoComplete="off"
                    required
                />
            </StyledLabel>
            <StyledLabel>
                Passwort
                <StyledInput
                    type="password"
                    name="password"
                    placeholder="SuperSicheresPasswort"
                    autoComplete="off"
                    required
                />
            </StyledLabel>
            <Wrapper>
                <ButtonWithIcon
                    icon="/assets/icons/login.svg"
                    text="Anmelden"
                />
            </Wrapper>
        </Form>
    );
};

const Form = styled.form`
    width: 100%;
`;

const StyledLabel = styled.label`
    width: 100%;
    font-size: 14px;
    font-weight: 100;
    display: block;
    &:not(:last-of-type) {
        margin-bottom: 25px;
    }
    border-bottom: 1px solid var(--black);
`;
const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px 0;
    border: none;
    background: none;
    font-size: 16px;
    font-weight: 500;
    &::placeholder {
        font-weight: 200;
        opacity: 0.5;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
