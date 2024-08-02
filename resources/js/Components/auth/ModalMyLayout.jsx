import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ModalMyLayout = () => {
    return (
        <div className="lg:w-[768px] md:w-[768px] w-[320px] text-white">
            <div className="font-semibold text-[20px]">My Layout</div>
            {/* <input
                type="text"
                placeholder="Email"
                className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                required
            /> */}
            <div className="w-full h-[400px] border border-[#313131] my-1 mt-2 p-1">
                <SimpleBar className="h-full">
                    <div className="w-full h-full grid grid-cols-3 gap-y-12 gap-x-3">
                        {[...Array(10)].map(() => {
                            return (
                                <div className="bg-blue-400 h-32">
                                    <div className=" overflow-hidden w-full h-full">
                                        <img
                                            className="object-contain w-full h-full hover:scale-150 hover:transition-all hover:animate-none hover:duration-150 hover:delay-100"
                                            src={
                                                "/images/preview_layout/layout1.jpeg"
                                            }
                                        />
                                    </div>
                                    <div className="w-full text-sm overflow-hidden whitespace-nowrap">
                                        title asd asdasdas as das sdasd as d
                                    </div>
                                    <div className="text-[11px]">
                                        Saved on 2025/08/02
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </SimpleBar>
            </div>
            <div className="relative text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 mt-4">
                <label className="inline-block text-[13px] absolute top-[-11px] left-2 bg-[#1f1f1f]">
                    Layout name
                </label>
                <input
                    type="text"
                    className=" w-full h-9 mt-1 bg-transparent text-sm ring-1 rounded-sm focus:outline-none focus:ring-transparent focus:ring-1 ring-transparent p-0.5 ps-2"
                    required
                />
            </div>
            <div className="flex justify-end mt-2">
                <button
                    href="#"
                    className="bg-[#2c508a] rounded-sm px-6 py-1 font-semibold text-sm "
                >
                    Save
                </button>
                <button
                    href="#"
                    className="bg-red-600 ms-2 rounded-sm px-6 py-1  font-semibold text-sm "
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ModalMyLayout;
