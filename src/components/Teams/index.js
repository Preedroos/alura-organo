import Team from './components/Team';

const colors = {
  blue: '202, 92%, 75%',
  green: '139, 47%, 55%',
  orange: '27, 100%, 58%',
  pear: '81, 57%, 58%',
  pink: '1, 60%, 65%',
  purple: '315, 60%, 65%',
  yellow: '43, 100%, 51%',
};

function Teams() {
  return (
    <section>
      <Team title="Programação" color={colors['green']} />
      <Team title="Front-End" color={colors['blue']} />
      <Team title="Data Science" color={colors['pear']} />
      <Team title="Devops" color={colors['pink']} />
      <Team title="Ux e Design" color={colors['purple']} />
      <Team title="Mobile" color={colors['yellow']} />
      <Team title="Inovação e Gestão" color={colors['orange']} />
    </section>
  );
}

export default Teams;
