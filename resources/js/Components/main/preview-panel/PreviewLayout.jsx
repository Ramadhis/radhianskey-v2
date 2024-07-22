import React from "react";
// import { useListKeys } from "../../../Context/listKeys";
import { useSelector, useDispatch } from "react-redux";
import Keys from "../../global-components/Keys";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const PreviewLayout = () => {
    // const listKeysContext = useListKeys();
    // const { listKeys, updateListKeys } = listKeysContext;

    const listKeys = JSON.parse(
        JSON.stringify(useSelector((state) => state.layout))
    );

    return (
        <SimpleBar className="h-full z-10">
            {" "}
            <div className=" text-sm ps-1 pe-3 pt-3 pb-2 w-full fixed bg-[#181818] z-[5]">
                <div className="ms-4 mt-2 text-zinc-300 hover:text-white inline text-[13px]">
                    PREVIEW LAYOUT
                </div>
            </div>
            <div className="case flex flex-shrink-0">
                <div className="bg-[#e8c4b8] border-[#706662] border rounded-[4px] ms-4 me-11 mt-12 mb-11 p-2 whitespace-nowrap">
                    <div className=" bg-[#332b29] border border-[#706662] rounded-[9px] p-3 whitespace-nowrap">
                        {listKeys.layoutData.map((row, index) => {
                            return (
                                <div
                                    className="flex flex-shrink-0 whitespace-nowrap"
                                    key={index}
                                >
                                    {row.column.map((col, index2) => {
                                        return (
                                            <div key={index2}>
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
                <div className="w-10 text-[#181818]">End layout</div>
                {/* end layout */}
            </div>
        </SimpleBar>
    );
};

export default PreviewLayout;
