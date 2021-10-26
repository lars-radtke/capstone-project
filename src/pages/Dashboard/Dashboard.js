import { ButtonWithIcon } from 'components';
import { ClassOverview } from 'components/ClassOverview';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

export const Dashboard = ({ user, logoutUser }) => {
    document.title = 'Dashboard | Student Compass';
    const { firstname } = user;

    const [greeting, setGreeting] = useState(() => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        if (hours <= 8) {
            return 'Guten Morgen, ';
        } else if (hours > 8) {
            return 'Hallo ';
        } else if (hours > 16) {
            return 'Guten Abend, ';
        }
    });

    const [day] = useState(() => {
        let date = new Date();
        let dy = date.getDay();
        return dy;
    });
    const [hours, setHours] = useState(() => {
        let date = new Date();
        let hrs = date.getHours();
        return hrs;
    });

    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date();
            setHours(currentTime.getHours());
            if (hours <= 8) {
                setGreeting('Guten Morgen, ');
            } else if (hours > 8) {
                setGreeting('Hallo ');
            } else if (hours > 16) {
                setGreeting('Guten Abend, ');
            }
        }, 1000);
    });

    return (
        <Section>
            {greeting !== '' && (
                <Greeting>
                    {greeting}
                    {firstname}.
                </Greeting>
            )}
            <ClassOverview day={day} />
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
    padding: 30px;
    overflow: visible;
`;

const Greeting = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: var(--black);
    opacity: 0.3;
    margin-bottom: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
