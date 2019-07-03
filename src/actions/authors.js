import { ADD_AUTHORS, FETCH_AUTHORS } from './constants';

// export function addAuthors(data){
// 	return {
// 		type: ADD_AUTHORS,
// 		authors: data
// 	}
// }


export const addAuthors = (data) => {
	console.log("add author", data)
    return {
		type: ADD_AUTHORS,
		authors: data
	}
}


export const  fetchAuthors = () => {
	return {
		type: FETCH_AUTHORS
	}
}