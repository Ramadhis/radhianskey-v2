import React from "react";
// import { useListKeys } from "../../../Context/listKeys";
import { useSelector, useDispatch } from "react-redux";

const PreviewLayout = () => {
    // const listKeysContext = useListKeys();
    // const { listKeys, updateListKeys } = listKeysContext;

    const listKeys = JSON.parse(
        JSON.stringify(useSelector((state) => state.layout))
    );

    return (
        <div
            className=" h-full text-[#678f9c] overflow-hidden hover:overflow-auto "
            style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#616161 #66000000",
            }}
        >
            {" "}
            <div className=" text-sm ps-1 pe-3 pt-3 pb-2 w-full fixed bg-[#181818] z-[5]">
                <div className="ms-4 mt-2 text-zinc-300 hover:text-white inline">
                    PREVIEW LAYOUT
                </div>
            </div>
            <div className="case flex flex-shrink-0">
                <div className="bg-[#e8c4b8] border rounded-[4px] ms-4 me-11 mt-12 mb-11 p-2">
                    <div className="bg-[#332b29] border border-[#706662] rounded-[9px] p-3 flex-shrink-0">
                        {listKeys.layoutData.map((row, index) => {
                            return (
                                <div
                                    className="flex mb-[3px] min-h-5"
                                    key={index}
                                >
                                    {row.column.map((col, index2) => {
                                        return (
                                            <div
                                                key={index2}
                                                className="w-[58px] h-[58px] ms-[3px] bg-stone-400 border border-r-stone-500 border-b-stone-500 border-l-stone-200 border-t-stone-200 text-black rounded-sm flex justify-center flex-shrink-0 relative z-0"
                                                //normal Width keycaps 68x68
                                                //untuk simulasi di kurang 10px = 58px
                                            >
                                                {/* //normal Width keycaps 53x53 */}
                                                <div className="w-[45px] h-[45px] mt-[3px] ps-[2px] border border-r-stone-500 border-b-stone-500 border-l-stone-200 border-t-stone-200 bg-stone-200 rounded-sm text-[15px]">
                                                    {col.text}
                                                </div>
                                                {col.keyConnect1 ? (
                                                    <>
                                                        <div
                                                            className={`w-[58px] h-[22px] z-[5] bg-stone-400 border border-y-0 border-l-stone-200 border-r-stone-500 absolute top-[-15px]`}
                                                        ></div>
                                                        <div
                                                            className={`w-[45px] h-[22px] z-[5] bg-stone-200 border border-y-0 border-r-stone-500 absolute top-[-15px]`}
                                                        ></div>
                                                    </>
                                                ) : (
                                                    false
                                                )}

                                                {col.keyConnect2 ? (
                                                    <>
                                                        <>
                                                            <div
                                                                className={`w-[22px] h-[58px] mt-[-1px] z-[5] bg-stone-400 border border-x-0 border-t-stone-200 border-b-stone-500 absolute left-[-15px]`}
                                                            ></div>
                                                            <div
                                                                className={`w-[22px] h-[45px] mt-[3px] z-[5] bg-stone-200 border border-x-0 border-b-stone-500 absolute left-[-15px]`}
                                                            ></div>
                                                        </>
                                                    </>
                                                ) : (
                                                    false
                                                )}
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
        </div>
    );
};

export default PreviewLayout;
