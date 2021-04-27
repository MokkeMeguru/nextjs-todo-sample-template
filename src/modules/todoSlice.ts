import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoState = {
  todoIds: string[];
  entities: {
    [id: string]: Todo;
  };
};
// todos: Todo[];
//
const initialTodos = [
  { id: uuidv4(), text: "todo0", completed: false },
  { id: uuidv4(), text: "todo1", completed: false },
  { id: uuidv4(), text: "todo2", completed: false },
] as const;

export const todoInitialState: TodoState = {
  todoIds: initialTodos.map((todo) => todo.id),
  entities: {
    [initialTodos[0].id]: initialTodos[0],
    [initialTodos[1].id]: initialTodos[1],
    [initialTodos[2].id]: initialTodos[2],
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    upsertTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      return {
        ...state,
        todoIds: [...state.todoIds, todo.id],
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
        // todos: [...state.todos, action.payload],
      };
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
      };
    },
  },
});

export const { upsertTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
