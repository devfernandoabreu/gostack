import React from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

const App = () => {
  const [projects, setProjects] = React.useState([
    'Desenvolvimento de app',
    'Front-end web',
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projet ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Homepage" />

      <img width={500} src={backgroundImage} alt="Back" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
};

export default App;
