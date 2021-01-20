import './styles/App.css';
import Cards from "./cards/cards";
import DataPage from "./DataPage";
import React from "react";
import fetchData from "./fetchData";

function App() {

    return (

        <div className="main">
            <header className="App-header">
                <h1>
                    Ministry and Federal Parastatals
                </h1>
            </header>
            <Cards/>
           <fetchData />
            <Cards/>
            <DataPage id="data" />
        </div>
    );
}

export default App;
