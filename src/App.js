import './App.css';
import Cards from "./cards/cards";
import Header from "./NavbarPage";
import DataPage from "./DataPage";
import React from "react";

function App() {

    return (

        <div className="main">
            <Header/>
            <header className="App-header">
                <h1>
                    Ministry and Federal Parastatals
                </h1>
            </header>
            <Cards/>
            <DataPage id="data" />
        </div>
    );
}

export default App;
