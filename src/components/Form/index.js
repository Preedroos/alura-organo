import styled from 'styled-components';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import Select from './components/Select';
import Title from './components/Title';

const StyledForm = styled.div`
  background: #f7f7f7;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 32px 96px;
  margin: 80px 160px;
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

function Form() {
  return (
    <StyledForm>
      <Title>Fill in the form to add the cooperator card.</Title>
      <form action="">
        <DataWrapper>
          <Data>
            <Label>Name</Label>
            <Input
              autocomplete="off"
              name="name"
              placeholder="Type your name"
              required={true}
            />
          </Data>
          <Data>
            <Label>Position</Label>
            <Input
              autocomplete="off"
              name="position"
              placeholder="Type your position"
              required={true}
            />
          </Data>
          <Data>
            <Label>Image</Label>
            <Input
              autocomplete="off"
              name="image"
              placeholder="Insert the image address"
              required={false}
            />
          </Data>
          <Data>
            <Label>Time</Label>
            <Select />
          </Data>
        </DataWrapper>
        <Button>Add card</Button>
      </form>
    </StyledForm>
  );
}

export default Form;
