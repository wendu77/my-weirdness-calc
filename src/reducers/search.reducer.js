const INITIAL_STATE = {
    term: '',
    weirdness: 0
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_SEARCH_TERM':
			return {
				...state,
				term: action.payload
            }
        case 'SET_WEIRDNESS':
			return {
				...state,
				weirdness: action.payload
        }
        case 'CLEAR_SEARCH':
            return {
                ...INITIAL_STATE
            }
		default:
			return state;
	}
 }