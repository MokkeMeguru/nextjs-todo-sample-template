import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { NextPage } from "next";
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { NewTodoDialog } from "../components/NewTodoDialog";
import { EditTodoDialog } from "../components/EditTodoDialog";
import { useTodos, useAddTodo } from "../modules/todoHooks";
import { RootState } from "../state";
import { addTodo, Todo } from "./todoSlice";

const TodosPage: NextPage<{}> = () => {
  const todoIds = useSelector((state: RootState) => state.todo.todoIds);
  const entities = useSelector((state: RootState) => state.todo.entities);

  const todos = useMemo(() => {
    return todoIds
      .map((id) => {
        return entities[id];
      })
      .filter((todo): todo is Todo => !!todo);
  }, [entities, todoIds]);

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState("");

  return (
    <div>
      <h2>Todo 一覧</h2>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          新規作成
        </Button>
      </div>
      <div>
        <List>
          {todos.map((todo) => (
            <ListItem dense button key={todo.id}>
              <ListItemIcon>
                <Checkbox checked={todo.completed} disableRipple />
              </ListItemIcon>
              <ListItemText primary={todo.text} />
              <ListItemSecondaryAction>
                <IconButton onClick={() => setEditId(todo.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => alert("未実装")}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>

      <EditTodoDialog
        todo={editId === "" ? null : entities[editId]}
        handleClose={() => {
          setEditId("");
        }}
      />
      <NewTodoDialog
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default TodosPage;
