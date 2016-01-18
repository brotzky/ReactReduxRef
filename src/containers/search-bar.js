 /**
   * SearchBar container dealing with state
   * and form submission
   *
   * Import bindActionCreators, connect, and fetchWeather action
   * Exporting App
   */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

// extending React Component
class SearchBar extends Component {

	// required constructor for props and state
	constructor(props) {
		super(props);
		this.state = { term: ''};

		// binding this to callbacks
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Updating state on input change
	// Needed to allow characters in search field
	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	// Handling submit event of SearchBar container
	onSubmit(event) {
		event.preventDefault();

		// Calling the action creator
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' })
	}

	// Rendering component template
	render() {
		return (
			<form className="input-group" onSubmit={this.onSubmit}>
				<input type="text"
					onChange={this.onInputChange}
					placeholder="Search"
					value={this.state.term}
					className="form-control" />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);