import styled from 'styled-components';
import Team from './components/Team';

const Title = styled.h1`
  color: hsla(231, 90%, 68%);
  margin-block: 80px;
  text-align: center;
  font-family: 'Prata';
  font-weight: 400;
  font-size: 40px;

  &::after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 4px solid hsla(231, 90%, 68%);
    width: 64px;
    top: 15px;
    left: calc(50% - 32px);
  }
`;

function Teams({ cards, teams }) {
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
          />
        );
      })}
    </main>
  );
}

export default Teams;
