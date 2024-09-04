import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import DragAndDrop from "./dnd-kit/DragAndDrop";
import DndMain from "./beau-dnd/DndMain";
import AddRowBtn from "./partial-components/AddRowBtn";
import SaveBtn from "./partial-components/SaveBtn";
import SelectType from "./partial-components/SelectType";
import DeleteKeysBtn from "./partial-components/DeleteKeysBtn";
import { useSelector } from "react-redux";
import { toPng } from "html-to-image";
import NewLayoutBtn from "./partial-components/NewLayoutBtn";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const MainLayout = ({ layoutScreenhotRef }) => {
    const selectionKey = useSelector((state) => state.selectionKey);

    return (
        <>
            {/* <div
                className="overflow-auto h-full relative p-2 text-[#678f9c] pb-11"
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#616161 #66000000",
                }}
            > */}
            <SimpleBar className="h-full w-full">
                <div className="ps-1 pt-2 pb-1 pe-2 w-full z-[1] bg-[#1f1f1f] sticky top-0">
                    <div className="flex justify-between">
                        <div>
                            <AddRowBtn />

                            <SaveBtn
                                saveType={"save"}
                                layoutScreenhotRef={layoutScreenhotRef}
                            />
                            <SaveBtn
                                saveType={"save-as"}
                                layoutScreenhotRef={layoutScreenhotRef}
                            />
                            <DeleteKeysBtn />
                        </div>
                        {/* <a
                    href="#"
                    className="bg-[#2c508a] ms-2 p-1 rounded-sm px-4 h-4 text-sm text-white font-medium "
                >
                    <i className="bi bi-arrow-left-right"></i> Reverse
                    option position
                </a> */}
                        <div>
                            <NewLayoutBtn />
                        </div>
                    </div>
                    <hr className="mt-2 mb-1"></hr>
                    <SelectType />
                </div>
                <div className="mt-3 ps-1 h-full overflow-auto">
                    {/* <DragAndDrop /> */}
                    <DndMain></DndMain>
                </div>
            </SimpleBar>
            {/* </div> */}
        </>
    );
};

export default MainLayout;
