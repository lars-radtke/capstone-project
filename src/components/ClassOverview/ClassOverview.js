import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import { ClassTile } from 'components';
import classesData from '../../classesData.json';

export const ClassOverview = ({ day }) => {
    const date = classesData.find(course => course.id === day);
    const dayName = date.day;

    const todaysCourse = classesData.find(course => course.id === day);

    return (
        <>
            <P>Dein Plan für heute, {dayName}:</P>
            <Flexbox>
                {todaysCourse.courses.map(el => {
                    return <ClassTile key={el.start} data={el}></ClassTile>;
                })}
            </Flexbox>
        </>
    );
};

const P = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: var(--black);
`;

const Flexbox = styled.div`
    width: calc(100% + 60px);
    position: relative;
    left: -30px;
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
        width: calc(100% - 260px);
        display: inline-block;
    }
`;
