import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteKey } from "../../../../Store/Slices/main/layoutSlice";
import {
    resetSelection,
    resetSelectedKeyDetail,
} from "../../../../Store/Slices/main/selectionKeySlice";

const DeleteKeysBtn = () => {
    const selectedKey = JSON.parse(
        JSON.stringify(useSelector((state) => state.selectionKey))
    );
    const dispatch = useDispatch();

    const deleteKeyPressed = () => {
        dispatch(deleteKey({ selectedKey: selectedKey.selectedKey }));
        dispatch(resetSelection());
        dispatch(resetSelectedKeyDetail());
    };

    return (
        <button
            onClick={deleteKeyPressed}
            className="border border-red-600 hover:bg-red-600 ms-2 p-1 rounded-sm px-3 text-sm text-zinc-300 font-medium hover:text-white transition-all"
        >
            <i className="bi bi-trash3"></i> Delete selected keys
        </button>
    );
};

export default DeleteKeysBtn;
