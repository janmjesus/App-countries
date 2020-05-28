import React from 'react';

import './styles/CountryCard.css';

class CountryCard extends React.Component {


    render(){

        return (

            <React.Fragment>

                <div>

                    <img class="sizeFlag" src={this.props.country.flag} alt={this.props.country.name}/>

                </div>
                <div>

                    {this.props.country.name}

                </div>

            </React.Fragment>


        );

    }

};

export default CountryCard;
