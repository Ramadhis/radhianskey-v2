import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                                alt={""}
                                className="object-contain w-full h-40"
                                src={`/images/preview_layout/${val.preview_image}`}
                            />
                            {/* <LazyLoadImage
                                alt={``}
                                height={50}
                                width={50}
                                effect="blur"
                                wrapperProps={{
                                    // If you need to, you can tweak the effect transition using the wrapper style.
                                    style: { transitionDelay: "1s" },
                                }}
                                src={`/images/preview_layout/${val.preview_image}`} // use normal <img> attributes as props
                            /> */}
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
