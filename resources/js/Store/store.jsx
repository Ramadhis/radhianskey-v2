import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./Slices/main/layoutSlice";
import selectionKeyReducer from "./Slices/main/selectionKeySlice";
import modalReducer from "./Slices/modalSlice";
import listLayoutReducer from "./Slices/main/listLayoutSlice";
import keyThemeReducer from "./Slices/main/keyThemeSlice";
import caseThemeReducer from "./Slices/main/caseThemeSlice";
import modalKeyThemeReducer from "./Slices/main/modalKeyThemeSlice";

export const store = configureStore({
    reducer: {
        layout: layoutReducer,
        listLayout: listLayoutReducer,
        selectionKey: selectionKeyReducer,
        modal: modalReducer,
        keyTheme: keyThemeReducer,
        caseTheme: caseThemeReducer,
        modalKeyTheme: modalKeyThemeReducer,
    },
});
