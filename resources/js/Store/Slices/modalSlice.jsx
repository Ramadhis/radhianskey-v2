import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    saveAsModal: false,
    myLayoutModal: false,
    createKeyThemeModal: false,
    createCaseThemeModal: false,
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
            state.createKeyThemeModal = true;
        },
        modalCreateCaseThemeOpen: (state, action) => {
            state.createCaseThemeModal = true;
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
    modalCreateCaseThemeOpen,
    closeModal,
} = modalSlice.actions;
export default modalSlice.reducer;
