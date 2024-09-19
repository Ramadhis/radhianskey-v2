import { Link } from "@inertiajs/inertia-react";
import React from "react";
import checkImageExists from "../helpers/checkImageExists";

const LayoutSearchList = ({ list }) => {
    return (
        <>
            {list.map((val, index) => {
                return (
                    <a
                        className=" overflow-hidden h-fit rounded-sm group"
                        key={index}
                        href={`/${val.user.name_slug}/${val.name_slug}`}
                    >
                        <div className="bg-blue-400 border-collapse border-white border-2 group-hover:border-[#2c508a] group-hover:border-2 group-hover:scale-[98%] transition-all delay-100 cursor-pointer">
                            <img
                                alt={"Image"}
                                className="object-contain w-full h-40"
                                src={`/images/preview_layout/${val.preview_image}`}
                                // src={
                                //     checkImageExists(
                                //         `/images/preview_layout/${val.preview_image}`
                                //     )
                                //         ? `/images/preview_layout/${val.preview_image}`
                                //         : "/images/profile_picture/default.png"
                                // }
                                onError={(e) => {
                                    return (e.target.src =
                                        "/images/preview_layout/no-image.png");
                                }}
                            />
                        </div>
                        <div className="">
                            <div className="text-md w-full overflow-hidden whitespace-nowrap text-white">
                                {val.name}
                            </div>
                            <div className="text-[11px] text-white mb-1">
                                Create by {val.user.name} - {val.updated_date}
                            </div>
                        </div>
                    </a>
                );
            })}
        </>
    );
};

export default LayoutSearchList;
