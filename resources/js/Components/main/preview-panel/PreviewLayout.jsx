import React, { useRef } from "react";
// import { useListKeys } from "../../../Context/listKeys";
import { useSelector, useDispatch } from "react-redux";
import Keys from "../../global-components/Keys";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { toPng } from "html-to-image";
import LayoutKeys from "../../global-components/LayoutKeys";

const PreviewLayout = ({ layoutScreenhotRef }) => {
    // const listKeysContext = useListKeys();
    // const { listKeys, updateListKeys } = listKeysContext;

    const getDiv = useRef(null);

    const listKeys = JSON.parse(
        JSON.stringify(useSelector((state) => state.layout))
    );

    const toImage = () => {
        toPng(layoutScreenhotRef.current, {
            skipFonts: true,
            preferredFontFormat: "woff2",
            backgroundColor: "transparent",
        }).then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = "Preview_layout";
            link.href = dataUrl;
            link.click();
        });
    };

    return (
        <SimpleBar className="h-full z-10">
            <div className=" text-sm ps-1 pe-3 pt-3 w-full fixed bg-[#181818] z-[1]">
                <div className="ms-3 mt-2 text-zinc-100 font-bold hover:text-zinc-300 inline text-[12px] cursor-pointer">
                    PREVIEW LAYOUT
                </div>
                <div
                    onClick={toImage}
                    className="ms-4 mt-2 text-zinc-300 hover:text-white inline text-[12px] cursor-pointer"
                >
                    TAKE SCREENSHOT
                </div>
            </div>
            <div className="mt-2 case flex flex-shrink-0">
                <div ref={layoutScreenhotRef}>
                    <div className="h-full mt-12 mb-11">
                        <LayoutKeys
                            // layoutScreenhotRef={layoutScreenhotRef}
                            layout_data={listKeys.layout_data}
                            previewMode={true}
                        />
                    </div>
                </div>
            </div>
        </SimpleBar>
    );
};

export default PreviewLayout;
