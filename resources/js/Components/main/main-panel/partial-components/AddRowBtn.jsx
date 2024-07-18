import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow } from "../../../../Store/Slices/main/layoutSlice";

const AddRowBtn = () => {
    const dispatch = useDispatch();
    // const layout = useSelector((state) => state.layout);

    const add = (e) => {
        e.preventDefault();
        dispatch(addRow());
    };

    return (
        <button
            onClick={add}
            className="bg-[#2c508a] p-1 rounded-sm px-6 text-sm text-white font-medium inline"
        >
            <i className="bi bi-plus-square me-1 "></i>
            Add row
        </button>
    );
};

export default AddRowBtn;
