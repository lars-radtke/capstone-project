import { useState } from 'react';
import styled from 'styled-components/macro';

export const HomeworkButton = ({ title, text, course, dueTo, bgColor }) => {
    const [enlarged, setEnlarged] = useState(false);
    const [removed, setRemoved] = useState(false);

    const toggleEnlarge = () => {
        setEnlarged(!enlarged);
    };

    return (
        <Homework
            removed={removed}
            bgColor={bgColor}
            onClick={() => {
                toggleEnlarge();
            }}
        >
            <Title>
                {title}
                {bgColor === 'black'
                    ? ' - überfällig!'
                    : bgColor === 'var(--red)'
                    ? ' - dringend!'
                    : ''}
            </Title>
            {enlarged === true ? (
                <Details>
                    <Text>{text}</Text>
                    <Click onClick={event => setRemoved(!removed)}>
                        erledigt!
                    </Click>
                </Details>
            ) : (
                <></>
            )}
        </Homework>
    );
};

const Homework = styled.button`
    display: ${({ removed }) => (removed ? 'none' : 'inline-block')};
    padding: 10px;
    width: 100%;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 10px;
    color: black;
    opacity: ${({ done }) => (done ? 0.3 : 1)};
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ bgColor }) =>
        bgColor === 'black' || bgColor === 'var(--red)' ? 'white' : 'black'};
    :last-child {
        margin-bottom: 10px;
    }
`;

const Title = styled.p``;

const Details = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Text = styled.p`
    min-height: 60px;
    font-size: 12px;
`;

const Click = styled.div`
    background-color: limegreen;
    color: white;
    border-radius: 5px;
    padding: 2px 5px;
`;
