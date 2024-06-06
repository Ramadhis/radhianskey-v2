import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Slices/main/layoutSlice";
import selectionKeyReducer from "./Slices/main/selectionKeySlice";

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        selectionKey: selectionKeyReducer,
    },
});
