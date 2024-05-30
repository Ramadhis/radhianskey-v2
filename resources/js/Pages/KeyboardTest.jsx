import React from "react";
import AuthHeaderTemplate from "../Components/auth/AuthHeaderTemplate";

const KeyboardTest = () => {
    const loginStatus = false;
    return (
        <>
            <div className="Header flex justify-between p-2">
                <div className="flex grow-0 items-center">
                    <div className="text-[25px] font-bold text-white">
                        Radhianskey
                    </div>
                    <div className="text-white text-[17px] ms-5 me-1">
                        Create-layout
                    </div>
                    <div className="text-white text-[17px] mx-1">menu 2</div>
                </div>
                <div className="">
                    <AuthHeaderTemplate />
                </div>
            </div>
            <div className="body flex justify-center mt-14">
                <div className="w-[600px] bg-[#181818] shadow-lg border border-[#313131] rounded-md px-5 py-2 flex justify-around">
                    <div className=" text-white hover:text-red-600 font-bold cursor-pointer transition-all delay-75">
                        <i className="bi bi-arrow-clockwise"></i> Reset
                    </div>
                    <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                        Layout-test
                    </div>
                    <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                        Skeleton-layout
                    </div>
                    <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                        Statistic-test
                    </div>
                    <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                        My-layout
                    </div>
                </div>
            </div>
        </>
    );
};

export default KeyboardTest;
