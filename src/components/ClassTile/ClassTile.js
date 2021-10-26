import styled from 'styled-components/macro';

export const ClassTile = ({ data }) => {
    const timeToString = number => {
        const string = number.toString();
        if (string.length === 3) {
            return string.substring(0, 1) + ':' + string.substring(1, 3);
        } else {
            return string.substring(0, 2) + ':' + string.substring(2, 4);
        }
    };

    let coachesSet = false;
    let coachesArray = data.coaches;

    if (coachesArray) {
        coachesSet = true;
    }

    return (
        <Tile>
            <Grid>
                <ClassName>{data.courseName}</ClassName>
                <Time>
                    {timeToString(data.start)} – {timeToString(data.end)}
                </Time>
                <div></div>
                {coachesSet && (
                    <Coaches>
                        {coachesArray.map(coach => {
                            return <Coach key={coach}>{coach}</Coach>;
                        })}
                    </Coaches>
                )}
            </Grid>
        </Tile>
    );
};

const Tile = styled.div`
    margin: 20px 10px 30px 10px;
    min-width: 240px;
    height: 100px;
    padding: 10px;
    position: sticky;
    left: 30px;
    background-color: white;
    border: 1px solid black;

    display: inline-block;
`;
const Grid = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 20px 14px 1fr 14px;
    gap: 5px;
`;

const ClassName = styled.p`
    font-size: 20px;
    color: var(--black);
    font-weight: 600;
`;

const Time = styled.p`
    font-size: 14px;
    color: var(--black);
    font-weight: 400;
`;

const Coaches = styled.p`
    font-size: 14px;
    color: var(--black);
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
