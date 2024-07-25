import React, { useState, useEffect } from "react";

const LayoutDescForm = () => {
    const [layoutExp, setLayoutExp] = useState({
        layoutName: "",
        layoutDesc: "",
    });

    return (
        <div className="mb-2">
            <div className="w-full mt-1">
                <label className="text-sm w-full whitespace-nowrap text-ellipsis overflow-hidden">
                    Layout Name
                </label>
                <input
                    type="text"
                    placeholder="Layout name"
                    value={layoutExp.layoutName}
                    onChange={(e) => {
                        return setLayoutExp((prev) => {
                            return { ...prev, layoutName: e.target.value };
                        });
                    }}
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1  ">
                <label className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
                    Layout Description
                </label>
                <textarea
                    type="text"
                    placeholder="Layout name"
                    value={layoutExp.layoutDesc}
                    onChange={(e) => {
                        return setLayoutExp((prev) => {
                            return { ...prev, layoutDesc: e.target.value };
                        });
                    }}
                    className="w-full bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            {/* <div className="w-full mt-3 mb-3 text-right">
                <a
                    href="#"
                    className="bg-[#2c508a] p-1 rounded-sm px-2 h-4 text-sm font-medium "
                >
                    Apply
                </a>
            </div> */}
        </div>
    );
};

export default LayoutDescForm;
