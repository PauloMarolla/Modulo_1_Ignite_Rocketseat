import React from 'react';
import RepositoryItem from './RepositoryItem';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'www.weblizze.com.br',
};

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};

export default RepositoryList;
