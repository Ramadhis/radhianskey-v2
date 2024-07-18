import React, { useState, useEffect } from "react";
import Select from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import ModalCreateNewTheme from "./ModalCreateNewTheme";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";

const KeyThemeSelect = ({ selectedTheme, onChangeFormData, selectedKey }) => {
    const [ModalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
        useState(false);

    const CloseModalCreateNewTheme = () => {
        setModalCreateNewThemeOpen(false);
    };

    const options = [
        {
            value: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "top-left",
                    fontColor: "#000",
                    fontWeight: "normal",
                },
                {
                    //layer2 = index 1
                    background: "#E7E5E4",
                    top_border: "#E7E5E4",
                    bottom_border: "#81716C",
                    left_border: "#E7E5E4",
                    right_border: "#81716C",
                },
                {
                    //layer3 = index 2
                    background: "#A8A29E",
                    top_border: "#E7E5E4",
                    bottom_border: "#78716C",
                    left_border: "#E7E5E4",
                    right_border: "#78716C",
                },
            ],
            label: "Create new theme",
        },
        // {
        //     value: "dark-dragon",
        //     label: (
        //         <div className="flex justify-between">
        //             <div className="text-nowrap">dark dragon</div>
        //             <div>
        //                 <button
        //                     onClick={() => {
        //                         return console.log("edit");
        //                     }}
        //                     className="me-2 group"
        //                 >
        //                     <i className="bi bi-pencil-square group-hover:text-green-500"></i>
        //                 </button>
        //                 <button
        //                     onClick={() => {
        //                         return console.log("delete");
        //                     }}
        //                     className="group"
        //                 >
        //                     <i className="bi bi-trash group-hover:text-red-600"></i>
        //                 </button>
        //             </div>
        //         </div>
        //     ),
        // },
        {
            label: "Dark dragon",
            value: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "top-left",
                    fontColor: "#000",
                    fontWeight: "normal",
                },
                {
                    //layer2 = index 1
                    background: "#E7E5E4",
                    top_border: "#E7E5E4",
                    bottom_border: "#81716C",
                    left_border: "#E7E5E4",
                    right_border: "#81716C",
                },
                {
                    //layer3 = index 2
                    background: "#A8A29E",
                    top_border: "#E7E5E4",
                    bottom_border: "#78716C",
                    left_border: "#E7E5E4",
                    right_border: "#78716C",
                },
            ],
        },
        {
            label: "Matcha",
            value: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "top-left",
                    fontColor: "#000",
                    fontWeight: "normal",
                },
                {
                    //layer2 = index 1
                    background: "#E7E5E4",
                    top_border: "#E7E5E4",
                    bottom_border: "#81716C",
                    left_border: "#E7E5E4",
                    right_border: "#81716C",
                },
                {
                    //layer3 = index 2
                    background: "#A8A29E",
                    top_border: "#E7E5E4",
                    bottom_border: "#78716C",
                    left_border: "#E7E5E4",
                    right_border: "#78716C",
                },
            ],
        },
        {
            label: "Black",
            value: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "end-right",
                    fontColor: "#000",
                    fontWeight: "normal",
                },
                {
                    //layer2 = index 1
                    background: "#303030",
                    top_border: "#E7E5E4",
                    bottom_border: "#81716C",
                    left_border: "#E7E5E4",
                    right_border: "#81716C",
                },
                {
                    //layer3 = index 2
                    background: "#434343",
                    top_border: "#E7E5E4",
                    bottom_border: "#78716C",
                    left_border: "#E7E5E4",
                    right_border: "#78716C",
                },
            ],
        },
        {
            label: "White",
            value: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "top-left",
                    fontColor: "#000",
                    fontWeight: "normal",
                },
                {
                    //layer2 = index 1
                    background: "#E7E5E4",
                    top_border: "#E7E5E4",
                    bottom_border: "#81716C",
                    left_border: "#E7E5E4",
                    right_border: "#81716C",
                },
                {
                    //layer3 = index 2
                    background: "#A8A29E",
                    top_border: "#E7E5E4",
                    bottom_border: "#78716C",
                    left_border: "#E7E5E4",
                    right_border: "#78716C",
                },
            ],
        },
    ];

    useEffect(() => {
        console.log(selectedTheme);
    }, [selectedTheme]);

    const onChangeSelectTheme = (val) => {
        if (val.label == "Create new theme") {
            return setModalCreateNewThemeOpen(true);
        } else {
            return onChangeFormData("keycapsTheme", {
                name: val.label,
                style: val.value,
            });
        }
    };

    return (
        <>
            <Select
                options={options}
                styles={customStyleSelect}
                value={{
                    value: selectedTheme.style,
                    label: selectedTheme.name,
                }}
                onChange={onChangeSelectTheme}
                isDisabled={selectedKey.length < 1 ? true : false}
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
