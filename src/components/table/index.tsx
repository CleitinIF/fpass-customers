import React from 'react';

import './styles.css';
import { useSelector } from 'react-redux';

const Table: React.FC = () => {
  const customers = useSelector((state: any) => state.customers);

  console.log(customers)

  return (
    <div className="table-container">
      <div className="search-container">
        <input name="birthday maxWidth" placeholder="Pesquisar" />
        <span className="material-icons input-suffix">
          close
        </span>
      </div>
      <table>
        <thead>
          <tr className="table-header">
            <th>Nome</th>
            <th>Data de nascimento</th>
            <th>CPF</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Data de nascimento</td>
            <td>CPF</td>
            <td>Celular</td>
          </tr>
          <tr>
            <td>Nome</td>
            <td>Data de nascimento</td>
            <td>CPF</td>
            <td>Celular</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;