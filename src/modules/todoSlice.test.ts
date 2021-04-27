import { addTodo, todoInitialState, todoReducer } from "./todoSlice";

describe("todoSlice", () => {
  test("Todoの追加のテスト", () => {
    const todo = { id: "test", text: "test text", completed: false };

    const result = todoReducer(todoInitialState, addTodo(todo));

    expect(result.todos.length).toBe(4);
  });

  test.todo("Todoの編集のテスト");
  test.todo("Todoの削除のテスト");
});
