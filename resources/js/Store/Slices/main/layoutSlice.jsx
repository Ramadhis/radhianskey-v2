import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import startingLayout from "../format-data/starting-layout";

const initialState = {
    ...startingLayout,
};

const layoutSlice = createSlice({
    name: "layout",
    initialState: initialState,
    reducers: {
        updateLayoutData: (state, action) => {
            // console.log(action.payload);
            return { ...state, ...action.payload };
        },
        updateLayoutKey: (state, action) => {
            state.layout_data.layoutData = action.payload;
        },
        addKeys: (state, action) => {
            state.layout_data.layoutData[action.payload.indexRow].column.push({
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
            state.layout_data.layoutData.unshift({
                id: v4(),
                column: [],
            });
        },
        deleteKey: (state, action) => {
            state.layout_data.layoutData.map((layoutDatas, index) => {
                state.layout_data.layoutData[index].column =
                    layoutDatas.column.filter(
                        (columns) =>
                            !action.payload.selectedKey.includes(columns.id)
                    );
            });
        },
        updateSelectedKey: (state, action) => {
            state.layout_data.layoutData.map((layoutDatas, index) => {
                layoutDatas.column.map((columns, index2) => {
                    if (action.payload.selectedKey.includes(columns.id)) {
                        state.layout_data.layoutData[index].column[index2][
                            action.payload.formName
                        ] = action.payload.formValue;
                    }
                });
            });
        },
        updateCaseTheme: (state, action) => {
            state.layout_data.caseData.caseTheme = action.payload.caseTheme;
        },
        deleteRow: (state, action) => {
            state.layout_data.layoutData.splice(action.payload.indexRow, 1);
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
    updateLayoutKey,
} = layoutSlice.actions;
export default layoutSlice.reducer;
