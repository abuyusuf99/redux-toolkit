import { configureStore } from "@reduxjs/toolkit";
import {todosReducer} from "../Features/todosReducer";

export const store = configureStore({
    reducer: todosReducer
})