import { combineReducers } from 'redux';
import quote from './quoteofTheDayReducer';
import todo from './todosReducer';
import filter from './visibilityFilterReducer';

const rootReducer = combineReducers({
    quote,
    todo,
    filter
});

export default rootReducer;