import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    selectionType: "single",
    selectedKey: [],
};

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
            }
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
} = selectionKeySlice.actions;
export default selectionKeySlice.reducer;
