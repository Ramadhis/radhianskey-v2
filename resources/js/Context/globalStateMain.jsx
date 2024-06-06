import React, { useContext, createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

const globalStateMain = ({ children }) => {
    const [mainState, setMainState] = useState({
        typeSelect: {
            type: "single",
            selectedItem: null,
        },
    });

    const updateMainState = (newData) => {
        return setMainState((prev) => {
            return { ...prev, newData };
        });
    };

    return (
        <GlobalStateContext.Provider value={{ mainState, updateMainState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export default globalStateMain;
