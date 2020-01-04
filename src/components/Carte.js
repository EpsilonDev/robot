import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Carte extends React.Component{

    render() {
        let url = "https://robohash.org/" + this.props.nbr;
        return (
            <div>
                <img src={url}>
                </img>
                <p>
                    {this.props.nom}
                </p>
                <p>
                    {this.props.filiere}
                </p>
            </div>
        )
    }
}

export default Carte;