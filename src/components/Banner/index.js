import styled from 'styled-components';

const ImageWrapper = styled.header`
  background-color: #6278f7;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 60%;
`;

function Banner() {
  return (
    <ImageWrapper>
      <Image src="/images/banner.png" alt="" />
    </ImageWrapper>
  );
}

export default Banner;
