import React from 'react';

import './styles/HomePage.css';

import GridCountries from "../components/GridCountries";
import SearchFilter from '../components/SearchFilter';

class LayoutContent extends React.Component {

    state = {

        countries: [],
        filter: '',

    };

    handleChange = e => {

        console.log( e.target.value );
        console.log( `que esta pasando con el this.state ${ this.state }` );
        this.setState( { filter: e.target.value} );
        console.log('Aqui realiza el cambio en el padre');

        console.log( `Epa este es el estado del filter ${ this.state.filter }` );
        console.log( `Epa este es el estado de los countries ${ this.state.countries }` );

    }

    componentDidMount() {

        console.log('El componente se termino de montar');

        fetch('https://restcountries.eu/rest/v2/all/').then( (res) => {

            if( res.ok ){
                console.log('Peticion exitosa');
            }
            else {
                console.log('Peticion no exitosa');
            }

            //console.log( `Peticion exitosa aqui esta la respuesta ${ JSON.stringify(res.json())}` );
            return res.json();

        }).then(( countries => {

            console.log( `Estamos aqui ${countries}` );

            this.setState( {

                countries,

            });

        })).catch( err => {

            console.log(`Ocurrio un error ${err}`);

        });

    }

    shouldComponentUpdate( nextProps, nextState ){

        console.log('Aja esto deberia actualizarse de nuevo?');
        
        if( this.state.filter !== nextState.filter || this.state.countries.length !== nextState.countries.length ){

            console.log('Esto debe actualizarse de nuevo yeah');
            return true;
        }   
        else {

            console.log('Esto no debe de actualizarse de nuevo claramente');
            return false;
        }

    }

    componentWillUpdate( nextProps, nextState ){

        let rutaSolicitudApi = ( nextState.filter !== '' ) ? 
        `name/${nextState.filter}` : 'all';

     

        fetch( `https://restcountries.eu/rest/v2/${rutaSolicitudApi}` ).then( (res) => {

            if( res.ok ){
                console.log('Peticion exitosa');
            }
            else {
                console.log('Peticion no exitosa');
            }

            return res.json();


        }).then( countries => {

            console.log( `Este es el countries.status ${ countries.status }` );

            if( countries.status === 404 )
                countries = [];

            this.setState( {

                countries,

            });

        }).catch( err => {

            console.log( `Ocurrio un error ${err}` );

        });

    }

    render(){

        return(

            <React.Fragment>

                <SearchFilter onChange={this.handleChange} textSearch={this.state.filter}/>
                <GridCountries countries={this.state.countries}/>

            </React.Fragment>

        );

    }

}

export default LayoutContent;
