import styled from 'styled-components';

const FiguresStyle = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  display: flex;
  justify-content: space-around;

  & img {
    width: 80px;
    height: 80px;
  }

  & img:nth-child(1) {
    position: absolute;
    left: 2%;
    bottom: 30px;
  }

  & img:nth-child(2) {
    position: absolute;
    left: 35%;
    top: 50px;
  }

  & img:nth-child(3) {
    position: absolute;
    right: 35%;
    top: 20px;
  }

  & img:nth-child(4) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

function Figures() {
  return (
    <FiguresStyle>
      <img src="/images/polygon-1.png" alt=""></img>
      <img src="/images/polygon-2.png" alt=""></img>
      <img src="/images/ellipse-2.png" alt=""></img>
      <img src="/images/ellipse-3.png" alt=""></img>
    </FiguresStyle>
  );
}

export default Figures;
