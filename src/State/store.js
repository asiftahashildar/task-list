import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducers/rootReducer";

export const Store = configureStore({ reducer: rootReducer });
