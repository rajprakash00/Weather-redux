import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import WeatherList from "./components/WeatherList";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
