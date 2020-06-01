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


class App extends React.Component {
  
  state = {

    nombrePais: 'PAISES DEL MUNDO',

  }

  handleClick = e => {

    console.log('Epa envie la vaina brother');
    console.log( `Este es el objeto e ${e.target}` );

    const string = e.target.toString();

    console.log( `Este es el string que pasa ${string}` )

      let separacion = string.substring(29);

      console.log( `Epa esta es la separacion ${separacion}` );

      if( separacion === '' )
        separacion = 'PAISES DEL MUNDO';

      this.setState({

        nombrePais: separacion,

      });
    

  }

  render() {
    
    return (
      <div>

        <BrowserRouter>

          <Layout nombrePais={this.state.nombrePais}>

            <Switch>

              <Route exact path="/" >
                <HomePage manejadorClick={this.handleClick}/>  
              </Route>
              <Route exact path="/detail/:nameCountry" >

                <DetailCountryPage manejadorClick={this.handleClick}/>
                  
                    
              </Route>
              <Route component={NotFound} />

            </Switch>

          </Layout>
        
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
