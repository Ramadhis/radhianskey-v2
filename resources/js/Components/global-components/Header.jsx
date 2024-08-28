import React from "react";
import AuthHeaderTemplate from "../auth/AuthHeaderTemplate";

const Header = () => {
    return (
        <div className="Header flex justify-between p-2">
            <div className="flex grow-0 items-center">
                <div className="text-[25px] font-bold text-white">
                    Radhianskey
                </div>
                <a
                    href={"/create-layout"}
                    className="group text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all text-[17px] ms-5 me-1"
                >
                    Create-layout
                    <div className="h-0.5 bg-[#0d6efd] w-0 group-hover:w-full transition-all duration-300 rounded-md"></div>
                </a>
                {/* <div className="text-white text-[17px] mx-1">menu 2</div> */}
            </div>
            <div className="">
                <AuthHeaderTemplate />
            </div>
        </div>
    );
};

export default Header;
