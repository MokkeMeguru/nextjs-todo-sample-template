import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { FC } from "react";

type NewTodoDialogProps = {
  open: boolean;
  handleClose: () => void;
};

export const NewTodoDialog: FC<NewTodoDialogProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>新規作成</DialogTitle>

      <DialogContent>
        <TextField label="text" fullWidth />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
        <Button onClick={handleClose} color="primary">
          作成
        </Button>
      </DialogActions>
    </Dialog>
  );
};
