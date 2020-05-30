import React from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import LayoutContent from "./components/LayoutContent";
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Header />
      <LayoutContent />
      <Header />

    </div>
  );
}

export default App;
