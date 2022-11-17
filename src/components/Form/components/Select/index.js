import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border-width: 0;
`;

function Select() {
  return (
    <StyledSelect required>
      <option disabled selected></option>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </StyledSelect>
  );
}

export default Select;
