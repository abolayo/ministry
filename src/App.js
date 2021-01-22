import './styles/App.css';
import Card from "./components/Card";
import DataPage from "./DataPage";
import React, {Component} from "react";

class App extends Component{
   state = {
       cards : [
           {id: 1, value: 4},
           {id: 2, value:10},
           {id: 3, value: 7},
           {id: 4, value: 9}
       ]
   }
   render() {
       return (

           <div className="main">
               <header className="App-header ">
                   <h1>
                       Ministry and Federal Parastatals
                   </h1>
               </header>
               {this.state.cards.map(card => <Card
                   key={card.id} value={card.value}/>)}
           </div>
       );
   }
}

export default App;
