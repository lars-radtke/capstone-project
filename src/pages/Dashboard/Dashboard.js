import {
    ButtonWithIcon,
    ClassOverview,
    LoadingSpinner,
    Separator,
    DangerZone,
} from 'components';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import img from 'styles/Klammerfisch.jpg';

export const Dashboard = ({ user, day, hours, logoutUser }) => {
    const [toggleProfileView, setToggleProfileView] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [fakeLoadActive, setFakeLoadActive] = useState(true);

    useEffect(() => {
        document.title = 'Dashboard | Student Compass';

        setTimeout(function () {
            setFakeLoadActive(false);
        }, 3500);
    });

    useEffect(() => {
        if (hours <= 8) {
            setGreeting('Guten Morgen, ');
        } else if (hours >= 18) {
            setGreeting('Guten Abend, ');
        } else {
            setGreeting('Hallo, ');
        }
    }, [hours]);

    const onProfileViewToggle = () => {
        setToggleProfileView(!toggleProfileView);
    };

    return (
        <>
            {fakeLoadActive ? (
                <LoadingSpinner />
            ) : (
                <>
                    <ProfileInfo toggleProfileView={toggleProfileView}>
                        <OverflowContainer>
                            <Greeting>
                                {greeting}
                                {user.firstname}.
                            </Greeting>
                            <Courses>
                                Deine Gruppen:
                                <Group>
                                    <Klammerfisch />
                                    Die Klammerfische
                                </Group>
                                <Group>
                                    <Img />
                                    Theater AG
                                </Group>
                                <Group>
                                    <Img />
                                    Streitschlichter
                                </Group>
                            </Courses>
                            <ButtonWithIcon
                                iconSrc="/assets/icons/all.svg"
                                text="Dokumente"
                                inactive={true}
                            />
                            <ButtonWithIcon
                                iconSrc="/assets/icons/logout.svg"
                                text="Abmelden"
                                highlighted={true}
                                onClick={logoutUser}
                            />
                        </OverflowContainer>
                    </ProfileInfo>

                    <CourseInfo toggleProfileView={toggleProfileView}>
                        <CloseCourseInfoButton onClick={onProfileViewToggle}>
                            Profil{' '}
                            {toggleProfileView === true
                                ? 'schließen'
                                : 'aufrufen'}
                        </CloseCourseInfoButton>
                        <Content>
                            <ClassOverview day={day} />
                            <Separator text="Hausaufgaben" />
                            <DangerZone />
                        </Content>
                    </CourseInfo>
                </>
            )}
        </>
    );
};

const ProfileInfo = styled.section`
    height: ${({ toggleProfileView }) =>
        toggleProfileView ? 'calc(100% - 44px)' : '74px'};
    padding: 20px 30px;

    transition: 0.8s;
    overflow: hidden;
`;

const OverflowContainer = styled.div`
    height: calc(100vh - calc(20px + 74px));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Greeting = styled.p`
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 20px;
`;

const CourseInfo = styled.section`
    width: 100%;
    height: calc(100% - 74px);

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.8s;

    position: absolute;
    top: ${({ toggleProfileView }) =>
        toggleProfileView ? 'calc(100% - 44px)' : '74px'};
`;

const CloseCourseInfoButton = styled.div`
    width: 100%;
    color: white;
    font-size: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

const Content = styled.div`
    width: 100%;
    height: calc(100% - 44px);

    display: flex;
    flex-direction: column;
    gap: 20px;

    overflow: scroll;
`;

const Courses = styled.div`
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Img = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: transparent;
    border: 2px solid white;
`;
const Klammerfisch = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: transparent;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid white;
`;

const Group = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;
