import { ADD_AUTHORS } from '../actions/constants';


export default function authors(state = [], action){
    console.log(action, state);
    switch(action.type){
        case ADD_AUTHORS:
            console.log("Adding authors to the Store");
            return [...action.authors]
        default:
			return state
	}
};