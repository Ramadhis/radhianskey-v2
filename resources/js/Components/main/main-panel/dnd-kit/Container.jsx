import React, { useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Column = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id,
            data: {
                type: "container",
            },
        });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="mt-2 p-4 bg-gray-700 border rounded-sm flex flex-row"
        >
            {children}
        </div>
    );
};

export default Column;
