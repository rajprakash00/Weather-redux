import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Type any city to get a weather forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-dark">
            Search
          </button>
        </span>
      </form>
    );
  }
}

export default connect(null, actions)(SearchBar);
