import styled from 'styled-components';

const InputStyle = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  height: 80px;
  background: white;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border: 0;
  border-radius: 5px;
  padding-inline: 20px;

  &::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #a4a4a4;
  }

  &:focus {
    outline: none;
  }
`;

function Input({ name, placeholder, required }) {
  return (
    <InputStyle
      name={name}
      placeholder={placeholder}
      required={required}
      type=""
    />
  );
}

export default Input;
