import React from 'react';
import { withRouter } from 'react-router-dom';


class DetailCountryPage extends React.Component {

    componentDidMount(){
        
        const nameCountry = this.props.match.params.nameCountry;
        
        console.log( `Epa aqui se termina de montar el componente y deberia de recibir
        el valor de nameCountry ${nameCountry}` )

    }

    render(){


        return(

            <div>

                Busqueda de Pais

            </div>

        );


    }


}

export default withRouter(DetailCountryPage);