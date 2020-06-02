import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { DzgProvider } from './context';
import App from './App';
import Footer from './components/Footer';

ReactDOM.render(
  <DzgProvider>
    <Router>
    <App key="1" /> <Footer key="2" />
    </Router>
  </DzgProvider>,
  document.getElementById('root')
);


