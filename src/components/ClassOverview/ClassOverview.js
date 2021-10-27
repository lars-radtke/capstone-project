import styled from 'styled-components/macro';
import { ClassTile } from 'components';
import classesData from '../../classesData.json';

export const ClassOverview = ({ day }) => {
    const date = classesData.find(course => course.id === day);
    const dayName = date.day;

    return (
        <>
            <Heading>Dein Plan für heute, {dayName}:</Heading>
            <SwipeContainer>
                {date.courses.map(el => {
                    return <ClassTile key={el.start} data={el}></ClassTile>;
                })}
            </SwipeContainer>
        </>
    );
};

const Heading = styled.p`
    font-size: 16px;
    font-weight: 400;
`;

const SwipeContainer = styled.div`
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory;
    scroll-snap-destination: 0 0;

    &::before {
        content: '';
        width: 20px;
        display: inline-block;
    }
    &::after {
        content: '';
        width: 20px;
        display: inline-block;
    }
`;
