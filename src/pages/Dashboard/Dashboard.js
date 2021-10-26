import { ButtonWithIcon } from 'components';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

export const Dashboard = ({ user, logoutUser }) => {
    document.title = 'Dashboard | Student Compass';
    const { firstname } = user;
    const [greeting, setGreeting] = useState('Hallo ');

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            if (currentHour <= 8) {
                setGreeting('Guten Morgen, ');
            } else if (currentHour > 8 && currentHour <= 16) {
                setGreeting('Hallo ');
            } else {
                setGreeting('Guten Abend, ');
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Section>
            <Greeting>
                {greeting}
                {firstname}.
            </Greeting>
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

const Greeting = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: var(--black);
    opacity: 0.3;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
