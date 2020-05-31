import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import HomePage from "./pages/HomePage";
import DetailCountryPage from "./pages/DetailCountryPage";


import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import NotFound from './components/NotFound';


function App() {
  return (
    <div>

      <BrowserRouter>

        <Layout>

          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/detail/:nameCountry" component={DetailCountryPage} />
            <Route component={NotFound} />

          </Switch>

        </Layout>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
