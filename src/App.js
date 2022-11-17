import styled from 'styled-components';
import Banner from './components/Banner';
import Form from './components/Form';

const StyledApp = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <StyledApp>
      <Banner />
      <Form />
    </StyledApp>
  );
}

export default App;
