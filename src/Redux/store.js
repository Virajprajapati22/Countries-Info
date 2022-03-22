import { createStore } from "redux";
import redu from "./Reducers";

const store = createStore(
  redu,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
