import styled from 'styled-components';
import Card from '../Card';

const TeamStyle = styled.div`
  background-color: ${props => props.color + '60'};
  background-image: url('/images/background.png');
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 34px;
`;

const InputColor = styled.input`
  position: absolute;
  top: 1em;
  right: 2em;
  border: 0;
  padding: 0;
`;

const Title = styled.h2`
  font-family: 'Prata';
  font-weight: 400;
  font-size: 32px;
  color: #212121;
  margin-bottom: 46px;

  &::after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 4px solid ${props => props.color};
    width: 32px;
    top: 15px;
    left: calc(50% - 16px);
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 6px;
  gap: 24px;
  flex-wrap: wrap;
`;

function Team({ cards, color, name, onChangeColor }) {
  function onDeleteCard(event) {
    console.log(event.target.parentElement);
  }

  return (
    <TeamStyle color={color}>
      <InputColor
        value={color}
        type="color"
        onChange={event => onChangeColor(event.target.value, name)}
      />
      <Title color={color}>{name}</Title>
      <Cards>
        {cards.map((card, index) => (
          <Card
            key={index}
            color={color}
            image={card.image}
            name={card.name}
            position={card.position}
            onDelete={onDeleteCard}
          />
        ))}
      </Cards>
    </TeamStyle>
  );
}

export default Team;
