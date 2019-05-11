const INITIAL_STATE = {
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
		default:
			return state;
	}
 }