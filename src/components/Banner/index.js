import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 20%;
`;

function Banner() {
  return (
    <header>
      <Image src="/images/banner.png" alt="" />
    </header>
  );
}

export default Banner;
