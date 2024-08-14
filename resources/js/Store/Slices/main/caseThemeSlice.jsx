import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        label: "Create new theme",
        value: "new",
        style: {
            outer_border: "#706662",
            inner_border: "#706662",
            outer_background: "#e8c4b8",
            inner_background: "#332b29",
        },
    },
];

const caseThemeSlice = createSlice({
    name: "caseTheme",
    initialState,
    reducers: {},
});

export const {} = caseThemeSlice.actions;
export default caseThemeSlice.reducer;
