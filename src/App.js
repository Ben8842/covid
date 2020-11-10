import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

class App extends Component {
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
    return (
      <div className="App">
        <h1>Covid Cases by State</h1>
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;