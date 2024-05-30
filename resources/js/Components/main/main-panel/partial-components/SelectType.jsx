import React, { useEffect, useState } from "react";

const SelectType = () => {
    const [selectedValue, setSelectedValue] = useState("single");

    const changeSelectType = (e) => {
        return setSelectedValue(e.target.value);
    };

    useEffect(() => {
        console.log(selectedValue);
    }, [selectedValue]);

    return (
        <>
            <label className="me-2">
                <input
                    type="radio"
                    name="select"
                    className="me-1"
                    value="single"
                    checked={selectedValue === "single"}
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
                    checked={selectedValue === "multiple"}
                    onChange={changeSelectType}
                ></input>
                <i>Multiple Select</i>
            </label>
        </>
    );
};

export default SelectType;
