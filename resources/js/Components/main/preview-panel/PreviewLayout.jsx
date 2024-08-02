import React, { useRef } from "react";
// import { useListKeys } from "../../../Context/listKeys";
import { useSelector, useDispatch } from "react-redux";
import Keys from "../../global-components/Keys";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { toPng } from "html-to-image";

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
            {" "}
            <div className=" text-sm ps-1 pe-3 pt-3 pb-2 w-full fixed bg-[#181818] z-[1]">
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
            <div className="case flex flex-shrink-0 mt-3">
                <div ref={layoutScreenhotRef}>
                    <div
                        className="rounded-[4px] ms-4 me-4 mt-12 mb-11 p-2 whitespace-nowrap"
                        style={{
                            background:
                                listKeys.caseData.caseTheme.style[
                                    "outer_background"
                                ],
                            border: `1px solid ${listKeys.caseData.caseTheme.style["outer_border"]}`,
                        }}
                    >
                        <div
                            className="rounded-[9px] p-3 whitespace-nowrap"
                            style={{
                                background:
                                    listKeys.caseData.caseTheme.style[
                                        "inner_background"
                                    ],
                                border: `1px solid ${listKeys.caseData.caseTheme.style["inner_border"]}`,
                            }}
                        >
                            {listKeys.layoutData.map((row, index) => {
                                return (
                                    <div
                                        className="flex flex-shrink-0 whitespace-nowrap min-h-[57px]"
                                        key={index}
                                    >
                                        {row.column.map((col, index2) => {
                                            return (
                                                <div
                                                    key={index2}
                                                    className="flex flex-shrink-0"
                                                >
                                                    <Keys
                                                        keysData={col}
                                                        previewMode={true}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-10 text-[#181818]">End layout</div>
                {/* end layout */}
            </div>
        </SimpleBar>
    );
};

export default PreviewLayout;
