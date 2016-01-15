import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
	const sum = data.reduce((curr, prev) => {
		return curr + prev;
	}, 0);
	return Math.round(sum/data.length);
};

// simple components only require a function
// no need to extend a class like containers
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