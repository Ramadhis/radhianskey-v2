import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
    updateSelectionMultipleList,
    updateSelectionSingleList,
} from "../../../../Store/Slices/main/selectionKeySlice";
import Keys from "../../../global-components/Keys";

const ItemColumn = ({ keysData, index }) => {
    const dispatch = useDispatch();

    const selectionKeyType = JSON.parse(
        JSON.stringify(useSelector((state) => state.selectionKey))
    );

    //jika key di klik masukan id yang di klik ke global state
    const onClickKey = (e, id) => {
        e.preventDefault();
        if (selectionKeyType.selectionType == "single") {
            dispatch(
                updateSelectionSingleList({
                    id: id,
                    selectedKeyDetail: keysData,
                })
            );
        } else {
            dispatch(updateSelectionMultipleList({ id: id }));
        }
    };

    return (
        <>
            <Draggable
                draggableId={keysData.id}
                key={keysData.id}
                index={index}
            >
                {(provided) => {
                    return (
                        <div
                            onClick={(e) => {
                                return onClickKey(e, keysData.id);
                            }}
                            className={`border-2 min-w-[10px] ${
                                selectionKeyType.selectedKey.includes(
                                    keysData.id
                                )
                                    ? `border-white`
                                    : `border-transparent hover:border-white`
                            }  rounded-md mx-[1px] flex flex-shrink-0`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <Keys keysData={keysData} />
                        </div>
                    );
                }}
            </Draggable>
        </>
    );
};

export default ItemColumn;
