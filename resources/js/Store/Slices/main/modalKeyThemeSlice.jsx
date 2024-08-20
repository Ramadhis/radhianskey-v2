import { createSlice } from "@reduxjs/toolkit";
import { keyThemeTemplate } from "../format-data/keyThemeTemplate";

const initialState = {
    ...keyThemeTemplate,
};

const modalKeyThemeSlice = createSlice({
    name: "modalKeyTheme",
    initialState,
    reducers: {
        updateKeyThemeModal: (state, action) => {
            return { ...state, ...action.payload.keyTheme };
        },
        setToDefault: (state, action) => {
            return { ...state, ...keyThemeTemplate };
        },
    },
});

export const { updateKeyThemeModal, setToDefault } = modalKeyThemeSlice.actions;
export default modalKeyThemeSlice.reducer;
