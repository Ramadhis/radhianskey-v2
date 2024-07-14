import React, { useState, useEffect } from "react";
import Select from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import ModalCreateNewTheme from "./ModalCreateNewTheme";

const KeyThemeSelect = () => {
    const [ModalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
        useState(true);
    const [selectedTheme, setSelectedTheme] = useState();

    const CloseModalCreateNewTheme = () => {
        setModalCreateNewThemeOpen(false);
    };

    const options = [
        { value: "newTheme", label: "Create new theme" },
        {
            value: "dark-dragon",
            label: (
                <div className="flex justify-between">
                    <div className="text-nowrap">dark dragon</div>
                    <div>
                        <button
                            onClick={() => {
                                return console.log("edit");
                            }}
                            className="me-2 group"
                        >
                            <i className="bi bi-pencil-square group-hover:text-green-500"></i>
                        </button>
                        <button
                            onClick={() => {
                                return console.log("delete");
                            }}
                            className="group"
                        >
                            <i className="bi bi-trash group-hover:text-red-600"></i>
                        </button>
                    </div>
                </div>
            ),
        },
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

    useEffect(() => {
        console.log(selectedTheme);
    }, [selectedTheme]);

    const onChangeSelectTheme = (val) => {
        if (val.value == "newTheme") {
            return setModalCreateNewThemeOpen(true);
        } else {
            return setSelectedTheme(val);
        }
    };

    return (
        <>
            <Select
                options={options}
                styles={customStyle}
                value={selectedTheme}
                onChange={onChangeSelectTheme}
            />

            <ModalLayout
                open={ModalCreateNewThemeOpen}
                close={CloseModalCreateNewTheme}
            >
                <ModalCreateNewTheme />
            </ModalLayout>
        </>
    );
};

export default KeyThemeSelect;
