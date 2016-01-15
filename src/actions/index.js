import axios from 'axios';
// importing private API key
// grab your own from http://api.openweathermap.org/ and insert it
import API_KEY from '../private/api-key';
const baseUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
	const weatherUrl = `${baseUrl}&q=${city},us&mode=json`;
	const request = axios.get(weatherUrl);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}