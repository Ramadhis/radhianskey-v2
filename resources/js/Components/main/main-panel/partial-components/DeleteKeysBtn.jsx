import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteKey } from "../../../../Store/Slices/main/layoutSlice";
import { resetSelection } from "../../../../Store/Slices/main/selectionKeySlice";

const DeleteKeysBtn = () => {
    const selectedKey = JSON.parse(
        JSON.stringify(useSelector((state) => state.selectionKey))
    );
    const dispatch = useDispatch();

    const deleteKeyPressed = () => {
        dispatch(deleteKey({ selectedKey: selectedKey.selectedKey }));
        dispatch(resetSelection());
    };

    return (
        <button
            onClick={deleteKeyPressed}
            className="bg-red-600 ms-2 p-1 rounded-sm px-4 text-sm text-white font-medium "
        >
            <i className="bi bi-trash3"></i> Delete selected keys
        </button>
    );
};

export default DeleteKeysBtn;
