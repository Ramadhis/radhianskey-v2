import React, { useState } from "react";
import CaseForm from "./partial-components/CaseForm";
import KeysForm from "./partial-components/KeysForm";
import LayoutDescForm from "./partial-components/LayoutDescForm";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import MenuLayout from "./partial-components/MenuLayout";
import PerfectScrollbar from "react-perfect-scrollbar";
// import "react-perfect-scrollbar/dist/css/styles.css";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const SideMenu = () => {
    const [menuList, setMenuList] = useState([
        {
            id: v4(),
            title: "Layout Explanation",
            layout: <LayoutDescForm />,
        },
        {
            id: v4(),
            title: "Case Settings",
            layout: <CaseForm />,
        },
        {
            id: v4(),
            title: "Keys Settings",
            layout: <KeysForm />,
        },
    ]);

    const handleDragEnd = (e) => {
        //destination = dropped item
        let destination = e.destination;
        //source = dragged item
        let source = e.source;

        // drag drop validation
        if (!destination) {
            // console.log("not dropped in droppable");
            return;
        }

        if (
            destination.index === source.index &&
            destination.droppableId == source.droppableId
        ) {
            // console.log("drop in same place");
            return;
        }

        // row sorting
        if (
            source.droppableId === "all-columns" &&
            destination.droppableId === "all-columns"
        ) {
            //sort for row

            let arrKeys = [...menuList];
            //swap array in row object
            arrKeys.splice(source.index, 1);
            arrKeys.splice(destination.index, 0, menuList[source.index]);
            return setMenuList((prev) => {
                return [...arrKeys];
            });
            //End swap array in row object
        } else {
            return;
        }
    };

    return (
        // <PerfectScrollbar
        //     style={{
        //         scrollbarWidth: "auto",
        //         scrollbarColor: "#616161 #66000000",
        //         overflow: "overlay",
        //     }}
        // >
        // <div
        //     className="w-full h-full overflow-hidden hover:overflow-auto"
        //     style={{
        //         scrollbarWidth: "thin",
        //         scrollbarColor: "#616161 #66000000",
        //     }}
        // >
        // <div
        //     className="h-full p-1"
        //     style={{
        //         scrollbarWidth: "thin",
        //         scrollbarColor: "#616161 #66000000",
        //     }}
        // >
        <SimpleBar className="h-full z-[15]">
            <div className="p-1">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable
                        droppableId="all-columns"
                        direction="vertical"
                        type="column"
                    >
                        {(provided, snapshot) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {menuList.map((val, index) => {
                                        return (
                                            <Draggable
                                                draggableId={val.id}
                                                index={index}
                                                key={val.id}
                                            >
                                                {(provided) => {
                                                    return (
                                                        <div
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                            className="my-2"
                                                        >
                                                            <MenuLayout
                                                                headerTitle={
                                                                    val.title
                                                                }
                                                                dragHandle={{
                                                                    ...provided.dragHandleProps,
                                                                }}
                                                            >
                                                                {val.layout}
                                                            </MenuLayout>
                                                        </div>
                                                    );
                                                }}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            );
                        }}
                    </Droppable>
                </DragDropContext>
            </div>
        </SimpleBar>
        // </div>
        // </div>
        // </PerfectScrollbar>
    );
};

export default SideMenu;
