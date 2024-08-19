import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    saveAsModal: false,
    myLayoutModal: false,
    createNewThemeModal: false,
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
        modalCreateNewThemeOpen: (state, action) => {
            state.createNewThemeModal = true;
        },
        closeModal: (state, action) => {
            Object.keys(state).map((val, index) => {
                state[`${val}`] = false;
            });

            // state.saveAsModal = false;
            // state.myLayoutModal = false;
        },
    },
});

export const {
    modalSaveAsOpen,
    modalMyLayoutOpen,
    modalCreateNewThemeOpen,
    closeModal,
} = modalSlice.actions;
export default modalSlice.reducer;
