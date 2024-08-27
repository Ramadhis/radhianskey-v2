import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getListCaseTheme = createAsyncThunk(
    "case-theme/getListCaseTheme",
    async (arg, { rejectWithValue }) => {
        //load private theme
        const data = await axios
            .get("/case-theme/case-theme-byId")
            .then((res) => {
                // console.log(JSON.parse(res.data));
                return JSON.parse(res.data);
            })
            .catch((err) => {
                console.log(err.message);
                return rejectWithValue(err.message);
            });
        return data;
    }
);

const caseThemeSlice = createSlice({
    name: "caseTheme",
    initialState,
    reducers: {
        addCaseTheme: (state, action) => {
            state.push(action.payload.themes);
        },
        addMultipleCaseTheme: (state, action) => {
            state.push(...action.payload);
        },
        deleteAllCaseTheme: (state, action) => {
            state.splice(0, state.length);
        },
        deleteThemeById: (state, action) => {
            const findState = state.findIndex((val) => {
                val.id === action.payload.id;
            });
            state.splice(findState, 1);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListCaseTheme.pending, (state, action) => {
                // state.isLoading = true;
            })
            .addCase(getListCaseTheme.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.push(...action.payload);
            })
            .addCase(getListCaseTheme.rejected, (state, action) => {
                // state.isLoading = false;
                // state.isErrors = true;
                // state.message = action.payload;
            });
    },
});

export const {
    addKeyTheme,
    addMultipleKeyTheme,
    deleteAllCaseTheme,
    deleteThemeById,
} = caseThemeSlice.actions;
export default caseThemeSlice.reducer;
