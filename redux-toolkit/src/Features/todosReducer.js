import { createAction, createReducer } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: 1, title: "Lorem", completed: false },
    { id: 2, title: "ipsum", completed: false },
  ],
};

export const remove = createAction("remove");
export const addTodo = createAction("addTodo");
export const handleClick = createAction("handleClick");

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(remove, (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
    })
    .addCase(addTodo, (state, action) => {
      state.todos.push({ id: Date.now(), title: action.payload });
    })
    .addCase(handleClick, (state, action) => {
      state.todos.filter( todo => todo.id === action.payload ? todo.completed = !todo.completed : todo)
    });
});
