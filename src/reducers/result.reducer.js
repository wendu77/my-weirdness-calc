const INITIAL_STATE = {
	title: '',
	url: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_RESULT_REQUEST':
			return {
				...state
			}
		case 'GET_RESULT_SUCCESS':
			return {
				...state,
				...action.payload
			}
		case 'GET_RESULT_FAILURE':
			return {
				...state
            }
        case 'CLEAR_RESULT':
            return {
                ...INITIAL_STATE
            }
		default:
			return state;
	}
 }