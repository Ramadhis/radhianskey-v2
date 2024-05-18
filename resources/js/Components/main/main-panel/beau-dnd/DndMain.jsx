import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import ContainerBody from "./ContainerBody";
import ItemColumn from "./ItemColumn";
import AddKeys from "./AddKeys";
import { useListKeys } from "../../../../Context/listKeys";

const DndMain = () => {
    const listKeysContext = useListKeys();
    const { listKeys, updateListKeys } = listKeysContext;

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

            let arrKeys = [...listKeys.layoutData];
            //swap array in row object
            arrKeys.splice(source.index, 1);
            arrKeys.splice(
                destination.index,
                0,
                listKeys.layoutData[source.index]
            );
            updateListKeys({ layoutData: arrKeys });
            //End swap array in row object

            // console.log(keys);
        } else if (
            source.droppableId != "all-columns" &&
            destination.droppableId != "all-columns"
        ) {
            //column sorting
            let layout = [...listKeys.layoutData];

            let findIndexSource = layout.findIndex((val) => {
                return val.id === source.droppableId;
            });
            let findIndexDestination = layout.findIndex((val) => {
                return val.id === destination.droppableId;
            });

            //get dragged object
            let saveItem = {
                ...listKeys.layoutData[findIndexSource].column[source.index],
            };

            layout[findIndexSource].column.splice(source.index, 1);
            layout[findIndexDestination].column.splice(
                destination.index,
                0,
                saveItem
            );
            // setList((listKeys) => {
            //     return { ...listKeys, layoutData: layout };
            // });
            updateListKeys({ layoutData: layout });
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
                                {listKeys.layoutData.map((row, index) => {
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
