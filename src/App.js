import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       items: [],
       isLoaded: false,
     }
   }
   
   componentDidMount() {
     fetch('https://api.covidtracking.com/v1/states/current.json')
     .then(res => res.json())
     .then(json => {
       this.setState({
         isLoaded: true,
         items: json,
       })
  
     })
     
   }

  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesFilling = () => {
    return {
      "TX": {
        fill: "yellow",
      clickHandler: () => alert("7500 cases")
      }
    };
  };

  render() {
    
    
    console.log("hello")
    var {isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    
    else {

      return (
        <div className="App">
         
          <h1>Covid Cases by State</h1>
          <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
          
            <ul>
            DATA HAS BEEN LOADED
          
              {items.map(item => (
                <li key={item.id}>
                  Positive Cases: {item.positive} | State: {item.state}
                </li>
              ))};
              
            </ul>
        </div>
      );
    }
  }
}

export default App;