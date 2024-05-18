import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

export const ListKeysContext = createContext();

export const useListKeys = () => {
    return useContext(ListKeysContext);
};

export const ListKeysProvider = ({ children }) => {
    const [listKeys, setListKeys] = useState({
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
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "Z",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "X",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "C",
                    },
                    {
                        id: v4(),
                        width: "150",
                        text: "Z",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "X",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "C",
                    },
                    {
                        id: v4(),
                        width: "150",
                        text: "Z",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "X",
                    },
                ],
            },
        ],
    });

    const updateListKeys = (data) => {
        return setListKeys((prev) => {
            return { ...prev, ...data };
        });
    };

    return (
        <ListKeysContext.Provider value={{ listKeys, updateListKeys }}>
            {children}
        </ListKeysContext.Provider>
    );
};

export default ListKeysProvider;
