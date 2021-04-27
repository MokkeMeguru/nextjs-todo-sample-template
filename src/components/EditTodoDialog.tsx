import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { FC, useState, useEffect } from "react";
import { useEditTodo } from "../modules/todoHooks";
import { Todo } from "../modules/todoSlice";

type EditTodoDialogProps = {
  todo: Todo;
  handleClose: () => void;
};

export const EditTodoDialog: FC<EditTodoDialogProps> = ({
  todo,
  handleClose,
}) => {
  const open = todo !== null;
  const [editTask, setEditTask] = useState(todo !== null ? todo.text : "");
  const updateTodoCallback = useEditTodo();

  useEffect(() => {
    setEditTask(todo !== null ? todo.text : "");
  }, [todo]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>編集</DialogTitle>

      <DialogContent>
        <TextField
          label="text"
          fullWidth
          value={editTask}
          onChange={(event) => setEditTask(event.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            updateTodoCallback({ ...todo, text: editTask });
            handleClose();
          }}
          color="primary"
        >
          適用
        </Button>
      </DialogActions>
    </Dialog>
  );
};
