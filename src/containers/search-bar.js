import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: ''};

		// binding this to callbacks
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onSubmit(event) {
		event.preventDefault();

		// Calling the action creator
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' })
	}

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