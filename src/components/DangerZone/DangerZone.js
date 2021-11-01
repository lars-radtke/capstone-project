import { HomeworkButton } from 'components';
import styled from 'styled-components/macro';

export const DangerZone = () => {
    return (
        <List>
            <HomeworkButton
                title="Spanisch"
                text="Leer paginas 6 y 7."
                course="Spanisch"
                dueTo="November 1, 21 00:00:00 GMT+0100"
                bgColor="black"
            />
            <HomeworkButton
                title="Deutsch"
                text="Erstelle eine Charakterbeschreibung des jungen Werthers."
                course="Deutsch"
                dueTo="November 2, 21 00:00:00 GMT+0100"
                bgColor="var(--red)"
            />
            <HomeworkButton
                title="Englisch"
                text="Write an essay about pros and cons for Theresa regarding the Brexit."
                course="Englisch"
                dueTo="November 3, 21 00:00:00 GMT+0100"
                bgColor="var(--red)"
            />
            <HomeworkButton
                title="Philosophie"
                text="Notiere dir die fundamentalen Fragen, die die im Text genannten Personen stellen."
                course="Philosophie"
                dueTo="November 4, 21 00:00:00 GMT+0100"
                bgColor="white"
            />
            <HomeworkButton
                title="Geografie"
                text="Recherchiere zu den verschiedenen Entwicklungsansätzen auf Arbeitsblatt 3."
                course="Geografie"
                dueTo="November 5, 21 00:00:00 GMT+0100"
                bgColor="white"
            />
        </List>
    );
};

const List = styled.ul`
    padding: 0 30px;
    width: 100%;
    height: 46%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
`;
