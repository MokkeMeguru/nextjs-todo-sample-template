import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import { editTodo, Todo } from "./todoSlice";

export const useTodos = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return [todos] as const;
};

export const useAddTodo = () => {
  const dispatch = useDispatch();

  const fn = useCallback(
    (text: string) => {
      const id = uuidv4();
      dispatch(editTodo({ id, text, completed: false }));
    },
    [dispatch]
  );

  return fn;
};

export const useEditTodo = () => {
  const dispatch = useDispatch();

  const fn = useCallback(
    (todo: Todo) => {
      console.log("todo is ", todo);
      dispatch(editTodo(todo));
    },
    [dispatch]
  );

  return fn;
};
