import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

export default class Modals extends React.Component {
  state = {
    items: [],
    isLoaded: false,
  };
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

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

  render() {
    var { isLoaded, items } = this.state;
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modals" id="modals">
        <h2>Modal Window</h2>
        <h1>
          {items[47].state} (TEXAS) has {items[47].positive} positive corona
          cases
        </h1>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

Modals.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
