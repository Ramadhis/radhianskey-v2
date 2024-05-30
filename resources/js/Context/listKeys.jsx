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
                        text: "Num",
                        keycapsSizeUnit: "2.25",
                        keycapsStyle: {
                            color1: "",
                            color2: "",
                        },
                    },
                    {
                        id: v4(),
                        width: "50",
                        text: "/",
                    },
                    {
                        id: v4(),
                        width: "50",
                        text: "*",
                    },
                    {
                        id: v4(),
                        width: "50",
                        text: "-",
                    },
                ],
            },
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "7",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "8",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "9",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "+",
                    },
                ],
            },
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "4",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "5",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "6",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "+",
                        keyConnect1: true,
                    },
                ],
            },
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "1",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "2",
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: "3",
                    },
                    {
                        id: v4(),
                        width: "150",
                        text: "ent",
                    },
                ],
            },
            {
                id: v4(),
                column: [
                    {
                        id: v4(),
                        width: "150",
                        text: "0",
                    },
                    {
                        id: v4(),
                        width: "100",
                        text: "0",
                        keyConnect1: false,
                        keyConnect2: true,
                    },
                    {
                        id: v4(),
                        width: "45",
                        text: ". Del",
                    },
                    {
                        id: v4(),
                        width: "150",
                        text: "ent",
                        keyConnect1: true,
                        keyConnect2: false,
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
