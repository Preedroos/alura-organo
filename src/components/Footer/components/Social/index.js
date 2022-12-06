import styled from 'styled-components';

const SocialStyle = styled.div`
  display: flex;
  gap: 52px;
  z-index: 2;
`;

const Img = styled.img`
  cursor: pointer;  
`;

function Social() {
  return (
    <SocialStyle>
      <Img src="/images/facebook.png" alt="facebook" />
      <Img src="/images/twitter.png" alt="twitter" />
      <Img src="/images/instagram.png" alt="instagram" />
    </SocialStyle>
  );
}

export default Social;
