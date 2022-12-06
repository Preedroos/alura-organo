import styled from 'styled-components';

const CardStyle = styled.div`
  background: linear-gradient(
    to bottom,
    hsla(${props => props.color}, 1) 35%,
    white 0
  );
  border-radius: 10px;
  width: 262px;
  height: 272px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 8px;
`;

const Name = styled.h6`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #6278f7;
  margin: 0;
`;

const Position = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #212121;
`;

function Card({ color, name, position, src }) {
  return (
    <CardStyle color={color}>
      <Image src={src} />
      <Name>{name}</Name>
      <Position>{position}</Position>
    </CardStyle>
  );
}

export default Card;
