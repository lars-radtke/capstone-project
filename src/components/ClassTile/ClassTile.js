import styled from 'styled-components/macro';

export const ClassTile = ({ data }) => {
    const {
        startHour,
        startMinutes,
        endHour,
        endMinutes,
        bgColor,
        color,
    } = data;

    const convertNumberToTimeString = (a, b) => {
        const toTwoDigitString = number => {
            const string = number.toString();
            if (string.length === 1) {
                return '0' + string;
            } else return string;
        };

        return a + ':' + toTwoDigitString(b);
    };

    let coachesArray = data.coaches;

    const coachesSet = data.coaches ? true : false;

    return (
        <Tile bgColor={bgColor} color={color}>
            <ContentGrid>
                <ClassName>{data.courseName}</ClassName>
                <Time>
                    {convertNumberToTimeString(startHour, startMinutes)} {' – '}
                    {convertNumberToTimeString(endHour, endMinutes)}
                </Time>
                {coachesSet && (
                    <Coaches>
                        {coachesArray.map(coach => {
                            return <Coach key={coach}>{coach}</Coach>;
                        })}
                    </Coaches>
                )}
            </ContentGrid>
        </Tile>
    );
};

const Tile = styled.div`
    margin: 0 10px 20px 10px;
    min-width: 240px;
    padding: 20px 30px;
    left: ${({ index }) => (index + 1) * 20};
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'grey')};
    color: ${({ color }) => (color ? color : 'black')};
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    scroll-snap-align: center;
    display: inline-block;

    &:first-of-type {
        margin-left: 0;
    }
    :last-of-type {
        margin-right: 0;
    }
`;

const ContentGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 10px;
`;

const ClassName = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

const Time = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

const Coaches = styled.p`
    font-size: 14px;
    font-weight: 200;
`;

const Coach = styled.span`
    &:not(:last-of-type) {
        ::after {
            content: ' , ';
            display: inline;
        }
    }
`;
