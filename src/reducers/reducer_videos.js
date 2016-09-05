import {  SELECT_VIDEO, SEARCH_VIDEO } from '../actions/index';

const INITIAL_STATE = { all: [], selected_video: null}

export default function(state = INITIAL_STATE, action) {
	switch(action.type){
		case SEARCH_VIDEO:
			console.log('in video reducer, type: SEARCH', action.payload.data.items)
			return { ...state, all: action.payload.data.items, selected_video: action.payload.data.items[0] }
		case SELECT_VIDEO:
			console.log('in video reducer, type: SELECT', action.payload)
			return { ...state, selected_video: action.payload }
		default:
			return state 
	}
}