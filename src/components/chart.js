 /**
   * Highest level App componenet
   *
   * Combining SearchBar and WeatherList
   * Exporting App
   */

import React from 'react';

// SparkLines is a simple data visualization library
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// Calculating average of returned data for SparkLines chart
const average = (data) => {
	const sum = data.reduce((curr, prev) => {
		return curr + prev;
	}, 0);
	return Math.round(sum/data.length);
};

// Simple components only require a function
// No need to extend a class like containers
export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type='avg'/>
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}