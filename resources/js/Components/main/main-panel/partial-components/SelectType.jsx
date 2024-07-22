import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeSelectionType,
    resetSelectedKeyDetail,
} from "../../../../Store/Slices/main/selectionKeySlice";

const SelectType = () => {
    const [selectedValue, setSelectedValue] = useState("single");
    const selectionKey = JSON.parse(
        JSON.stringify(useSelector((state) => state.selectionKey))
    );
    const dispatch = useDispatch();

    const changeSelectType = (e) => {
        dispatch(changeSelectionType({ selectionType: e.target.value }));
        dispatch(resetSelectedKeyDetail());
    };

    return (
        <div className="ms-1 text-sm text-slate-300">
            <label className="me-2">
                <input
                    type="radio"
                    name="select"
                    className="me-1"
                    value="single"
                    checked={selectionKey.selectionType == "single"}
                    onChange={changeSelectType}
                />
                <i>Single Select</i>
            </label>
            <label className="me-2">
                {" "}
                <input
                    type="radio"
                    className="me-1"
                    name="select"
                    value="multiple"
                    checked={selectionKey.selectionType == "multiple"}
                    onChange={changeSelectType}
                ></input>
                <i>Multiple Select</i>
            </label>
        </div>
    );
};

export default SelectType;
