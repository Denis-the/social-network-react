import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom';


const renderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
           <App state={state} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

export default renderEntireTree;