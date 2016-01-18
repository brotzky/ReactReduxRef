 /**
   * WeatherList container dealing with state
   * and table creation
   */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {
		const cityName = cityData.city.name;
		// mapping data arrays into const arrays
		const temps = cityData.list.map((weather) => weather.main.temp);
		const humidity = cityData.list.map((weather) => weather.main.humidity);
		const pressure = cityData.list.map((weather) => weather.main.pressure);

		return (
			<tr key={cityName}>
				<td>{cityName}</td>
				<td><Chart data={temps} color='red' units='K' /></td>
				<td><Chart data={humidity} color='green' units='hPa' /></td>
				<td><Chart data={pressure} color='blue' units='%' /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// attaching state.weather to props
const mapStateToProps = ({weather}) => {
	return { weather };
}

// react-redux connecter
// exporting the connected WeatherList with props attached to it
export default connect(mapStateToProps)(WeatherList);