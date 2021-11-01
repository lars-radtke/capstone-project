import styled from 'styled-components/macro';

export const Logo = () => {
    return (
        <Image
            src="/assets/images/student-compass_logo.svg"
            alt="Student Compass"
        />
    );
};

const Image = styled.img`
    width: 100%;
    max-width: 220px;
`;
