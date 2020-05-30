import React from 'react';

class SearchFilter extends React.Component{

    render(){

        return (
            <div className="form-group mt-4 col-10 offset-1">

                <input type="text" className="form-control p-lg-4 p-sm-3"  placeholder="Filtro Por Nombre de Paises"
                onChange={this.props.onChange} value={this.props.textSearch}/>

            </div>
        );

    }


}

export default SearchFilter;
