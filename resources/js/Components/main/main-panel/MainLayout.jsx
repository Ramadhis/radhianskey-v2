import React, { useState, useEffect } from "react";
import { v4 } from "uuid";
import DragAndDrop from "./dnd-kit/DragAndDrop";
import DndMain from "./beau-dnd/DndMain";
import AddRowBtn from "./partial-components/AddRowBtn";
import SaveBtn from "./partial-components/SaveBtn";
import { useListKeys } from "../../../Context/listKeys";
import SelectType from "./partial-components/SelectType";
import DeleteKeysBtn from "./partial-components/DeleteKeysBtn";
import { useSelector } from "react-redux";

const MainLayout = () => {
    const listKeysContext = useListKeys();
    const { listKeys, updateListKeys } = listKeysContext;

    const selectionKey = useSelector((state) => state.selectionKey);

    useEffect(() => {
        console.log(selectionKey.selectedKey);
    }, [selectionKey.selectedKey]);

    return (
        <div
            className="overflow-auto h-full p-2 text-[#678f9c] pb-11"
            style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#616161 #66000000",
            }}
        >
            <div className="mt-1 divide-y divide-gradient-to-r from-indigo-500">
                <div>
                    <AddRowBtn />
                    <SaveBtn />
                    <a
                        href="#"
                        className="bg-[#2c508a] ms-2 p-1 rounded-sm px-4 h-4 text-sm text-white font-medium "
                    >
                        <i className="bi bi-arrow-left-right"></i> Reverse
                        option position
                    </a>
                    <DeleteKeysBtn />
                </div>
                <div className="mt-2"></div>
            </div>
            <div className="text-sm mt-1 text-zinc-300 pb-1">
                {/* Right click to delete items/keys */}
                <SelectType />
            </div>
            <div>
                {/* <DragAndDrop /> */}
                <DndMain></DndMain>
            </div>
        </div>
    );
};

export default MainLayout;
