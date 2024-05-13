import React from "react";

const PreviewLayout = () => {
    return (
        <div
            className=" h-full text-[#678f9c] overflow-hidden hover:overflow-auto "
            style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#616161 #66000000",
            }}
        >
            {" "}
            <div className=" text-sm ps-1 pe-3 pt-3 pb-2 w-full fixed bg-[#181818]">
                <div className="ms-4 mt-2 text-zinc-300 hover:text-white inline">
                    PREVIEW LAYOUT
                </div>
            </div>
            <div className="case">
                <div className="bg-[#e8c4b8] border rounded-[4px] ms-4 me-11 mt-12 mb-11 p-2">
                    <div className="h-48 bg-[#332b29] border border-[#706662] rounded-[9px]"></div>
                </div>
            </div>
        </div>
    );
};

export default PreviewLayout;
