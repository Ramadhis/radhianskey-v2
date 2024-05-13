import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import ContainerBody from "./ContainerBody";
import ItemColumn from "./ItemColumn";
import AddKeys from "./AddKeys";
const DndMain = () => {
    const [list, setList] = useState({
        keyDownBorder: " 1px solid blue ",
        keyDownBackground: "lightskyblue",
        fontSize: "13px",
        layoutData: [
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "1!",
                        keycapsSizeUnit: "2.25",
                        keycapsStyle: {
                            color1: "",
                            color2: "",
                        },
                    },
                    {
                        id: v4(),
                        width: "50",
                        text: "2@",
                    },
                ],
            },
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "Q",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "W",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "E",
                    },
                ],
            },
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "A",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "S",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "D",
                    },
                ],
            },
        ],
    });

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
            setList((prev) => {
                let arrKeys = [...prev.layoutData];
                //swap array in row object
                arrKeys.splice(source.index, 1);
                arrKeys.splice(
                    destination.index,
                    0,
                    prev.layoutData[source.index]
                );
                return { ...prev, layoutData: arrKeys };
                //End swap array in row object
            });
            // console.log(keys);
        } else if (
            source.droppableId != "all-columns" &&
            destination.droppableId != "all-columns"
        ) {
            //column sorting
            let layout = [...list.layoutData];

            let findIndexSource = layout.findIndex((val) => {
                return val.id === source.droppableId;
            });
            let findIndexDestination = layout.findIndex((val) => {
                return val.id === destination.droppableId;
            });

            //get dragged object
            let saveItem = {
                ...list.layoutData[findIndexSource].column[source.index],
            };

            layout[findIndexSource].column.splice(source.index, 1);
            layout[findIndexDestination].column.splice(
                destination.index,
                0,
                saveItem
            );
            setList((prev) => {
                return { ...prev, layoutData: layout };
            });
        } else {
            return;
        }
    };

    return (
        <>
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
                                {list.layoutData.map((row, index) => {
                                    return (
                                        <ContainerBody
                                            id={row.id}
                                            index={index}
                                            key={index}
                                        >
                                            <AddKeys />
                                            {row.column.map((col, index2) => {
                                                return (
                                                    <ItemColumn
                                                        id={col.id}
                                                        text={col.text}
                                                        index={index2}
                                                        key={index2}
                                                    ></ItemColumn>
                                                );
                                            })}
                                        </ContainerBody>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default DndMain;
