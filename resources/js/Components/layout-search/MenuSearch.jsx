import React from "react";
import SortLayoutSearch from "./partial-components/SortLayoutSearch";
import FilterLayoutSearch from "./partial-components/FilterLayoutSearch";

const MenuSearch = () => {
    return (
        <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
            <div className="border md:col-span-3 col-span-3 border-zinc-500 hover:bg-slate-700 focus:bg-slate-700 rounded-sm px-3 py-1 flex">
                <div className="inline-block me-3 w-5">
                    <i className="bi bi-search text-[20px] text-zinc-400 font-bold"></i>
                </div>
                <input
                    type="text"
                    className="w-full inline-block focus:outline-none bg-transparent text-zinc-400"
                />
            </div>

            <button className="bg-zinc-600 rounded-sm">
                <SortLayoutSearch />
            </button>
            <button className="bg-zinc-600 rounded-sm">
                <FilterLayoutSearch />
            </button>

            <button className=" bg-[#2c508a] hover:bg-[#213e6d] border border-white p-1 rounded-sm px-4 text-sm  text-white font-medium inline">
                Search
            </button>
        </div>
    );
};

export default MenuSearch;
