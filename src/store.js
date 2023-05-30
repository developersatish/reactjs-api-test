import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: [thunk],
});

export default store;
