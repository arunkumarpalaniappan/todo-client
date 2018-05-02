import { combineReducers } from 'redux';
import quote from './quoteofTheDayReducer';
import todo from './todosReducer';

const rootReducer = combineReducers({
    quote,
    todo
});

export default rootReducer;