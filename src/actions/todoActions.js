import * as types from './actionTypes';
let nextTodoId = 0;
export function addTodo(text) {
    return function (dispatch) {
        dispatch(createTodoSuccess({
            text,
            id: nextTodoId++
        }))
    }
}

export function updateTodo(id,status) {
    return function (dispatch) {
        dispatch(updateTodoSuccess(id,status))
    }
}

export function deleteTodo(id) {
    return function (dispatch) {
        dispatch(deleteTodoSuccess(id))
    }
}

export function createTodoSuccess(todo) {
    return {type: types.CREATE_TODO, id: todo.id, text: todo.text}
}

export function updateTodoSuccess(id,completed) {
    return {type: types.UPDATE_TODO, id, completed}
}

export function deleteTodoSuccess(id) {
    return {type: types.DELETE_TODO, id}
}
