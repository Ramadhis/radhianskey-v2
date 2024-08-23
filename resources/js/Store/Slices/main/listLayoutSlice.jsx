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

export const deleteLayout = createAsyncThunk(
    "layout/deleteLayout",
    async (uid, { rejectWithValue }) => {
        const delLayout = await axios
            .delete(`/delete-layout/${uid}`)
            .then((res) => {
                // console.log(res, "ini tes");
                return { uid: uid };
            })
            .catch((err) => {
                console.log(err.message);
                return rejectWithValue(err.message);
            });
        return delLayout;
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
        builder
            .addCase(getListLayout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getListLayout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getListLayout.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrors = true;
                state.message = action.payload;
            });
        builder
            .addCase(deleteLayout.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteLayout.fulfilled, (state, action) => {
                const stateData = [...state.data];
                const findData = stateData.findIndex((states) => {
                    return states.uid === action.payload.uid;
                });

                stateData.splice(findData, 1);
                state.data = stateData;
                state.isLoading = false;
            })
            .addCase(deleteLayout.rejected, (state, action) => {
                state.isLoading = false;
                state.isErrors = true;
            });
    },
});

export default listLayoutSlice.reducer;
