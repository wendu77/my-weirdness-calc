import { clearResult } from './result.actions';
import { setError } from './ui.actions';
import { clearSearch } from './search.actions';

const ADD_LIKED = 'ADD_LIKED';
const REMOVE_LIKED = 'REMOVE_LIKED';
const CLEAR_LIKED = 'CLEAR_LIKED';

export const addLiked = result => (dispatch, getState) => {
    const { liked } = getState();
    const isExistingSearchTerm = liked.find(likedItem => likedItem.searchTerm === result.searchTerm);

    if (isExistingSearchTerm) {
        dispatch(setError('Each liked gif must have a different search term.'));
    } else {
        dispatch({ type: ADD_LIKED, payload: result });
        dispatch(clearSearch());
        dispatch(clearResult());
    }
}

export const removeLiked = result => dispatch => {
    dispatch({ type: REMOVE_LIKED, payload: result });
}

export const clearLiked = () => dispatch => {
    dispatch({ type: CLEAR_LIKED });
}
