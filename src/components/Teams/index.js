import styled from 'styled-components';
import Team from './components/Team';

const Title = styled.h1`
  color: #647af7;
  margin-block: 80px;
  text-align: center;
  font-family: 'Prata';
  font-weight: 400;
  font-size: 40px;

  &::after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 4px solid #647af7;
    width: 64px;
    top: 15px;
    left: calc(50% - 32px);
  }
`;

function Teams({ cards, teams, setTeams }) {
  function onChangeTeamColor(color, name) {
    setTeams(
      teams.map(team => {
        if (team.name === name) {
          team.color = color;
        }
        return team;
      })
    );
  }

  return (
    <main>
      <Title>My Teams</Title>
      {teams.map(team => {
        const teamCards = cards.filter(card => card.team === team.name);
        return (
          <Team
            cards={teamCards}
            color={team.color}
            key={team.name}
            name={team.name}
            onChangeColor={onChangeTeamColor}
          />
        );
      })}
    </main>
  );
}

export default Teams;
