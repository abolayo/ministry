import './styles/App.css';
import Cards from "./cards/cards";
import DataPage from "./DataPage";
import React from "react";

function App() {

    return (

        <div className="main">
            <header className="App-header">
                <h1>
                    Ministry and Federal Parastatals
                </h1>
            </header>
            <Cards/>
            <Cards/>
            <Cards/>
            <DataPage id="data" />
        </div>
    );
}

export default App;
