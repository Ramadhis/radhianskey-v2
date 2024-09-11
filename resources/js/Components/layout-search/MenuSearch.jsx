import React, { useState } from "react";
import SortLayoutSearch from "./partial-components/SortLayoutSearch";
import FilterLayoutSearch from "./partial-components/FilterLayoutSearch";
import { Inertia } from "@inertiajs/inertia";

const MenuSearch = () => {
    const [url, setUrl] = useState(new URL(location)); //pagination
    const [search, setSearch] = useState("");

    const onClickSearch = () => {
        url.searchParams.set("page", 1);
        url.searchParams.set("q", search);

        return Inertia.visit(url.pathname + url.search);
    };

    return (
        <div className="grid md:grid-cols-6 grid-cols-4 gap-2">
            <div className="border md:col-span-4 col-span-4 border-zinc-500 hover:bg-slate-700 focus:bg-slate-700 rounded-sm px-3 py-1 flex">
                <div className="inline-block me-3 w-5">
                    <i className="bi bi-search text-[20px] text-zinc-400 font-bold"></i>
                </div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    className="w-full inline-block focus:outline-none bg-transparent text-zinc-400"
                    required
                />
            </div>
            <button
                onClick={onClickSearch}
                className="md:col-span-1 col-span-2 bg-[#2c508a] hover:bg-[#213e6d] border border-white p-1 rounded-sm px-4 text-sm  text-white font-medium inline"
            >
                Search
            </button>

            {/* <button className="bg-zinc-600 rounded-sm">
                <FilterLayoutSearch />
            </button> */}
            {/* <div></div> */}
            <button className="md:col-span-1 col-span-2 bg-zinc-600 rounded-sm">
                <SortLayoutSearch />
            </button>
        </div>
    );
};

export default MenuSearch;
