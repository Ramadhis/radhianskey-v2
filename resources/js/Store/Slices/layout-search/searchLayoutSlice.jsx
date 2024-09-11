import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchLayout = createAsyncThunk(
    "searchLayout/getListData",
    async (arg, { rejectWithValue }) => {
        const data = await axios
            .get("/get-layout-search")
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

const searchLayoutSlice = createSlice({
    name: "searchLayout",
    initialState: {
        data: null,
        message: "",
        isLoading: false,
        isErrors: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchLayout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getSearchLayout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getSearchLayout.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrors = true;
                state.message = action.payload;
            });
    },
});
export const {} = searchLayoutSlice.actions;
export default searchLayoutSlice.reducer;
