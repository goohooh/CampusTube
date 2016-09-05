import axios  from 'axios';


export const SEARCH_VIDEO = 'SEARCH_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';

const API_KEY = 'AIzaSyDzSX_reEp-Ht5sJMJOpyG8COGfcd05_hc';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

export function searchVideo(term) {
	const params = {
		part: 'snippet',
		key: API_KEY,
		q: term,
		type: 'video'
	};
	const response = axios.get(API_URL, {params: params})
	return {
		type: SEARCH_VIDEO,
		payload: response
	};
}

export function selectVideo(video) {
	console.log('in action creator!', video)
	return {
		type: SELECT_VIDEO,
		payload: video
	}
}


