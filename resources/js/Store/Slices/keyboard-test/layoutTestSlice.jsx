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
                // console.log(Object.keys(res.data).length, "ini tes");
                if (Object.keys(res.data).length != 0) {
                    return {
                        ...res.data,
                        layout_data: JSON.parse(res.data.layout_data),
                    };
                } else {
                    return null;
                }
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
    reducers: {
        addPressed: (state, action) => {
            //ketika keyboard ditekan, true ketika keydown dan false ketika key up
            // state.data.layout_data.layoutData[action.payload.indexRow].column[
            //     action.payload.indexColumn
            // ].pressedKey = action.payload.pressed;

            state.data.layout_data.layoutData.map((element, index) => {
                if (element.id == action.payload.idRow) {
                    element.column.map((elements, index2) => {
                        if (elements.id == action.payload.idCol) {
                            return (state.data.layout_data.layoutData[
                                index
                            ].column[index2].pressedKey =
                                action.payload.pressed);
                        }
                    });
                }
            });
        },
        addPressedStatus: (state, action) => {
            //status bahwa key berhasil di tekan, akan bernilai true
            // state.data.layout_data.layoutData[action.payload.indexRow].column[
            //     action.payload.indexColumn
            // ].pressedStatus = true;

            state.data.layout_data.layoutData.map((element, index) => {
                if (element.id == action.payload.idRow) {
                    element.column.map((elements, index2) => {
                        if (elements.id == action.payload.idCol) {
                            return (state.data.layout_data.layoutData[
                                index
                            ].column[index2].pressedStatus = true);
                        }
                    });
                }
            });
        },
        reset: (state, action) => {
            state.data.layout_data.layoutData.forEach(
                (element, indexLayout) => {
                    element.column.forEach((val, indexEl) => {
                        state.data.layout_data.layoutData[indexLayout].column[
                            indexEl
                        ].pressedKey = false;
                        state.data.layout_data.layoutData[indexLayout].column[
                            indexEl
                        ].pressedStatus = false;
                    });
                }
            );
        },
        resetToDefault: (state, action) => (state = { ...initialState }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLayoutTest.pending, (state, action) => {
                state.data = null;
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

export const { addPressed, addPressedStatus, reset, resetToDefault } =
    layoutTestSlice.actions;
export default layoutTestSlice.reducer;
