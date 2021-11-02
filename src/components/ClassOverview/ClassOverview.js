import styled from 'styled-components/macro';
import { ClassTile } from 'components';
import schoolTimetable from 'mockData/schoolTimetable.json';
import { Separator } from 'components';

export const ClassOverview = () => {
    const date = schoolTimetable;

    return (
        <>
            <Separator text="Stundenplan" />
            <SwipeContainer>
                {date.courses.map(el => {
                    return (
                        <ClassTile key={el.courseNumber} data={el}></ClassTile>
                    );
                })}
            </SwipeContainer>
        </>
    );
};

const SwipeContainer = styled.div`
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    &::before {
        content: '';
        width: 20%;
        display: inline-block;
    }
    &::after {
        content: '';
        width: 20%;
        display: inline-block;
    }
`;
