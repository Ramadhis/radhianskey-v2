import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Slices/main/layoutSlice";
import selectionKeyReducer from "./Slices/main/selectionKeySlice";
import modalReducer from "./Slices/modalSlice";

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        selectionKey: selectionKeyReducer,
        modal: modalReducer,
    },
});
