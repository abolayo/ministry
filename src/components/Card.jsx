import logo from '../nigeria.jpg';
import '../styles/App.css';
import React from 'react';

function Card(props) {
return (
    <div className="App">

        <div className="logo-title">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 className="title">
                Ministry of {props.ministry}
            </h2>
        </div>
        <div>
            <p className="name-minister">Minister: {props.name} - {props.origin} state</p>
            <p>Address:</p>
            <p>
                {props.address}
            </p>
            <p>Web: <a
                className="App-link"
                href="https://www.justice.gov.ng/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.website}
            </a>
            </p>


        </div>

    </div>
)
}
export default Card;