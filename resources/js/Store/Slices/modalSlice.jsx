import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    saveAsModal: false,
};

const modalSlice = createSlice({
    name: "modalState",
    initialState: initialState,
    reducers: {
        modalSaveAsOpen: (state, action) => {
            state.saveAsModal = true;
        },
        closeModal: (state, action) => {
            state.saveAsModal = false;
        },
    },
});

export const { modalSaveAsOpen, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
