import { AppBar, Container, Fab, Toolbar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Alert, AlertTitle } from "@material-ui/lab";
import Link from "next/link";
import { FC, useState } from "react";
import { useServiceStatus } from "../modules/serviceStatusHooks";
import { DebugReduxDialog } from "./DebugReduxDialog";

type AppLayoutProps = {
  debugSaveReduxStore: (json: any) => void;
};

export const AppLayout: FC<AppLayoutProps> = ({
  children,
  debugSaveReduxStore,
}) => {
  const { maintenance } = useServiceStatus();

  const [showDebug, setShowDebug] = useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <a style={{ color: "#ffffff", textDecoration: "none" }}>
              nextjs-todo-sample
            </a>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        {maintenance && (
          <Alert severity="error">
            <AlertTitle>エラー</AlertTitle>
            現在メンテナンス中です
          </Alert>
        )}

        {!maintenance && children}
      </Container>

      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Fab onClick={() => setShowDebug(true)}>
          <EditIcon />
        </Fab>
      </div>

      <DebugReduxDialog
        open={showDebug}
        handleClose={() => setShowDebug(false)}
        debugSaveReduxStore={debugSaveReduxStore}
      />
    </div>
  );
};
