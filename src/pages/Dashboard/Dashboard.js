import { ButtonWithIcon } from 'components';
import { ClassOverview } from 'components/ClassOverview';
import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

export const Dashboard = ({ user, day, hours, logoutUser }) => {
    document.title = 'Dashboard | Student Compass';

    const [toggleProfileView, setToggleProfileView] = useState(false);

    const onProfileViewToggle = () => {
        setToggleProfileView(!toggleProfileView);
    };

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        if (hours <= 8) {
            setGreeting('Guten Morgen, ');
        } else if (hours >= 18) {
            setGreeting('Guten Abend, ');
        } else {
            setGreeting('Hallo, ');
        }
    }, [hours]);

    return (
        <>
            <ProfileInfo toggleProfileView={toggleProfileView}>
                <OverflowContainer>
                    <Greeting>
                        {greeting}
                        {user.firstname}.
                    </Greeting>
                    <ButtonWithIcon
                        iconSrc="/assets/icons/logout.svg"
                        text="Abmelden"
                        onClick={logoutUser}
                    />
                </OverflowContainer>
            </ProfileInfo>

            <CourseInfo toggleProfileView={toggleProfileView}>
                <CloseCourseInfoButton onClick={onProfileViewToggle}>
                    <Bar />
                </CloseCourseInfoButton>
                <ClassOverview day={day} />
            </CourseInfo>
        </>
    );
};

const ProfileInfo = styled.section`
    height: ${({ toggleProfileView }) =>
        toggleProfileView ? 'calc(100% - 44px)' : '74px'};
    padding: 20px 20px;

    transition: 1s;
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
    display: block;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 20px;
`;

const CourseInfo = styled.section`
    width: 100%;
    height: calc(100% - 74px);
    border: 3px solid white;
    border-bottom: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 40px 40px 0 0;

    transition: 1s;

    position: absolute;
    top: ${({ toggleProfileView }) =>
        toggleProfileView ? 'calc(100% - 44px)' : '74px'};

    background-image: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0)
    );
`;

const CloseCourseInfoButton = styled.div`
    display: inline-block;
    padding: 20px 5px;
    cursor: pointer;
`;

const Bar = styled.div`
    width: 50px;
    height: 4px;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;
