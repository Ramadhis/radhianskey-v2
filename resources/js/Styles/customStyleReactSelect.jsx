export const customStyleSelect = {
    control: (styles) => ({
        ...styles,
        border: "1px solid #2c508a",
        color: "white",
        backgroundColor: "#1f1f1f",
        fontSize: "0.875rem",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        // const color = chroma(data.color);
        return {
            ...styles,
            background: isDisabled
                ? "red"
                : isSelected || isFocused
                ? "#2c508a"
                : "#1f1f1f",
            backgroundColor: "#1f1f1f",
            color: "white",
            // borderLeft: "1px solid white",
            // borderRight: "1px solid white",
            cursor: isDisabled ? "not-allowed" : "default",
            fontSize: "0.875rem",
            textAlign: "left",
        };
    },
    valueContainer: (provided, state) => ({
        ...provided,
        height: "30px",
    }),
    input: (styles) => ({
        ...styles,
        paddingTop: "1px",
        color: "#d4d4d8",
        fontSize: "0.875rem",
        textAlign: "left",
    }),
    placeHolder: (styles) => ({
        ...styles,
        color: "#d4d4d8",
        backgroundColor: "#1f1f1f",
        textAlign: "left",
    }),
    singleValue: (styles, { data }) => ({
        ...styles,
        color: "#d4d4d8",
        backgroundColor: "#1f1f1f",
    }),
    menuList: (base) => ({
        ...base,
        background: "#1f1f1f",
        border: "solid 1px white",
        // height: "200px",

        // "::-webkit-scrollbar": {
        //     width: "9px",
        // },
        // "::-webkit-scrollbar-track": {
        //     background: "red",
        // },
        // "::-webkit-scrollbar-thumb": {
        //     background: "#888",
        // },
        // "::-webkit-scrollbar-thumb:hover": {
        //     background: "#555",
        // },
    }),
};
