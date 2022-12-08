import {ADD_TODO, CHANGE_DESCRIPTION, CHANGE_STATUS, DELETE_TODO} from "./actions";
const initialState = {
    todos: [{
        id: Math.random(),
        title: "test",
        description: "test",
        status: "open",
        creationDate: "11/25/2020",
        updateDate: "11/25/2020"
    }]
}
function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        title: action.title,
                        description: action.description,
                        id: Math.random(),
                        status: "open",
                        creationDate: new Date().toLocaleDateString(),
                        updateDate: new Date().toLocaleDateString()
                    }
                ]
            });
        case CHANGE_STATUS:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, i) => {
                    if (todo.id === action.id) {
                        return Object.assign({}, todo,{status: action.status} )
                    }
                    return todo
                })
            })
        case CHANGE_DESCRIPTION:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, i) => {
                    if (todo.id === action.id) {
                        return Object.assign({}, todo,{description: action.description} )
                    }
                    return todo
                })
            })
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo, i) => {
                   return todo.id !== action.id
                    })
            })
        default:
            return state
    }
}
export default todoApp