import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 } from "uuid";

const initialState = {
    data: null,
    message: "",
    isLoading: false,
    isErrors: false,
};

export const getLayoutTest = createAsyncThunk(
    "layout-test/getLayoutTest",
    async (arg, { rejectWithValue }) => {
        const data = await axios
            .get("/get-layout-test", {
                params: {
                    ...arg,
                },
            })
            .then((res) => {
                // console.log(JSON.parse(res.data.layout_data));
                return {
                    ...res.data,
                    layout_data: JSON.parse(res.data.layout_data),
                };
            })
            .catch((err) => {
                console.log(err.message);
                return rejectWithValue(err.message);
            });
        return data;
    }
);

const layoutTestSlice = createSlice({
    name: "layout-test",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLayoutTest.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getLayoutTest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getLayoutTest.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrors = true;
                state.message = action.payload;
            });
    },
});

export const {} = layoutTestSlice.actions;
export default layoutTestSlice.reducer;
