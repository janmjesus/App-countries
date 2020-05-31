import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


import './styles/Header.css';


class Header extends React.Component {

    render(){

        return (


            <div className="headerBox">

                <div className="contentHeader">

                <FontAwesomeIcon icon={faGlobe} size="2x" color="white"/> 
                <h1 className="titulo">PAISES DEL MUNDO</h1>   
                <FontAwesomeIcon icon={faGlobe} size="2x" color="white"/>


                </div>

            </div>


        );

    }


}

export default Header;
