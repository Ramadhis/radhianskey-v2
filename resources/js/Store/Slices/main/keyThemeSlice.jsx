import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        label: "Create new theme",
        value: "create-new",
        style: [
            {
                //layer1 = index 0
                fontFamily: "times new roman",
                fontSize: "15px",
                textPlacement: "top-left",
                fontColor: "#000",
                fontWeight: "normal",
            },
            {
                //layer2 = index 1
                background: "#E7E5E4",
                top_border: "#E7E5E4",
                bottom_border: "#81716C",
                left_border: "#E7E5E4",
                right_border: "#81716C",
            },
            {
                //layer3 = index 2
                background: "#A8A29E",
                top_border: "#E7E5E4",
                bottom_border: "#78716C",
                left_border: "#E7E5E4",
                right_border: "#78716C",
            },
        ],
    },
];

const keyThemeSlice = createSlice({
    name: "keyTheme",
    initialState,
    reducers: {},
});

export const {} = keyThemeSlice.actions;
export default keyThemeSlice.reducer;
