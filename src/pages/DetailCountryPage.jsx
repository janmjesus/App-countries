import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './styles/DetailCountryPage.css';


class DetailCountryPage extends React.Component {

    state = {

        country: {},
        load: 0,

    }

    componentDidMount(){
        
        const nameCountry = this.props.match.params.nameCountry;
        
        console.log( `Epa aqui se termina de montar el componente y deberia de recibir
        el valor de nameCountry ${nameCountry}` )

        fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}?fullText=true`).then( (res) => {

            if( res.ok ){
                console.log('Peticion exitosa');
            }
            else {
                console.log('Peticion no exitosa');
            }

            //console.log( `Peticion exitosa aqui esta la respuesta ${ JSON.stringify(res.json())}` );
            return res.json();

        }).then(( countries => {

        
            if( countries.status !== 404 ){
                this.setState( {

                    country: countries[0],
                    load: 1,

                });
            }

        })).catch( err => {

            console.log(`Ocurrio un error ${err}`);

        });

    }

    render(){


        return(

            <React.Fragment>
                <div className="col-10 offset-1 mt-4 text-center">

                    <img className="imagenBandera" src={this.state.country.flag} alt={`Bandera de ${this.state.country.name}`}/>
                
                </div>
                <div className="text-center">
                    <h1>Informacion</h1>
                </div>
                <div className='mb-4'>
                    <div class="row">
                        <div className="col-md-3 text-center col-sm-6">

                            <b>Nombre:</b> {this.state.country.name}   

                        </div>
                        <div className="col-md-3 text-center col-sm-6">

                            <b>Capital:</b> {this.state.country.capital}   

                        </div>
                        <div className="col-md-3 text-center col-sm-6">

                        <b>Region:</b> {this.state.country.region}   

                        </div>
                        <div className="col-md-3 text-center col-sm-6">

                            <b>SubRegion:</b> {this.state.country.subregion}   

                        </div>
                    </div>
             

                    <div className="row">
                    
                        
                        <div className="col-md-3 text-center col-sm-6">

                            <b>Poblacion:</b> {this.state.country.population} Hab   

                        </div>
                        <div className="col-md-3 text-center col-sm-6">

                            <b>Gentilicio:</b> {this.state.country.demonym}   

                        </div>
                        <div className="col-md-3 text-center col-sm-6">

                            <b>Area de tierra:</b> {this.state.country.area} Km

                        </div>
                        { this.state.load && 
                            <div className="col-md-3 text-center col-sm-6">

                                <b>Moneda:</b> { this.state.country.currencies[0].name }   

                            </div>
                        }


                    </div>

                </div>

                <div className="text-center mb-4">

                    
                    
                    <Link onClick={this.props.manejadorClick} className="btn btn-primary" to={`/`}>

                        Regresar a Home!

                    </Link>

                </div>

              
            </React.Fragment>

        );


    }


}

export default withRouter(DetailCountryPage);