import './styles/App.css';
import Card from "./components/Card";
import React from "react";
import sampleData from "./components/sampleData";

function App() {
    const CardComponents = sampleData.map(sampleData => <Card
        key = {sampleData.id}
        name = {sampleData.name}
        origin = {sampleData.origin}
        ministry = {sampleData.minister}
        address = {sampleData.address}
        website = {sampleData.website}
    />)
    console.log(CardComponents)
    return (
        <div className="main">

            <header className="App-header ">
                <h1>
                    Ministry and Federal Parastatals
                </h1>
            </header>
            {CardComponents}

        </div>
    )

}

export default App;
