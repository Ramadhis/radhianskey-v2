import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ContainerBody = ({ id, index, children }) => {
    return (
        <>
            <Draggable draggableId={id} index={index} key={id}>
                {(provided) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className=" m-1 flex"
                        >
                            <Droppable droppableId={id} direction="horizontal">
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            style={{
                                                minWidth: "1000px",
                                                minHeight: "70px",
                                            }}
                                            className=" p-2 bg-gray-700 border group hover:border-[#0d6efd] rounded-sm flex flex-shrink-0 flex-grow"
                                        >
                                            {children}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </div>
                    );
                }}
            </Draggable>
        </>
    );
};

export default ContainerBody;
