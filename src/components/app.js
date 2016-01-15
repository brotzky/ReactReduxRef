import React, {Component} from 'react';

import SearchBar from '../containers/search-bar';
import WeaherList from '../containers/weather-list';

class App extends Component {
	render() {
		return (
		<div>
			<SearchBar />
			<WeaherList />
		</div>
		);
	}
}

export default App;