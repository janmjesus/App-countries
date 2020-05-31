import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CountryCard.css';

class CountryCard extends React.Component {


    render(){

        return (

            <div className="card" style={{width: '18rem' }}>
                <div className="headerCard">
                    <img className="card-img-top" src={this.props.country.flag} alt={this.props.country.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.country.name}</h5>
                    <p className="card-text">
                        {this.props.country.name} es un pais que tiene como moneda el {this.props.country.currencies[0].name} y queda en la region
                        de {this.props.country.region}
                    </p>

                    <Link className="btn btn-primary" to={`/detail/${this.props.country.name}`}>

                        Ver Mas Detalles {this.props.country.name}!

                    </Link>
                </div>
            </div>
        );


    }

};

export default CountryCard;
