import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';
import Footer from './components/Footer';

const teams = [
  {
    name: 'Programming',
    color: '202, 92%, 75%',
  },
  {
    name: 'Front-End',
    color: '139, 47%, 55%',
  },
  {
    name: 'Data Science',
    color: '27, 100%, 58%',
  },
  {
    name: 'Devops',
    color: '81, 57%, 58%',
  },
  {
    name: 'Ux and Design',
    color: '1, 60%, 65%',
  },
  {
    name: 'Mobile',
    color: '315, 60%, 65%',
  },
  {
    name: 'Innovation and Management',
    color: '43, 100%, 51%',
  },
];

function App() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <Banner />
      <Form setCards={setCards} teams={teams} />
      <Teams cards={cards} teams={teams} />
      <Footer />
    </>
  );
}

export default App;
