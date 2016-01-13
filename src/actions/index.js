import axios from 'axios';
// importing private API key
import API_KEY from '../private/api-key';

const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FEATCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {

	const weatherUrl = `${baseUrl}&q=${city},us&mode=json`;
	const request = axios.get(weatherUrl);

	console.log('Request:', request);

	return {
		type: FEATCH_WEATHER,
		payload: request
	}
}