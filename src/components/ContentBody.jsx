import React from 'react';

import './styles/ContentBody.css';

class ContentBody extends React.Component {

    state = {

        countries: [],

    };

    render(){

        return(
            <div className="containerGrid">

                    {this.state.countries.map( country => {

                        return(
                            <div className="gridChildren">
                                <li key={country.alpha2Code} className="removeBulletPoint">
                                    <label> {country.name} </label>
                                    <img src={ country.flag } alt={ country.name } className="sizeFlag"/>
                                </li>
                            </div>
                        );

                    })}


            </div>

        )

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




}

export default ContentBody;
