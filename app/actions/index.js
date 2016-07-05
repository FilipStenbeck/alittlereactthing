export const SET_HELLO_MESSAGE = 'SET_HELLO_MESSAGE';
export const SET_WORLD_MESSAGE = 'SET_WORLD_MESSAGE';

export function setHelloMsg(payload) {
	return {
		type: SET_HELLO_MESSAGE,
		payload: payload
	};
};

export function setWorldMsg(payload) {
	return {
		type: SET_WORLD_MESSAGE,
		payload: payload
	};
};
