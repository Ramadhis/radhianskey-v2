import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    saveAsModal: true,
};

const layoutSlice = createSlice({
    name: "modalState",
    initialState: initialState,
    reducers: {
        modalSaveAs: (state, action) => {
            state.saveAsModal = true;
        },
        closeModal: () => {},
    },
});
