import { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import Select from './components/Select';
import Title from './components/Title';

const FormStyle = styled.form`
  background: #f7f7f7;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 32px 96px;
  margin: 80px auto;
  max-width: 920px;

  @media (max-width: 426px) {
    padding: 32px 40px;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-block: 40px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #212121;
`;

function Form({ setCards, teams }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  function insert(event) {
    event.preventDefault();
    setCards(previous => [
      ...previous,
      { name: name, position: position, image: image, team: team },
    ]);
    clear();
  }

  function clear() {
    setName('');
    setPosition('');
    setImage('');
  }

  return (
    <FormStyle onSubmit={insert}>
      <Title>Fill in the form to add the cooperator card.</Title>
      <DataWrapper>
        <Data>
          <Label>Name</Label>
          <Input
            name="name"
            placeholder="Type your name"
            required={true}
            type="text"
            updateState={setName}
            value={name}
          />
        </Data>
        <Data>
          <Label>Position</Label>
          <Input
            name="position"
            placeholder="Type your position"
            required={true}
            type="text"
            updateState={setPosition}
            value={position}
          />
        </Data>
        <Data>
          <Label>Image</Label>
          <Input
            name="image"
            placeholder="Insert the image address"
            required={false}
            type="text"
            updateState={setImage}
            value={image}
          />
        </Data>
        <Data>
          <Label>Team</Label>
          <Select name="team" teams={teams} updateState={setTeam} />
        </Data>
      </DataWrapper>
      <Button type="submit">Add card</Button>
    </FormStyle>
  );
}

export default Form;
