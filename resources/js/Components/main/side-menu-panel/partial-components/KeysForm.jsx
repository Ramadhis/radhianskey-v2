import React from "react";
import KeyThemeSelect from "./KeyThemeSelect";

const KeysForm = () => {
    return (
        <>
            <div className="w-full mt-1">
                <label className="text-sm">Keys legend</label>
                <input
                    type="text"
                    placeholder="keys legend (Max 10 character)"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">On key pressed</label>
                <input
                    type="text"
                    placeholder="On key pressed..."
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">Key size</label>
                <input
                    type="text"
                    placeholder="Key size"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">Font style</label>
                <input
                    type="text"
                    placeholder="Font Style"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">Text align</label>
                <input
                    type="text"
                    placeholder="Text align"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">Keycaps theme color</label>
                {/* <input
                    type="text"
                    placeholder="Keycaps theme color"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                /> */}
                <KeyThemeSelect />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">Key connect to top</label>
                <input
                    type="text"
                    placeholder="connect key"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-1">
                <label className="text-sm">Key connect to left</label>
                <input
                    type="text"
                    placeholder="connect key"
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

export default KeysForm;
