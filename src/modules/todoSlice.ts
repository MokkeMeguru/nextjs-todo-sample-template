import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

export const todoInitialState: TodoState = {
  todos: [
    { id: uuidv4(), text: "todo0", completed: false },
    { id: uuidv4(), text: "todo1", completed: false },
    { id: uuidv4(), text: "todo2", completed: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
