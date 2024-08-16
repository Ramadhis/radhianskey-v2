import React, { useState, useEffect } from "react";
import Select from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import ModalCreateNewTheme from "./ModalCreateNewTheme";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";
import { useSelector, useDispatch } from "react-redux";

const KeyThemeSelect = ({
    selectedTheme,
    onChangeFormData,
    selectedKey,
    selectedKeyDetail,
}) => {
    const [modalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
        useState(false);
    const keyThemeList = useSelector((state) => state.keyTheme);
    const CloseModalCreateNewTheme = () => {
        setModalCreateNewThemeOpen(false);
    };

    const options = [
        {
            label: "Create new theme",
            value: "create-new",
            style: [
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
            value: "dark-dragon",
            style: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "start-left",
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
            label: "Transparent",
            value: "transparent",
            style: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "start-left",
                    fontColor: "#000",
                    fontWeight: "normal",
                },
                {
                    //layer2 = index 1
                    background: "transparent",
                    top_border: "transparent",
                    bottom_border: "transparent",
                    left_border: "transparent",
                    right_border: "transparent",
                },
                {
                    //layer3 = index 2
                    background: "transparent",
                    top_border: "transparent",
                    bottom_border: "transparent",
                    left_border: "transparent",
                    right_border: "transparent",
                },
            ],
        },
        {
            label: "Matcha",
            value: "matcha",
            style: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "start-left",
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
            value: "black",
            style: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "end-right",
                    fontColor: "#fff",
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
            value: "white",
            style: [
                {
                    //layer1 = index 0
                    fontFamily: "times new roman",
                    fontSize: "15px",
                    textPlacement: "start-left",
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

    const onChangeSelectTheme = (val) => {
        if (val.label == "Create new theme") {
            return setModalCreateNewThemeOpen(true);
        } else {
            return onChangeFormData("keycapsTheme", val);
        }
    };

    return (
        <>
            <Select
                options={keyThemeList}
                styles={customStyleSelect}
                value={selectedKeyDetail.keycapsTheme}
                onChange={onChangeSelectTheme}
                isDisabled={selectedKey.length < 1 ? true : false}
            />

            <ModalLayout
                open={modalCreateNewThemeOpen}
                close={CloseModalCreateNewTheme}
            >
                <ModalCreateNewTheme
                    modalCreateNewThemeOpen={modalCreateNewThemeOpen}
                />
            </ModalLayout>
        </>
    );
};

export default KeyThemeSelect;
