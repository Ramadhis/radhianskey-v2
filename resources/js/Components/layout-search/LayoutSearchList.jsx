import React from "react";

const LayoutSearchList = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {[...Array(10)].map((el, index) => {
                return (
                    <div className=" overflow-hidden h-fit rounded-sm">
                        <div className="bg-blue-400 border group border-white hover:border-[#2c508a] hover:border-2 hover:scale-[98%] transition-all delay-100 cursor-pointer">
                            <img
                                className="object-contain w-full h-34"
                                src={`/images/preview_layout/66d13469430f0.png`}
                            />
                        </div>
                        <div className="">
                            <div className="text-md w-full overflow-hidden whitespace-nowrap text-white">
                                Ini nama aja
                            </div>
                            <div className="text-[11px] text-white mb-1">
                                Create by Rama - 24-12-2024
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LayoutSearchList;
