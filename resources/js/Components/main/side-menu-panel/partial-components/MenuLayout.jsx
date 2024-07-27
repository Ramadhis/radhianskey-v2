import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const MenuLayout = ({ headerTitle, dragHandle, children }) => {
    const [minimize, setMinimize] = useState(false);

    // const layoutData = useSelector((state) => state.layout);

    // console.log("test",layoutData);

    return (
        <div className="menu my-2 text-zinc-300">
            <div className="bg-gray-700 w-full p-1 rounded-t-sm relative">
                <div className="flex flex-shrink-0 whitespace-nowrap overflow-hidden">
                    {headerTitle}
                </div>
                <div className="absolute right-0 top-0 me-1 mt-1 flex">
                    <div
                        onClick={() => {
                            if (minimize) {
                                return setMinimize(false);
                            } else {
                                return setMinimize(true);
                            }
                        }}
                        className="border border-[#2c508a] bg-gray-700 hover:bg-[#2c508a] px-2 font-bold me-1 text-[13px] rounded-sm cursor-pointer"
                    >
                        <div className="-mt-1">__</div>
                    </div>
                    <div
                        {...dragHandle}
                        className="border border-[#2c508a]  bg-gray-700 hover:bg-[#2c508a] px-2 font-bold text-[13px] rounded-sm cursor-pointer"
                    >
                        <i className="bi bi-arrows-move"></i>
                    </div>
                </div>
            </div>
            <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-auto p-1 border-s border-b border-e border-gray-700 transition-all delay-75">
                <div className={`h-full ${minimize ? `hidden` : `block`} `}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MenuLayout;
