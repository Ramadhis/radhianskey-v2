import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Slices/main/layoutSlice";
import selectionKeyReducer from "./Slices/main/selectionKeySlice";
import modalReducer from "./Slices/modalSlice";
import listLayoutReducer from "./Slices/main/listLayoutSlice";

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        listLayout: listLayoutReducer,
        selectionKey: selectionKeyReducer,
        modal: modalReducer,
    },
});
