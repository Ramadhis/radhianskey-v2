import { createSlice } from "@reduxjs/toolkit";
import { keyThemeTemplate } from "../format-data/keyThemeTemplate";

const initialState = {
    ...keyThemeTemplate,
};

const modalKeyThemeDataSlice = createSlice({
    name: "modalKeyThemeData",
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

export const { updateKeyThemeModal, setToDefault } =
    modalKeyThemeDataSlice.actions;
export default modalKeyThemeDataSlice.reducer;
