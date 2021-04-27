import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Provider } from "react-redux";
import { AppLayout } from "../components/AppLayout";
import { getStore } from "../store";

import "sanitize.css";

const initialStore = getStore();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [store, setStore] = useState(initialStore);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Provider store={store}>
        <AppLayout
          debugSaveReduxStore={(json) => {
            setStore(getStore(json));
          }}
        >
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  );
};

export default MyApp;
