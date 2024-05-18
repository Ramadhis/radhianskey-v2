import React, { useState } from "react";

const SideMenu = () => {
    return (
        <div
            className="w-full h-full overflow-hidden hover:overflow-auto"
            style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#616161 #66000000",
            }}
        >
            <div className="h-full p-1">
                <div className="menu my-2 text-zinc-300">
                    <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                        Layout Description
                    </div>
                    <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                        <div className="w-full mt-1">
                            <label className="text-sm">Layout name</label>
                            <input
                                type="text"
                                placeholder="Layout name"
                                className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                            />
                        </div>
                        <div className="w-full mt-1">
                            <label className="text-sm">
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
                    </div>
                </div>
                <div className="menu my-2 text-zinc-300">
                    <div className="bg-gray-700 w-full p-1 rounded-t-sm text-sm font-medium">
                        Keys
                    </div>
                    <div className="accor-body h-auto bg-[#1f1f1f] rounded-b-sm  p-1 border-s border-b border-e border-gray-700">
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
                            <label className="text-sm">Keycaps color</label>
                            <input
                                type="text"
                                placeholder="Keycaps color"
                                className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                            />
                        </div>
                        <div className="w-full mt-1">
                            <label className="text-sm">Keycaps connect</label>
                            <input
                                type="text"
                                placeholder="Keycaps color"
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
                    </div>
                </div>

                <div className="menu my-2 text-zinc-300">
                    <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                        Layout case
                    </div>
                    <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                        <div className="w-full mt-1">
                            <label className="text-sm">Case Color</label>
                            <input
                                type="text"
                                placeholder="Case Color"
                                className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                            />
                        </div>
                        <div className="w-full mt-1">
                            <label className="text-sm">Padding</label>
                            <input
                                type="text"
                                placeholder="Case Color"
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
