import { Link } from "@inertiajs/inertia-react";
import React from "react";

const LayoutSearchList = ({ list }) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {list.map((val, index) => {
                return (
                    <Link
                        className=" overflow-hidden h-fit rounded-sm group"
                        key={index}
                    >
                        <div className="bg-blue-400 border-collapse border-white border-2 group-hover:border-[#2c508a] group-hover:border-2 group-hover:scale-[98%] transition-all delay-100 cursor-pointer">
                            <img
                                className="object-contain w-full  h-40"
                                src={`/images/preview_layout/${val.preview_image}`}
                            />
                        </div>
                        <div className="">
                            <div className="text-md w-full overflow-hidden whitespace-nowrap text-white">
                                {val.name}
                            </div>
                            <div className="text-[11px] text-white mb-1">
                                Create by Rama - {val.updated_date}
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default LayoutSearchList;
