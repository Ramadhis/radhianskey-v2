import React, { useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Column = ({ id, width, text }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id,
            data: {
                type: "item",
            },
        });

    const style = {
        transition,
        // transform: CSS.Transform.toString(transform),
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={{ ...style, width: `${width}px`, height: "45px" }}
            className={`ms-2 bg-stone-200 border text-black rounded-sm`}
        >
            {text}
        </div>
    );
};

export default Column;
