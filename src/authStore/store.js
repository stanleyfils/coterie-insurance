// import { createStore, applyMiddleware } from "redux";
// // import Thunk from "redux-thunk";
// import { rootReducer } from "./reducers/rootReducer";

// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const store = configureStore({ reducer: rootReducer });

export default store;
