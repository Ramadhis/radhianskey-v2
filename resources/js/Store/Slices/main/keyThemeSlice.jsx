import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";

const initialState = [];

export const getListKeyTheme = createAsyncThunk(
    "key-theme/getListKeyTheme",
    async (arg, { rejectWithValue }) => {
        //load private theme
        const data = await axios
            .get("/key-theme/key-theme_byId")
            .then((res) => {
                return JSON.parse(res.data);
            })
            .catch((err) => {
                console.log(err.message);
                return rejectWithValue(err.message);
            });
        return data;
    }
);

const keyThemeSlice = createSlice({
    name: "keyTheme",
    initialState,
    reducers: {
        addKeyTheme: (state, action) => {
            state.push(action.payload.themes);
        },
        addMultipleKeyTheme: (state, action) => {
            state.push(...action.payload);
        },
        deleteAllTheme: (state, action) => {
            state.splice(0, state.length);
        },
        deleteThemeById: (state, action) => {
            // const states = [...state];
            const findState = state.findIndex((val) => {
                val.id === action.payload.id;
            });
            state.splice(findState, 1);
            // console.log("after update", states);
            // state = states;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListKeyTheme.pending, (state, action) => {
                // state.isLoading = true;
            })
            .addCase(getListKeyTheme.fulfilled, (state, action) => {
                // state.isLoading = false;
                state.push(...action.payload);
            })
            .addCase(getListKeyTheme.rejected, (state, action) => {
                // state.isLoading = false;
                // state.isErrors = true;
                // state.message = action.payload;
            });
    },
});

export const {
    addKeyTheme,
    addMultipleKeyTheme,
    deleteAllTheme,
    deleteThemeById,
} = keyThemeSlice.actions;
export default keyThemeSlice.reducer;
