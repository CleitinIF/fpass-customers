import React from 'react';

import './assets/styles/normalize.css';
import './assets/styles/global.css';
import './assets/styles/app.css';

import { Provider } from 'react-redux';
import store from './store';

import Table from './components/table';
import Form from './components/form';
import Header from './components/header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="wrapper">
        <Table />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
