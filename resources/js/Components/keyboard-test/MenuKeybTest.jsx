import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../Store/Slices/keyboard-test/layoutTestSlice";

const MenuKeybTest = ({ menu, changeMenu }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-full body flex justify-center mt-6 opacity-40 hover:opacity-90 transition-all">
            <nav className="text-[15px] font-semibold w-[600px] bg-[#181818] shadow-lg border border-[#313131] rounded-md px-5 py-2 flex justify-around">
                <div
                    className="text-white group hover:text-red-600 font-bold cursor-pointer transition delay-75"
                    onClick={() => {
                        dispatch(reset());
                    }}
                >
                    <i className="bi bi-arrow-clockwise"></i> Reset
                </div>
                <div
                    className="group text-zinc-300 hover:text-white cursor-pointer transition-all self-center"
                    onClick={() => {
                        return changeMenu("layout-test");
                    }}
                >
                    Layout test
                    <div className="w-full flex justify-center">
                        <div
                            className={`h-0.5 bg-zinc-100 ${
                                menu == "layout-test" ? `w-[80%]` : `w-0`
                            } group-hover:w-[80%] transition-all duration-300 rounded-md`}
                        ></div>
                    </div>
                </div>
                <div
                    className="group text-zinc-300 hover:text-white cursor-pointer transition-all"
                    onClick={() => {
                        return changeMenu("skeleton-layout");
                    }}
                >
                    Skeleton layout
                    <div className="w-full flex justify-center">
                        <div
                            className={`h-0.5 bg-zinc-100 ${
                                menu == "skeleton-layout" ? `w-[80%]` : `w-0`
                            } group-hover:w-[80%] transition-all duration-300 rounded-md`}
                        ></div>
                    </div>
                </div>
                {/* <div
        className="text-white group hover:text-[#0d6efd] cursor-pointer transition delay-75"
        onClick={myLayoutMenu}
    >
        My layout
    </div> */}

                <div
                    className="text-white group hover:text-white cursor-pointer transition delay-75"
                    onClick={() => {
                        return changeMenu("change-layout");
                    }}
                >
                    Change layout
                    <div className="w-full flex justify-center">
                        <div
                            className={`h-0.5 bg-zinc-100 ${
                                menu == "change-layout" ? `w-[80%]` : `w-0`
                            } group-hover:w-[80%] transition-all duration-300 rounded-md`}
                        ></div>
                    </div>
                </div>
                {/* <div
        className="group text-zinc-300 hover:text-white cursor-pointer transition-all"
        onClick={() => {
            return setMenu("statistic-test");
        }}
    >
        Statistic test
        <div className="w-full flex justify-center">
            <div
                className={`h-0.5 bg-zinc-100 ${
                    menu == "statistic-test"
                        ? `w-[80%]`
                        : `w-0`
                } group-hover:w-[80%] transition-all duration-300 rounded-md`}
            ></div>
        </div>
    </div> */}

                {/* <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
        My-layout
    </div> */}
            </nav>
        </div>
    );
};

export default MenuKeybTest;
