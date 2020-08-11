import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';

import Customer from '../../types/Customer';
import { setCustomer } from '../../store/modules/form/action';
import { showCustomers } from '../../store/modules/customers/actions';

const Table: React.FC = () => {
  const {show, page} = useSelector((state: any) => state.customers);
  const [customers, setCustomers] = useState<any>([]);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const timer = useRef(null) as any;

  useEffect(() => {
    const restOfArray = new Array(5 - show.length) as any;
    setCustomers([
      ...show,
      ...restOfArray.map((_: any, index: number) => index)
    ])
  }, [show])

  const handleRowClick = (customer: Customer) => {
    dispatch(setCustomer(customer))
  }

  const handleSearchInput = (event: any) => {
    setSearchValue(event.currentTarget.value)

    clearTimeout(timer.current);
    timer.current = setTimeout(handleSearch, 350)
  }

  const requestNextPage = () => {
    dispatch(showCustomers({ page: page + 1 }))
  }

  const requestPreviousPage = () => {
    dispatch(showCustomers({ page: page - 1 }))
  }

  const handleSearch = () => {
  }

  return (
    <div className="table-container">
      <div className="search-container">
        <input autoComplete="off" value={searchValue} onChange={handleSearchInput} disabled name="birthday" placeholder="Pesquisar" />
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
          {customers.map((customer: Customer, index: number) => (
              customer ? (
                <tr key={customer.id} onClick={() => handleRowClick(customer)}>
                  <td>{customer.name}</td>
                  <td>{customer.birthday}</td>
                  <td>{customer.document}</td>
                  <td>{customer.cellphone}</td>
                </tr>
              ) : (
                <tr key={index} className="empty">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
          ))}
        </tbody>
        <div id="pagination">
          <button onClick={requestPreviousPage}>
            <span className="material-icons">
              chevron_left
            </span>
          </button>
          <span id="page">{page}</span>
          <button onClick={requestNextPage}>
            <span className="material-icons">
              chevron_right
            </span>
          </button>
        </div>
      </table>
    </div>
  );
}

export default Table;