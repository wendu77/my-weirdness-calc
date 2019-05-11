import ApiClient from 'giphy-js-sdk-core';
import { setError, setLoading } from './ui.actions';
require('dotenv').config()

const weirdGiphyClient = ApiClient(`${process.env.REACT_APP_WEIRD_CALCULATOR_API_KEY}`);

export const GET_RESULT_REQUEST = 'GET_RESULT_REQUEST';
export const GET_RESULT_SUCCESS = 'GET_RESULT_SUCCESS';
export const GET_RESULT_FAILURE = 'GET_RESULT_FAILURE';

export const CLEAR_RESULT = 'CLEAR_RESULT';

const fetchResult = async (searchTerm, weirdness) => await
weirdGiphyClient.translate('gifs', {"s": searchTerm, weirdness });

export const getResult = () => async (dispatch, getState) => {
    const { search } = getState();

    dispatch({ type: GET_RESULT_REQUEST });
    dispatch(setLoading(true));
	try {
        const result = await fetchResult(search.term, search.weirdness);

		dispatch({
			type: GET_RESULT_SUCCESS,
			payload: {
				title: result.data.title,
                url: result.data.images.original.url
			}
        });
        dispatch(setLoading(false));
	}
	catch (error) {
		dispatch({
			type: GET_RESULT_FAILURE
        });
        dispatch(setLoading(false));
        dispatch(setError('Error getting your result'));
	}
};

export const clearResult = () => dispatch => {
    dispatch({ type: CLEAR_RESULT });
}
