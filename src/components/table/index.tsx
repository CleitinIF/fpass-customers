import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';

import Customer from '../../types/Customer';
import { setCustomer } from '../../store/modules/form/action';

const Table: React.FC = () => {
  const customers = useSelector((state: any) => state.customers);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const timer = useRef(null) as any;

  const handleRowClick = (customer: Customer) => {
    dispatch(setCustomer(customer))
  }

  const searchCustomers = () => {
  }

  const handleSearchInput = (event: any) => {
    setSearchValue(event.currentTarget.value)

    clearTimeout(timer.current);
    timer.current = setTimeout(searchCustomers, 350)
  }

  return (
    <div className="table-container">
      <div className="search-container">
        <input autoComplete="off" value={searchValue} onChange={handleSearchInput} name="birthday" placeholder="Pesquisar" />
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
          {customers.map((customer: Customer) => (
            <tr key={customer.id} onClick={() => handleRowClick(customer)}>
              <td>{customer.name}</td>
              <td>{customer.birthday}</td>
              <td>{customer.document}</td>
              <td>{customer.cellphone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;