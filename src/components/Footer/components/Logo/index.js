import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
  z-index: 2;
`;

function Logo() {
  return <Img src="/images/logo.png" alt="Logo" />;
}

export default Logo;
