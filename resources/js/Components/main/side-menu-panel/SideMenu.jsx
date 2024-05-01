import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const SideMenu = () => {
    return (
        <Panel
            className="bg-[#181818]"
            minSize={10}
            maxSize={30}
            defaultSize={15}
        >
            <div
                className="w-full h-full overflow-hidden hover:overflow-auto"
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#616161 #66000000",
                }}
            >
                <div className="h-full p-1">
                    <div className="menu my-1 text-zinc-300">
                        <div className="bg-gray-700 w-full p-1 rounded-t-sm text-sm font-medium">
                            Edit keys
                        </div>
                        <div className="accor-body h-auto bg-[#1f1f1f] rounded-b-sm  p-1 border-s border-b border-e border-gray-700">
                            <div className="w-full mt-1">
                                <label className="text-sm">
                                    Keys legend (Max 10 character)
                                </label>
                                <input
                                    type="text"
                                    placeholder="keys..."
                                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                />
                            </div>
                            <div className="w-full mt-1">
                                <label className="text-sm">
                                    On key pressed
                                </label>
                                <input
                                    type="text"
                                    placeholder="On key pressed..."
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
                    <div className="menu my-1 text-zinc-300">
                        <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                            Edit column menu
                        </div>
                        <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                            content
                        </div>
                    </div>
                    <div className="menu my-1 text-zinc-300">
                        <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                            Edit column menu
                        </div>
                        <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                            content
                        </div>
                    </div>
                    <div className="menu my-1 text-zinc-300">
                        <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                            Edit column menu
                        </div>
                        <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};

export default SideMenu;
