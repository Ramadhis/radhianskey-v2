import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    keyDownBorder: " 1px solid blue ",
    keyDownBackground: "lightskyblue",
    layoutData: [
        {
            id: v4(),
            column: [
                {
                    id: v4(),
                    legend: "Num", //keyLegend
                    keycapsSizeUnit: "2.25",
                    onKeypress: "KeyA",
                    fontSize: "12px",
                    fontFamily: "",
                    keycapsColor: {
                        theme: "custom",
                        style: [
                            {
                                //layer1
                                background: "",
                                top: "",
                                bottom: "",
                                left: "",
                                right: "",
                            },
                            {
                                //layer2
                                background: "",
                                top: "",
                                bottom: "",
                                left: "",
                                right: "",
                            },
                        ],
                    },
                },
                {
                    id: v4(),
                    width: "50",
                    legend: "/",
                },
                {
                    id: v4(),
                    width: "50",
                    legend: "*",
                },
                {
                    id: v4(),
                    width: "50",
                    legend: "-",
                },
            ],
        },
        {
            id: v4(),
            column: [
                {
                    id: v4(),
                    width: "150",
                    legend: "7",
                },
                {
                    id: v4(),
                    width: "100",
                    legend: "8",
                },
                {
                    id: v4(),
                    width: "45",
                    legend: "9",
                },
                {
                    id: v4(),
                    width: "45",
                    legend: "+",
                },
            ],
        },
        {
            id: v4(),
            column: [
                {
                    id: v4(),
                    width: "150",
                    legend: "4",
                },
                {
                    id: v4(),
                    width: "100",
                    legend: "5",
                },
                {
                    id: v4(),
                    width: "45",
                    legend: "6",
                },
                {
                    id: v4(),
                    width: "45",
                    legend: "+",
                    keyConnect1: true,
                },
            ],
        },
        {
            id: v4(),
            column: [
                {
                    id: v4(),
                    width: "150",
                    legend: "1",
                },
                {
                    id: v4(),
                    width: "100",
                    legend: "2",
                },
                {
                    id: v4(),
                    width: "45",
                    legend: "3",
                },
                {
                    id: v4(),
                    width: "150",
                    legend: "ent",
                },
            ],
        },
        {
            id: v4(),
            column: [
                {
                    id: v4(),
                    width: "150",
                    legend: "0",
                },
                {
                    id: v4(),
                    width: "100",
                    legend: "0",
                    keyConnect1: false,
                    keyConnect2: true,
                },
                {
                    id: v4(),
                    width: "45",
                    legend: ". Del",
                },
                {
                    id: v4(),
                    width: "150",
                    legend: "ent",
                    keyConnect1: true,
                    keyConnect2: false,
                },
            ],
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
                width: "150",
                legend: "7",
            });
        },
        addRow: (state, action) => {
            state.layoutData.push({
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
        deleteRow: (state, action) => {
            state.layoutData.splice(action.payload.indexRow, 1);
        },
    },
});

export const { updateLayoutData, addKeys, deleteRow, deleteKey } =
    layoutSlice.actions;
export default layoutSlice.reducer;
