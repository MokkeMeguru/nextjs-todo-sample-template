import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  serviceStatusInitialState,
  serviceStatusReducer,
} from "./modules/serviceStatusSlice";
import { todoInitialState, todoReducer } from "./modules/todoSlice";

const rootInitialState = {
  serviceStatus: serviceStatusInitialState,
  todo: todoInitialState,
};

const reducer = combineReducers({
  serviceStatus: serviceStatusReducer,
  todo: todoReducer,
});

const initializeStore = (preloadedState = rootInitialState) => {
  return configureStore({
    preloadedState,
    reducer,
    /**
     * Redux を小さく使う方針のため middleware は未使用
     * Redux Toolkit の Default Middleware には immutable, serializable チェックをする middleware があり便利だが
     * firebase User 等のシリアライズ出来ないオブジェクトを Redux に乗せる場合は使えない
     */
    middleware: [],
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type RootState = ReturnType<
  ReturnType<typeof initializeStore>["getState"]
>;
export type AppDispatch = ReturnType<typeof initializeStore>["dispatch"];

export const getStore = (preloadedState = rootInitialState) => {
  /**
   * Server Side Rendering を使う場合、サーバ上での実行時は常に新しい store を返さないと
   * 同じサーバプロセスにアクセスした複数のユーザ間で store が共有されてしまうので注意が必要
   *
   * getServerSideProps でデータ取得を行い Redux に渡す（つまり SSR で取得データを使ってページを組み立てる）場合
   * pages/_app.tsx で既存の store と hydration を行う必要があるので注意
   *
   * 以下のページを参考に
   * https://redux.js.org/recipes/server-rendering
   * https://github.com/vercel/next.js/tree/canary/examples/with-redux
   *
   */
  return initializeStore(preloadedState);
};
