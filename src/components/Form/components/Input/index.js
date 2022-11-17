import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border-width: 0;

  &::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #a4a4a4;
  }
`;

function Input({ name, placeholder, required }) {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      required={required}
      type=""
    />
  );
}

export default Input;
