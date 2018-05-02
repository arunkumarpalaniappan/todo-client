import * as types from './actionTypes';
import quotesApi from '../api/quotesApi';

export function getQuoteofTheDay() {
    return function (dispatch) {
        return quotesApi.qod().then(quote => {
            dispatch(getQuoteofTheDaySuccess(quote))
        })
            .catch(err => {
                throw (err);
            })
    }
}

export function getQuoteofTheDaySuccess(quote) {
    return {type: types.REQUEST_QUOTE_SUCCESS, quote}
}