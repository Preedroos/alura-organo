import styled from 'styled-components';
import Figures from './components/Figures';
import Social from './components/Social';
import Logo from './components/Logo';

const FooterStyle = styled.footer`
  background-color: hsla(231, 90%, 68%, 1);
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Credits = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: white;
`;

function Footer() {
  return (
    <FooterStyle>
      <Figures />
      <Social />
      <Logo />
      <Credits>Desenvolvido por Pedro Cabral</Credits>
    </FooterStyle>
  );
}

export default Footer;
