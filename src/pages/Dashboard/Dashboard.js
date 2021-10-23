import { ButtonWithIcon } from 'components';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

export const Dashboard = ({ user, logoutUser }) => {
    document.title = 'Dashboard | Student Compass';
    const { firstname, lastname, groups } = user;
    const [greeting, setGreeting] = useState(`Hallo ${firstname}.`);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            if (currentHour <= 8) {
                setGreeting(`Guten Morgen, ${firstname}.`);
            } else if (currentHour > 8 && currentHour <= 16) {
                setGreeting(`Hallo ${firstname}.`);
            } else {
                setGreeting(`Guten Abend, ${firstname}.`);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Section>
            {greeting}
            <Wrapper>
                <ButtonWithIcon
                    iconSrc="/assets/icons/logout.svg"
                    text="Abmelden"
                    onClick={logoutUser}
                />
            </Wrapper>
        </Section>
    );
};

const Section = styled.section`
    height: 100%;
    padding: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
