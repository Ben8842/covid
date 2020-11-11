import React, { Component, useState } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import Modal from 'react-modal'

function ModalTime() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="ModalTime">
      <button onClick={() => setModalIsOpen(true)}>Open super awesome Modal</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h2>Modal HELLOOWHELO</h2>
      <p>body of mOdal oh yeah</p>
      <div>
        <button onClick={() => setModalIsOpen(false)}>close super fun modal</button>
      </div>
    </Modal>
    </div>
  );
}


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
    var {isLoaded, items } = this.state;
    let x = 0;
    let y = '';
    while (x < 50) {
      x++;
      if (items[x].state === "TX") {
        y = items[x].positive;
      }
    }

    
    return {
      "TX": {
        fill: "yellow",
      clickHandler: () => alert("The state of Texas has " + y + " Positive Cases" )
      }
    };
  };

 

  render() {
   
    var {isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }  
    else {
      return (

        <div className="ModalTime">

          <ModalTime>Hello World</ModalTime>
      
        <div className="App">

        
         
          <h1>Covid Cases by State</h1>
          <h4>Click on a state to see how many positive Corona cases it currently has</h4>
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
        </div>
      );
    }
  }
}

export default App;