import React, { useState, useEffect } from "react";
import DndMain from "./beau-dnd/DndMain";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const MainLayout = () => {
    const selectionKey = useSelector((state) => state.selectionKey);

    return (
        <>
            {/* <SimpleBar className="h-full pb-2 fixed z-50"> */}
            <div
                className="overflow-auto h-full relative text-[#678f9c] pb-11"
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#616161 #66000000",
                }}
            >
                <div className="mt-3 ps-1">
                    {/* <DragAndDrop /> */}
                    <DndMain></DndMain>
                </div>
            </div>
            {/* </SimpleBar> */}
        </>
    );
};

export default MainLayout;
