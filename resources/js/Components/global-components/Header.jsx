import React from "react";
import AuthHeaderTemplate from "../auth/AuthHeaderTemplate";

const Header = () => {
    return (
        <div className="Header flex justify-between p-2">
            <div className="flex grow-0 items-center">
                <a href={"/"} className="text-[25px] font-bold text-white">
                    <img
                        src="/images/radhianskey2.png"
                        className="h-8"
                        alt=""
                    />
                </a>
                <a
                    href={"/create-layout"}
                    className="group text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all text-[15px] ms-5 me-1"
                >
                    Create Layout
                    <div className="h-0.5 bg-[#0d6efd] w-0 group-hover:w-full transition-all duration-300 rounded-md"></div>
                </a>
                <a
                    href={"/layout-search"}
                    className="group text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all text-[15px] ms-5 me-1"
                >
                    Layout Search
                    <div className="h-0.5 bg-[#0d6efd] w-0 group-hover:w-full transition-all duration-300 rounded-md"></div>
                </a>
                <a
                    href={"/about"}
                    className="group text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all text-[15px] ms-5 me-1"
                >
                    About
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
