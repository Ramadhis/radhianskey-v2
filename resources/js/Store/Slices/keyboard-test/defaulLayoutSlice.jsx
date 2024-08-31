import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListDefaultLayout = createAsyncThunk(
    "layout/getListDefaultLayout",
    async (arg, { rejectWithValue }) => {
        const data = await axios
            .get("/get-default-layout")
            .then((res) => {
                // console.log(res.data);
                return res.data;
            })
            .catch((err) => {
                console.log(err.message);
                return rejectWithValue(err.message);
            });
        return data;
    }
);

const defaulLayoutSlice = createSlice({
    name: "listDefaultLayout",
    initialState: {
        data: [],
        message: "",
        isLoading: false,
        isErrors: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getListDefaultLayout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getListDefaultLayout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getListDefaultLayout.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrors = true;
                state.message = action.payload;
            });
    },
});

export default defaulLayoutSlice.reducer;
