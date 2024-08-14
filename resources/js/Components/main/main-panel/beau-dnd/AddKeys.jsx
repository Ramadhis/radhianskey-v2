import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addKeys } from "../../../../Store/Slices/main/layoutSlice";
import { toastFireFailed } from "../../../utils/Toast";

const AddKeys = ({ indexRow }) => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.layout);

    const updateAddKeys = () => {
        if (layout.layout_data.layoutData[indexRow].column.length >= 30) {
            return toastFireFailed(
                `you have reached the maximum number of key creations on line ${
                    indexRow + 1
                }`
            );
        } else {
            return dispatch(addKeys({ indexRow: indexRow }));
        }
    };

    return (
        <button
            className="w-6 h-full font-semibold hover:font-bold hover:border-white hover:border-2 bg-green-600 text-white me-2 flex justify-center justify-items-center place-items-center rounded-sm"
            onClick={updateAddKeys}
        >
            <i className="bi bi-plus text-[20px]"></i>
        </button>
    );
};

export default AddKeys;
