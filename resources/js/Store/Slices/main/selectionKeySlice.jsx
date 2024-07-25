import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    selectionType: "single",
    selectedKey: [],
    selectedKeyDetail: {
        id: "",
        legend: "", //keyLegend
        keycapsSize: "",
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
    },
};

// {   selectedKeyDetail Example
//     id: v4(),
//     legend: "Num", //keyLegend
//     keycapsSize: "1",
//     onKeyPress: {
//         label: "A",
//         value: "KeyA",
//     },
//     KeyConnectTop: false,
//     KeyConnectLeft: false,
//     keycapsTheme: {
//         name: "White",
//         style: [
//             {
//                 //layer1 = index 0
//                 fontFamily: "times new roman",
//                 fontSize: "15px",
//                 textPlacement: "top-left",
//                 fontColor: "#000",
//                 fontWeight: "normal",
//             },
//             {
//                 //layer2 = index 1
//                 background: "#E7E5E4",
//                 top_border: "#E7E5E4",
//                 bottom_border: "#81716C",
//                 left_border: "#E7E5E4",
//                 right_border: "#81716C",
//             },
//             {
//                 //layer3 = index 2
//                 background: "#A8A29E",
//                 top_border: "#E7E5E4",
//                 bottom_border: "#78716C",
//                 left_border: "#E7E5E4",
//                 right_border: "#78716C",
//             },
//         ],
//     },
// },

const selectionKeySlice = createSlice({
    name: "selectedKey",
    initialState: initialState,
    reducers: {
        updateSelectionKeyType: (state, action) => {
            state = { ...state, ...action.payload };
        },

        changeSelectionType: (state, action) => {
            state.selectedKey = [];
            state.selectionType = action.payload.selectionType;
        },

        updateSelectionSingleList: (state, action) => {
            if (state.selectedKey.includes(action.payload.id)) {
                const findIndex = state.selectedKey.findIndex(
                    (val) => val == action.payload.id
                );
                state.selectedKey.splice(findIndex, 1);
            } else {
                state.selectedKey = [action.payload.id];
                state.selectedKeyDetail = {
                    ...action.payload.selectedKeyDetail,
                };
            }
        },

        updateSelectedKeyDetail: (state, action) => {
            state.selectedKeyDetail[action.payload.formName] =
                action.payload.formValue;
        },

        updateSelectionMultipleList: (state, action) => {
            if (state.selectedKey.includes(action.payload.id)) {
                const findIndex = state.selectedKey.findIndex(
                    (val) => val == action.payload.id
                );
                state.selectedKey.splice(findIndex, 1);
            } else {
                state.selectedKey.push(action.payload.id);
            }
        },

        resetSelectedKeyDetail: (state, action) => {
            //reset selectedDetail to default
            state.selectedKeyDetail = {
                id: "",
                legend: "", //keyLegend
                keycapsSize: "",
                onKeyPress: {
                    label: "",
                    value: "",
                },
                KeyConnectTop: false,
                KeyConnectLeft: false,
                keycapsTheme: {
                    label: "",
                    value: "",
                    style: [
                        {
                            //layer1 = index 0
                            fontFamily: "",
                            fontSize: "",
                            textPlacement: "",
                            fontColor: "",
                            fontWeight: "",
                        },
                        {
                            //layer2 = index 1
                            background: "",
                            top_border: "",
                            bottom_border: "",
                            left_border: "",
                            right_border: "",
                        },
                        {
                            //layer3 = index 2
                            background: "",
                            top_border: "",
                            bottom_border: "",
                            left_border: "",
                            right_border: "",
                        },
                    ],
                },
            };
        },

        resetSelection: (state, action) => {
            state.selectedKey = [];
        },
    },
});

export const {
    updateSelectionKeyType,
    updateSelectionMultipleList,
    updateSelectionSingleList,
    changeSelectionType,
    resetSelection,
    resetSelectedKeyDetail,
    updateSelectedKeyDetail,
} = selectionKeySlice.actions;
export default selectionKeySlice.reducer;
