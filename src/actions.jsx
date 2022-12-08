export const ADD_TODO = "ADD_TODO"
export const CHANGE_STATUS  = "CHANGE_STATUS"
export const CHANGE_DESCRIPTION  = "CHANGE_DESCRIPTION"
export const DELETE_TODO  = "DELETE_TODO"



export function addTodo(title, description) {
    return {type: ADD_TODO, title, description}
}

export function changeStatusInStore(id, status) {
    return {type: CHANGE_STATUS, id, status}
}
export function changeDescription(id, description) {
    return {type: CHANGE_DESCRIPTION, id, description}
}

export function deleteTodo(id) {
    return {type: DELETE_TODO, id}
}