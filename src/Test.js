import React, { Component } from 'react';
import './Test.css'

class Test2 extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "Helper",
            items: [],
            isLoaded: false
        };
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

   

    render() {
        var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }  
    else {
        return (
        <div>
            <h1>{items[47].state} (TEXAS) has {items[47].positive} positive corona cases</h1>
            <h2>Texas has {items[47].death} deaths</h2>
            <h3>Texas has {items[47].hospitalizedCurrently} people currently hospitalized</h3>
            <h4>Texas has {items[47].recovered} people recovered</h4>
            </div>
        )
    }
    }}

export default Test2;

