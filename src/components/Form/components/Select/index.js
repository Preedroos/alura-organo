import styled from 'styled-components';

const SelectStyle = styled.select`
  font-family: 'Montserrat', sans-serif;
  height: 80px;
  font-size: 16px;
  background: white;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border: 0;
  border-radius: 5px;
  padding-inline: 20px;

  &:focus {
    outline: none;
  }
`;

function Select({ name, teams, updateState }) {
  return (
    <SelectStyle
      name={name}
      onChange={event => updateState(event.target.value)}
      required
    >
      <option></option>
      {teams.map(team => (
        <option key={team.name} value={team.name}>
          {team.name}
        </option>
      ))}
    </SelectStyle>
  );
}

export default Select;
