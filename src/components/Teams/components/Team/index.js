import styled from 'styled-components';
import Card from '../Card';

const TeamStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsla(${props => props.color}, 0.15);
  padding-block: 34px;
`;

const Title = styled.h3`
  font-family: 'Prata';
  font-weight: 400;
  font-size: 32px;
  color: #212121;
  margin-bottom: 46px;

  &::after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 4px solid hsla(${props => props.color}, 1);
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
`;

function Team(props) {
  return (
    <TeamStyle color={props.color}>
      <Title color={props.color}>{props.title}</Title>
      <Cards>
        <Card
          src="https://avatars.githubusercontent.com/u/69660117?v=4"
          name="Pedro Cabral"
          desc="Web Developer"
          color={props.color}
        />
        <Card
          src="https://avatars.githubusercontent.com/u/69660117?v=4"
          name="Pedro Cabral"
          desc="Web Developer"
          color={props.color}
        />
        <Card
          src="https://avatars.githubusercontent.com/u/69660117?v=4"
          name="Pedro Cabral"
          desc="Web Developer"
          color={props.color}
        />
        <Card
          src="https://avatars.githubusercontent.com/u/69660117?v=4"
          name="Pedro Cabral"
          desc="Web Developer"
          color={props.color}
        />
      </Cards>
    </TeamStyle>
  );
}

export default Team;
