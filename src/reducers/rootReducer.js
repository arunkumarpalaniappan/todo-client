import { combineReducers } from 'redux';
import quote from './quoteofTheDayReducer';

const rootReducer = combineReducers({
    quote
});

export default rootReducer;