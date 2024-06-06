import React from "react";
import MenuLayout from "./MenuLayout";

const LayoutDescForm = () => {
    return (
        <>
            <div className="w-full mt-1">
                <label className="text-sm w-full whitespace-nowrap text-ellipsis overflow-hidden">
                    Layout Name
                </label>
                <input
                    type="text"
                    placeholder="Layout name"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1  ">
                <label className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
                    Layout Description
                </label>
                <input
                    type="text"
                    placeholder="Layout name"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-3 mb-3 text-right">
                <a
                    href="#"
                    className="bg-[#2c508a] p-1 rounded-sm px-2 h-4 text-sm font-medium "
                >
                    Apply
                </a>
            </div>
        </>
    );
};

export default LayoutDescForm;
