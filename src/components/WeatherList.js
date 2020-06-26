import React, { Component } from "react";
import { connect } from "react-redux";
import Charts from "./Charts";
import Maps from "./Maps";
import Numeral from "numeral";

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const population = cityData.city.population;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          {/*<Maps lon={lon} lat={lat} />*/}
          {/*you can uncomment above line this to get map of location*/}
          <span style={{ fontSize: 25 }}>{name}</span>
        </td>
        <td>{Numeral(population).format("0,0.0000")}</td>
        <td>
          <Charts
            height={120}
            width={170}
            data={temps}
            color="red"
            units="Celsius"
          />
        </td>
        <td>
          <Charts
            height={120}
            width={170}
            data={humidities}
            color="blue"
            units="%"
          />
        </td>
        <td>
          <Charts
            height={120}
            width={170}
            data={pressures}
            color="green"
            units="hPa"
          />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ borderColor: "red" }}>City</th>
            <th style={{ borderColor: "red" }}>Population</th>
            <th style={{ borderColor: "red" }}>Temperature (Celsius)</th>
            <th style={{ borderColor: "red" }}>Himidity (%)</th>
            <th style={{ borderColor: "red" }}>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(WeatherList);
