import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
    updateSelectionMultipleList,
    updateSelectionSingleList,
} from "../../../../Store/Slices/main/selectionKeySlice";

const ItemColumn = ({ id, index, text }) => {
    const dispatch = useDispatch();

    const selectionKeyType = JSON.parse(
        JSON.stringify(useSelector((state) => state.selectionKey))
    );

    const onClickKey = (e, id) => {
        e.preventDefault();
        if (selectionKeyType.selectionType == "single") {
            dispatch(updateSelectionSingleList({ id: id }));
        } else {
            dispatch(updateSelectionMultipleList({ id: id }));
        }
    };

    return (
        <>
            <Draggable draggableId={id} key={id} index={index}>
                {(provided) => {
                    return (
                        <div
                            onClick={(e) => {
                                return onClickKey(e, id);
                            }}
                            className={`border-2 min-w-[60px] ${
                                selectionKeyType.selectedKey.includes(id)
                                    ? `border-white`
                                    : `border-transparent hover:border-white`
                            }  rounded-md mx-[1px]`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <div
                                className="w-[58px] h-[58px] m-[2px] bg-stone-400 border border-r-stone-500 border-b-stone-500 border-l-stone-200 border-t-stone-200 text-black rounded-sm flex justify-center relative"
                                //normal Width keycaps 68x68
                                //untuk simulasi di kurang 10px = 58px
                            >
                                {/* //normal Width keycaps 53x53 */}
                                <div className="w-[45px] h-[45px] mt-[3px] ps-[2px] border border-r-stone-500 border-b-stone-500 border-l-stone-200 border-t-stone-200 bg-stone-200 rounded-sm text-[15px] absolute">
                                    {text}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Draggable>
        </>
    );
};

export default ItemColumn;
