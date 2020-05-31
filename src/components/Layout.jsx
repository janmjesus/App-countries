import React from 'react';

import Header from './Header';

function Layout( props ){

    return(


        <React.Fragment>

            <Header/>
            { props.children }
            <Header/>

        </React.Fragment>

    );


}

export default Layout;