import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';
import Footer from './components/Footer';

function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Programming',
      color: '#85cffa',
    },
    {
      name: 'Front-End',
      color: '#56c278',
    },
    {
      name: 'Data Science',
      color: '#ff8929',
    },
    {
      name: 'Devops',
      color: '#a6d157',
    },
    {
      name: 'Ux and Design',
      color: '#db7270',
    },
    {
      name: 'Mobile',
      color: '#db70c1',
    },
    {
      name: 'Innovation and Management',
      color: '#ffb805',
    },
  ]);

  const [cards, setCards] = useState([]);

  return (
    <>
      <Banner />
      <Form setCards={setCards} teams={teams} />
      <Teams cards={cards} teams={teams} setTeams={setTeams} />
      <Footer />
    </>
  );
}

export default App;
