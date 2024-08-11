import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListLayout = createAsyncThunk(
    "layout/getListData",
    async (arg, { rejectWithValue }) => {
        const data = await axios
            .get("/list-layout")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err.message);
                return rejectWithValue(err.message);
            });
        return data;
    }
);

const listLayoutSlice = createSlice({
    name: "listLayout",
    initialState: {
        data: [],
        message: "",
        isLoading: false,
        isErrors: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListLayout.pending, (state, action) => {
            state.isLoading = true;
        }),
            builder.addCase(getListLayout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            }),
            builder.addCase(getListLayout.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrors = true;
                state.message = action.payload;
            });
    },
});

export default listLayoutSlice.reducer;
