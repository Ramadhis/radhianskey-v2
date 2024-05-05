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
                {/* <div className="ms-4 mt-1 text-zinc-300 hover:text-white inline">PREVIEW LAYOUT</div> */}

                {/* <hr /> */}
            </div>
            <div className="w-screen h-48 overflow-hidden bg-gray-700 border rounded-sm ms-4 me-11 mt-12 mb-11"></div>
        </div>
    );
};

export default PreviewLayout;
