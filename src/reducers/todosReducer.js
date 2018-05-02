import * as types from '../actions/actionTypes';
import initalState from './initialState';
export default function updateTodosReducer(state = initalState.todo, action) {
    switch(action.type) {
        case types.CREATE_TODO: 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            break;
        case types.UPDATE_TODO:
            return state.map(todo => {
                if(todo.id === action.id) {
                    return {...todo, completed: action.completed}
                } else {
                    return todo
                }
            })
            break
        case types.DELETE_TODO:
            return state.map(todo => {
                if(todo.id === action.id) {
                    return {...todo, deleted: true}
                } else {
                    return todo
                }
            })
            break
        default:
            return state;
    }
}

