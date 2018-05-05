import { combineReducers } from 'redux';
import quote from './quoteofTheDayReducer';
import todo from './todosReducer';
import filter from './visibilityFilterReducer';
import user from './userReducer'

const rootReducer = combineReducers({
    quote,
    todo,
    filter,
    user
});

export default rootReducer;