import React from "react";
import Select from "react-select";
import { customStyleSelect } from "../../../Styles/customStyleReactSelect";

const FilterLayoutSearch = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    return (
        <>
            <Select
                options={options}
                placeholder={<div className="text-md">Filter...</div>}
                styles={{ ...customStyleSelect, fontSize: "30px" }}
            />
        </>
    );
};

export default FilterLayoutSearch;
