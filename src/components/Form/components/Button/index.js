import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-family: 'Montserrat';
  background: #6278f7;
  border-width: 0;
  border-radius: 10px;
  padding: 28px 29px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

function Button({ children, type }) {
  return <ButtonStyle type={type}>{children}</ButtonStyle>;
}

export default Button;
