import React from "react";
import MenuLayout from "./MenuLayout";
import CaseThemeSelect from "./CaseThemeSelect";

const CaseForm = () => {
    return (
        <div className="mb-2">
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Case theme
                </label>
                <CaseThemeSelect />
            </div>
            {/* <div className="w-full mt-1">
                <label className="text-sm">Padding</label>
                <input
                    type="text"
                    placeholder="Case Color"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div> */}
        </div>
    );
};

export default CaseForm;
