import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { FC, useCallback, useRef } from "react";
import { useStore } from "react-redux";

type DebugReduxDialogProps = {
  open: boolean;
  handleClose: () => void;
  debugSaveReduxStore: (json: any) => void;
};

export const DebugReduxDialog: FC<DebugReduxDialogProps> = ({
  open,
  handleClose,
  debugSaveReduxStore,
}) => {
  const store = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const saveReduxStore = useCallback(() => {
    const value = inputRef.current?.value;
    if (!value) {
      return;
    }

    const json = JSON.parse(value);
    debugSaveReduxStore(json);
  }, [debugSaveReduxStore]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
      <DialogTitle>Redux</DialogTitle>

      <DialogContent>
        <form
          id="redux-store-edit-form"
          onSubmit={(event) => {
            event.preventDefault();
            saveReduxStore();
          }}
        >
          <TextField
            name="store"
            inputRef={inputRef}
            label="Reduxの中身"
            multiline
            variant="outlined"
            defaultValue={JSON.stringify(store.getState(), null, "  ")}
            fullWidth
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} type="button">
          閉じる
        </Button>
        <Button type="submit" form="redux-store-edit-form" color="primary">
          変更
        </Button>
      </DialogActions>
    </Dialog>
  );
};
