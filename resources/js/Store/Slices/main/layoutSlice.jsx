import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    keyDownData: {
        keyDownBorder: " 1px solid blue ",
        keyDownBackground: "lightskyblue",
    },
    caseData: {
        caseTheme: {
            label: "Pink Theme",
            value: "pink",
            style: {
                outer_border: "#706662",
                inner_border: "#fff",
                outer_background: "#e8c4b8",
                inner_background: "#282828",
            },
        },
    },
    layoutData: [
        {
            id: v4(),
            column: [
                {
                    id: v4(),
                    legend: "Num", //keyLegend
                    keycapsSize: "1",
                    onKeyPress: {
                        label: "A",
                        value: "KeyA",
                    },
                    KeyConnectTop: false,
                    KeyConnectLeft: false,
                    keycapsTheme: {
                        label: "White",
                        value: "white",
                        style: [
                            {
                                //layer1 = index 0
                                fontFamily: "times new roman",
                                fontSize: "15px",
                                textPlacement: "start-left",
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
                },
            ],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
        {
            id: v4(),
            column: [],
        },
    ],
};

const layoutSlice = createSlice({
    name: "layout",
    initialState: initialState,
    reducers: {
        updateLayoutData: (state, action) => {
            console.log(action.payload);
            return { ...state, ...action.payload };
        },
        addKeys: (state, action) => {
            state.layoutData[action.payload.indexRow].column.push({
                id: v4(),
                legend: "A", //keyLegend
                keycapsSize: 1,
                onKeyPress: {
                    label: "",
                    value: "",
                },
                KeyConnectTop: false,
                KeyConnectLeft: false,
                keycapsTheme: {
                    label: "White",
                    value: "white",
                    style: [
                        {
                            //layer1 = index 0
                            fontFamily: "times new roman",
                            fontSize: "15px",
                            textPlacement: "start-left",
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
            });
        },
        addRow: (state, action) => {
            state.layoutData.unshift({
                id: v4(),
                column: [],
            });
        },
        deleteKey: (state, action) => {
            state.layoutData.map((layoutDatas, index) => {
                state.layoutData[index].column = layoutDatas.column.filter(
                    (columns) =>
                        !action.payload.selectedKey.includes(columns.id)
                );
            });
        },
        updateSelectedKey: (state, action) => {
            state.layoutData.map((layoutDatas, index) => {
                layoutDatas.column.map((columns, index2) => {
                    if (action.payload.selectedKey.includes(columns.id)) {
                        state.layoutData[index].column[index2][
                            action.payload.formName
                        ] = action.payload.formValue;
                    }
                });
            });
        },
        updateCaseTheme: (state, action) => {
            state.caseData.caseTheme = action.payload.caseTheme;
        },
        deleteRow: (state, action) => {
            state.layoutData.splice(action.payload.indexRow, 1);
        },
    },
    extraReducers: (builder) => {},
});

export const {
    updateLayoutData,
    addKeys,
    addRow,
    deleteRow,
    deleteKey,
    updateSelectedKey,
    updateCaseTheme,
} = layoutSlice.actions;
export default layoutSlice.reducer;
