import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadState = () => {
try {
    const serializedState = localStorage.getItem('todos');
    return serializedState ? JSON.parse(serializedState) : [];
} catch (e) {
    console.warn("Could not load state", e);
    return [];
}
};

const saveState = (state) => {
try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
} catch (e) {
    console.warn("Could not save state", e);
}
};

const initialState = {
todos: loadState(),
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                complete: false
            }
            state.todos.push(todo)
            saveState(state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
            saveState(state.todos);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(item => item.id === action.payload.id ? action.payload : item)
            saveState(state.todos);
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map(item => item.id === action.payload ? {...item, complete: !item.complete} : item)
            saveState(state.todos);
        }
    }
})

export const {addTodo, removeTodo, updateTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer