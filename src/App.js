import React, { Component, useState } from "react";
import "./App.css"; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import Modal from "react-modal";
import Test2 from "./Test.js";
import Modata from "./Modata.js";
import Modals from "./Component/Modal";
import "./styles.css";

function ModalTime() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="ModalTime">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Modal HELLOOWHELO</h2>
        <p>body of mOdal yes</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>
            close super modal
          </button>
        </div>
      </Modal>
    </div>
  );
}

function Openmodaltest() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  setModalIsOpen(true);
}

function Testh() {
  return (
    <div className="Testh">
      <h1>Test</h1>
    </div>
  );
}

class App extends Component {
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      name: "Helper",
      showHideTest: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log("working it" + name.value);
    switch (name) {
      case "showHideTest":
        this.setState({ showHideTest: !this.state.showHideTest });
        break;
      default:
    }
  }

  componentDidMount() {
    fetch("https://api.covidtracking.com/v1/states/current.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  /* mandatory */
  mapHandler = (event) => {
    this.hideComponent("showHideTest");
    //alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */

  statesFilling = () => {
    var { isLoaded, items } = this.state;
    let x = 0;
    let y = "";
    while (x < 50) {
      x++;
      if (items[x].state === "TX") {
        y = items[x].positive;
      }
    }

    return {
      TX: {
        fill: "yellow",
        // clickHandler: Openmodaltest()
        // clickHandler: () => this.hideComponent("showHideTest"),
        clickHandler: (e) => {
          this.showModal(e);
        },
        //clickHandler: () => alert("The state of Texas has " + y + " Positive Cases" )
      },
    };
  };

  render() {
    var { isLoaded, items, showHideTest } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Testh">
          <Testh>hi</Testh>

          <hr></hr>

          <div>
            {showHideTest && <Test2 />}
            <div>
              <button onClick={() => this.hideComponent("showHideTest")}>
                Click to hide Test2 component
              </button>
            </div>
          </div>
          <div className="Modata">
            <Modata>Hello World</Modata>
            <div className="ModalTime">
              <ModalTime>Hello World</ModalTime>

              <div className="App">
                <button
                  class="toggle-button"
                  id="centered-toggle-button"
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  {" "}
                  show Modal{" "}
                </button>

                <Modals onClose={this.showModal} show={this.state.show}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet
                  repellendus non fuga omnis a sed impedit explicabo accusantium
                  nihil doloremque consequuntur.
                </Modals>

                <h1>Covid Cases by State</h1>
                <h4>
                  Click on a state to see how many positive Corona cases it
                  currently has
                </h4>
                <USAMap
                  customize={this.statesFilling()}
                  onClick={this.mapHandler}
                />

                <ul>
                  DATA HAS BEEN LOADED
                  {items.map((item) => (
                    <li key={item.id}>
                      Positive Cases: {item.positive} | State: {item.state}
                    </li>
                  ))}
                  ;
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
