import React from 'react';

import './styles/GridCountries.css';

import CountryCard from './CountryCard';

class GridCountries extends React.Component {

    render(){

        return(
            <div className="containerGrid mb-3">

                { this.props.countries.map( (country,index) => {

                  return(
                      <div className="gridChildren">
                          <li key={ index } className="removeBulletPoint">
                            <CountryCard country={country} />
                          </li>
                      </div>

                  );

                })}



            </div>

        )

    }






}

export default GridCountries;
