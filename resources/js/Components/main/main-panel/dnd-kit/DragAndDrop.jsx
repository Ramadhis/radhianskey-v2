import React, { useState, useRef } from "react";
import {
    SortableContext,
    horizontalListSortingStrategy,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ItemKey from "./ItemKey";
import { useDroppable } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    closestCorners,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { DragOverlay } from "@dnd-kit/core";
import Container from "./Container";
import { v4 } from "uuid";

const DragAndDrop = (props) => {
    // const [activeId, setActiveId] = useState();

    const [list2, setList2] = useState([
        {
            id: "container-1",
            column: [
                {
                    id: 1,
                    width: "150",
                    text: "tes",
                },
                {
                    id: 2,
                    width: "50",
                    text: "coba 2",
                },
            ],
        },
        {
            id: "container-2",
            column: [
                {
                    id: 3,
                    width: "150",
                    text: "asd",
                },
                {
                    id: 4,
                    width: "100",
                    text: "coba 2",
                },
                {
                    id: v4(),
                    width: "45",
                    text: "coba 3",
                },
                {
                    id: v4(),
                    width: "45",
                    text: "coba 3",
                },
                {
                    id: v4(),
                    width: "45",
                    text: "coba 3",
                },
            ],
        },
    ]);

    // const getListIndexPosition = (id) => {
    //     return list.findIndex((list2) => {
    //         return list2.id === id;
    //     });
    // };

    const findRow = (id) => {
        let rowId = 0;
        list2.forEach((ls) => {
            return ls.column.find((lsCol) => {
                if (lsCol.id == id) {
                    return (rowId = ls.id);
                }
            });
        });
        return rowId;
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        // if (active.id === over.id) {
        //     return;
        // }

        // setList((prev) => {
        //     const originalPosition = getListIndexPosition(active.id);
        //     const newPosition = getListIndexPosition(over.id);
        //     console.log(`A:${originalPosition} OVER:${newPosition}`);
        //     return arrayMove(prev, originalPosition, newPosition);
        // });
    };

    const defaultAnnouncements = {
        onDragStart(id) {
            console.log(`Picked up draggable item ${id}.`);
        },
        onDragOver(id, overId) {
            if (overId) {
                console.log(
                    `Draggable item ${id} was moved over droppable area ${overId}.`
                );
                return;
            }

            console.log(
                `Draggable item ${id} is no longer over a droppable area.`
            );
        },
        onDragEnd(id, overId) {
            if (overId) {
                console.log(
                    `Draggable item ${id} was dropped over droppable area ${overId}`
                );
                return;
            }

            console.log(`Draggable item ${id} was dropped.`);
        },
        onDragCancel(id) {
            console.log(
                `Dragging was cancelled. Draggable item ${id} was dropped.`
            );
        },
    };

    const handleDragOver = (event) => {
        const { active, over, draggingRect } = event;
        const { id, data } = active; // id awal / id yg sedang di drag
        const { id: overId } = over; //id yang dituju

        console.log(`from ${id} to ${overId}`);

        // let getRowId = findRow(id);
        // let getRowIdOver = findRow(overId);

        // console.log(`A from ${id} to ${overId}`);
        // console.log(`B from ${getRowId} to ${getRowIdOver}`);

        // let rowIndex = list2.findIndex((p) => p.id == getRowId);
        // let rowIndex2 = list2[rowIndex].column.findIndex((col) => {
        //     return col.id == id;
        // });

        // let rowIndexOver = list2.findIndex((p) => p.id == getRowIdOver);
        // let rowIndexOver2 = list2[rowIndexOver].column.findIndex((col) => {
        //     return col.id == overId;
        // });

        // let getPrevData = list2[rowIndex].column[rowIndex2];
        // let getPrevDataOver = list2[rowIndexOver];

        // setList2((prev) => {
        //     let arrKeys = [...prev];

        //     arrKeys[rowIndex].column.splice(rowIndex2, 1);
        //     arrKeys[rowIndexOver].column.splice(rowIndexOver2, 0, getPrevData);
        //     return [...arrKeys];
        // });
    };

    const handleDragMove = () => {};

    // useEffect(() => {
    //     console.log(list);
    // }, [list]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        // useSensor(TouchSensor),

        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd2dArray = () => {};

    return (
        <>
            <DndContext
                sensors={sensors}
                // announcements={defaultAnnouncements}
                onDragEnd={handleDragEnd}
                onDragMove={handleDragMove}
                onDragOver={handleDragOver}
                collisionDetection={closestCorners}
            >
                <SortableContext
                    items={list2.map((i) => i.id)}
                    // strategy={verticalListSortingStrategy}
                >
                    {list2.map((list, index) => {
                        return (
                            <Container id={list.id} key={list.id}>
                                <SortableContext
                                    // id={list2.id}
                                    items={list.column.map((i) => i.id)}
                                    // key={list2.id}
                                    // strategy={horizontalListSortingStrategy}
                                >
                                    {list.column.map((listData) => {
                                        return (
                                            <ItemKey
                                                id={listData.id}
                                                text={listData.text}
                                                width={listData.width}
                                                key={listData.id}
                                            />
                                        );
                                    })}
                                    <div className="w-28 h-14 ms-2 bg-gray-200 border opacity-5 text-black rounded-sm">
                                        {" "}
                                        +{" "}
                                    </div>
                                </SortableContext>
                            </Container>
                        );
                    })}
                </SortableContext>
            </DndContext>
        </>
    );
};
export default DragAndDrop;
