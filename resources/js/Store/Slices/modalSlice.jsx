import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    saveAsModal: false,
    myLayoutModal: false,
};

const modalSlice = createSlice({
    name: "modalState",
    initialState: initialState,
    reducers: {
        modalSaveAsOpen: (state, action) => {
            state.saveAsModal = true;
        },
        modalMyLayoutOpen: (state, action) => {
            state.myLayoutModal = true;
        },
        closeModal: (state, action) => {
            state.saveAsModal = false;
            state.myLayoutModal = false;
        },
    },
});

export const { modalSaveAsOpen, modalMyLayoutOpen, closeModal } =
    modalSlice.actions;
export default modalSlice.reducer;
