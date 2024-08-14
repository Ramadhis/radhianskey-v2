import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow } from "../../../../Store/Slices/main/layoutSlice";
import { toastFireFailed } from "../../../utils/Toast";

const AddRowBtn = () => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.layout);

    const add = (e) => {
        e.preventDefault();

        if (layout.layout_data.layoutData.length > 20) {
            return toastFireFailed(
                "you have reached the maximum number of rows created"
            );
        } else {
            dispatch(addRow());
        }
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
