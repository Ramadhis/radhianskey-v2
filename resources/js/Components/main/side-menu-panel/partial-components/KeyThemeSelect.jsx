import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import ModalCreateNewTheme from "./ModalCreateKeyTheme";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";
import { useSelector, useDispatch } from "react-redux";
import { usePage } from "@inertiajs/inertia-react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import CustomOptionKeyTheme from "./partial-components/CustomOptionKeyTheme";
import axios from "axios";
import { modalCreateNewThemeOpen } from "../../../../Store/Slices/modalSlice";
import { setToDefault } from "../../../../Store/Slices/main/modalKeyThemeDataSlice";

const KeyThemeSelect = ({
    selectedTheme,
    onChangeFormData,
    selectedKey,
    selectedKeyDetail,
}) => {
    const dispatch = useDispatch();
    // const [modalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
    //     useState(false);
    const keyThemeList = useSelector((state) => state.keyTheme);
    // const CloseModalCreateNewTheme = () => {
    //     setModalCreateNewThemeOpen(false);
    // };
    const [defaultOption, setDefaultOption] = useState([]);
    const { auth } = usePage().props;

    const options = [
        {
            label: "Create new theme",
            value: "create-new",
            createdBy: 12,
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
        {
            label: "Transparent",
            value: "transparent",
            createdBy: 13,
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
            label: "Black",
            value: "black",
            createdBy: 13,
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
            createdBy: 13,
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
            dispatch(modalCreateNewThemeOpen());
            // return setModalCreateNewThemeOpen(true);
        } else {
            return onChangeFormData("keycapsTheme", val);
        }
    };

    const loadDefaultKeyTheme = async () => {
        return await axios
            .get("/key-theme/get-default-key-theme")
            .then((res) => {
                return setDefaultOption(JSON.parse(res.data.key_theme_data));
            })
            .catch((err) => {
                return console.log(err.message);
            });
    };

    useEffect(() => {
        let loadDefault = false;
        if (auth.user) {
            if (auth.user.roles != "admin") {
                loadDefault = true;
            } else {
                loadDefault = false;
            }
        } else {
            loadDefault = true;
        }

        if (loadDefault) {
            return loadDefaultKeyTheme();
        }
    }, [auth.user]);

    const CustomMenuList = ({ innerRef, innerProps, isDisabled, children }) => {
        return (
            <div
                {...innerProps}
                style={{ maxHeight: "200px" }}
                className="border overflow-auto"
            >
                {children}
            </div>
        );
    };

    const customMenu = ({ innerRef, innerProps, isDisabled, children }) => {
        return (
            <div {...innerProps} className="mt-1">
                <button
                    className="bg-[#2c508a] border border-b-0 w-full font-semibold text-sm py-1 text-white hover:text-zinc-300"
                    onClick={() => {
                        dispatch(setToDefault()); //set modal data to default
                        dispatch(modalCreateNewThemeOpen());
                    }}
                >
                    + Create theme
                </button>
                {children}
            </div>
        );
    };

    return (
        <>
            <AsyncSelect
                // options={defaultOption}
                // options={keyThemeList}
                // defaultOptions={defaultOption}
                options={[...defaultOption, ...keyThemeList]}
                styles={customStyleSelect}
                value={selectedKeyDetail.keycapsTheme}
                onChange={onChangeSelectTheme}
                isDisabled={selectedKey.length < 1 ? true : false}
                components={{
                    Option: CustomOptionKeyTheme,
                    MenuList: CustomMenuList,
                    Menu: customMenu,
                }}
            />
        </>
    );
};

export default KeyThemeSelect;
