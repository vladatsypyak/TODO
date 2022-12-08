import { createStore } from "redux"
import todoApp from "./reducer";
import {
    addTodo
} from "./actions";

export let store = createStore(todoApp)
console.log(store.getState())


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(addTodo('some text'))