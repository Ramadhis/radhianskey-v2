import React, { useState, useRef } from "react";
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Items from "./Items";

const Row = (props) => {
    const { lists } = props;
    return (
        <div>
            <SortableContext
                items={lists}
                strategy={verticalListSortingStrategy}
            >
                {lists.map((list, index) => {
                    return (
                        // <div
                        //     key={list.id}
                        //     className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"
                        // >
                        //     {list.text}
                        // </div>
                        <Items id={list.id} text={list.text} key={list.id} />
                    );
                })}
            </SortableContext>
            {/* <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm">
                {props.text}
            </div> */}
        </div>
    );
};
export default Row;
