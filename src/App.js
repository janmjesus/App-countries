import React from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ContentBody from './components/ContentBody';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Header />
      <ContentBody />
      <Header />

    </div>
  );
}

export default App;
