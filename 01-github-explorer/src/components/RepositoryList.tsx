import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';
// https://api.github.com/users/PauloMarolla/repos

interface Repository {
  name: string,
  description: string,
  html_url: string,
  id: number,
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  console.log(repositories);
  useEffect(() => {
    fetch('https://api.github.com/users/PauloMarolla/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
