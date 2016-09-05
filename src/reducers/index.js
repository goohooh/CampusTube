import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';


const reducers = combineReducers({
	videos: VideosReducer,
});

export default reducers;