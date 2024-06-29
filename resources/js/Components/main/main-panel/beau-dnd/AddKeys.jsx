import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addKeys } from "../../../../Store/Slices/main/layoutSlice";

const AddKeys = ({ indexRow }) => {
    const dispatch = useDispatch();

    const updateAddKeys = () => {
        return dispatch(addKeys({ indexRow: indexRow }));
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
