import logo from '../nigeria.jpg';
import '../App.css';
import React, {useState} from 'react';
//import DataPage from "./DataPage";

function Cards() {

    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
            commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName = readMore ? 'Less info << ' : 'More info >> '
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Ministry and Federal Parastatals
                </h1>
            </header>
            <body>
            <div className="logo-title">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2 className="title">
                    Ministry of Justics
                </h2>
            </div>
            <div>
                <p className="name-minister">Minister: Abubakar Malami - Kebbi state</p>
                <p>Address:</p>
                <p>
                    Federal Ministry of Justice
                    Federal Secretatriat Towers (5th & 10th floors), Shehu Shagari Way Central Area, Abuja.
                    Federal Capital Territory, Nigeria.
                    <p>Web: <a
                        className="App-link"
                        href="https://www.justice.gov.ng/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.justice.gov.ng
                    </a>
                    </p>
                    <div className="more-info">
                        <a className="read-more-link" onClick={() => {
                            setReadMore(!readMore)
                        }}><h2>{linkName}</h2></a>
                        {readMore && extraContent}
                    </div>
                </p>
            </div>
            </body>
        </div>
    );
}

export default Cards;