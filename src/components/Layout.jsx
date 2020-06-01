import React from 'react';

import Header from './Header';

class Layout extends React.Component{

    
    render() {
        return(


        <React.Fragment>

            <Header nombrePais={this.props.nombrePais}/>
            { this.props.children }
            <Header nombrePais={this.props.nombrePais}/>

        </React.Fragment>

        );

    }


}

export default Layout;