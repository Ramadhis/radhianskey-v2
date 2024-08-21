import { createSlice } from "@reduxjs/toolkit";
import { caseThemeTemplate } from "../format-data/caseThemeTemplate";

const initialState = {
    label: "Yellow theme",
    value: "dark",
    createdBy: 12,
    style: {
        outer_border: "#0d0900",
        inner_border: "#ff9100",
        outer_background: "#ffc524",
        inner_background: "#fceab6",
    },
};

const modalCaseThemeDataSlice = createSlice({
    name: "modalCaseThemeData",
    initialState,
    reducers: {
        updateCaseThemeModal: (state, action) => {
            return { ...state, ...action.payload.caseTheme };
        },
        updateStyleCaseTheme: (state, action) => {
            const style = { ...state.style };
            style[action.payload.inputName] = action.payload.inputValue;
            state.style = style;
        },
        setToDefault: (state, action) => {
            return { ...state, ...caseThemeTemplate };
        },
    },
});

export const { updateCaseThemeModal, updateStyleCaseTheme, setToDefault } =
    modalCaseThemeDataSlice.actions;
export default modalCaseThemeDataSlice.reducer;
