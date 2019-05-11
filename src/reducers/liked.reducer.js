const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_LIKED':
			return [
				...state,
				action.payload
			]
		case 'REMOVE_LIKED':
            return state.filter(likedItem => likedItem.title !== action.payload.title && likedItem.url !== action.payload.url)
        case 'CLEAR_LIKED':
            return [
                ...INITIAL_STATE
            ]
		default:
			return state;
	}
 }
 