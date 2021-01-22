import logo from '../nigeria.jpg';
import '../styles/App.css';
import React, {Component} from 'react';

class Cards extends Component {

    state = {
        name: "Abubakar Malami",
        origin:"Kebbi",
        ministry:"Justice",
        address:"Federal Secretariat Towers (5th & 10th floors), Shehu Shagari Way Central Area, Abuja.\n" +
            "                        Federal Capital Territory, Nigeria.",
        website:"justice.gov.ng",
        moreInfo:"Kebbi"

    }
    render() {


        return (
            <div className="App">

                <body>
                <div className="logo-title">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="title">
                        Ministry of {this.state.ministry}
                    </h2>
                </div>
                <div>
                    <p className="name-minister">Minister: {this.state.name} - {this.state.origin} state</p>
                    <p>Address:</p>
                    <p>
                        {this.state.address}

                        <p>Web: <a
                            className="App-link"
                            href="https://www.justice.gov.ng/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {this.state.website}
                        </a>
                        </p>

                    </p>
                </div>
                </body>
            </div>
        );
    }
}
export default Cards;