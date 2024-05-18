import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ItemColumn = ({ id, index, text }) => {
    return (
        <>
            <Draggable draggableId={id} key={id} index={index}>
                {(provided) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="w-[58px] h-[58px] ms-2 bg-stone-400 border border-r-stone-500 border-b-stone-500 border-l-stone-200 border-t-stone-200 text-black rounded-sm flex justify-center relative"
                            //normal Width keycaps 68x68
                            //untuk simulasi di kurang 10px = 58px
                        >
                            {/* //normal Width keycaps 53x53 */}
                            <div className="w-[45px] h-[45px] mt-[3px] ps-[2px] border border-r-stone-500 border-b-stone-500 border-l-stone-200 border-t-stone-200 bg-stone-200 rounded-sm text-[15px] absolute">
                                {text}
                            </div>
                        </div>
                    );
                }}
            </Draggable>
        </>
    );
};

export default ItemColumn;
