import React from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

const App = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projet ${Date.now()}`,
      owner: 'Teste',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Homepage" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
};

export default App;
