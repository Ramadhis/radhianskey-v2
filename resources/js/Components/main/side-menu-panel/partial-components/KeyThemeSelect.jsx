import React from "react";
import Select from "react-select";

const KeyThemeSelect = () => {
    const options = [
        { value: "new", label: "Create new theme" },
        { value: "matcha", label: "Matcha" },
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
    ];

    const customStyle = {
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
                borderLeft: "1px solid white",
                borderRight: "1px solid white",
                cursor: isDisabled ? "not-allowed" : "default",
                fontSize: "0.875rem",
            };
        },
        input: (styles) => ({
            ...styles,
            paddingTop: "1px",
            color: "#d4d4d8",
            fontSize: "0.875rem",
        }),
        placeHolder: (styles) => ({
            ...styles,
            color: "#d4d4d8",
            backgroundColor: "#1f1f1f",
        }),
        singleValue: (styles, { data }) => ({
            ...styles,
            color: "#d4d4d8",
            backgroundColor: "#1f1f1f",
        }),
    };

    return <Select options={options} styles={customStyle} />;
};

export default KeyThemeSelect;
