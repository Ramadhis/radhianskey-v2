import React, { useState } from "react";
import Select from "react-select";
import { customStyleSelect } from "../../../Styles/customStyleReactSelect";
import { Inertia } from "@inertiajs/inertia";

const SortLayoutSearch = () => {
    const url = new URL(location);
    const [sort, setSort] = useState({
        label: url.searchParams.get("sort") == "asc" ? "Oldest" : "Latest",
        value: url.searchParams.get("sort")
            ? url.searchParams.get("sort")
            : "desc",
    });

    const options = [
        { value: "desc", label: "Latest" },
        { value: "asc", label: "Oldest" },
    ];
    const onChangeSort = (e) => {
        console.log(e.value);
        url.searchParams.set("page", 1);
        url.searchParams.set("sort", e.value);

        return Inertia.visit(url.pathname + url.search);
    };
    return (
        <>
            <Select
                options={options}
                value={sort}
                placeholder={<div className="text-md">Sort by...</div>}
                onChange={(e) => {
                    return onChangeSort(e);
                }}
                styles={{ ...customStyleSelect, fontSize: "30px" }}
            />
        </>
    );
};

export default SortLayoutSearch;
