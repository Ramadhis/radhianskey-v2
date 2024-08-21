import React, { useState, useEffect } from "react";
import Select from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";
import ModalCreateCaseTheme from "./ModalCreateCaseTheme";
import { useSelector, useDispatch } from "react-redux";
import { updateCaseTheme } from "../../../../Store/Slices/main/layoutSlice";
import CustomOptionCaseTheme from "./partial-components/CustomOptionCaseTheme";
import { usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import { modalCreateCaseThemeOpen } from "../../../../Store/Slices/modalSlice";
import { updateCaseThemeModal } from "../../../../Store/Slices/main/modalCaseThemeDataSlice";
import { caseThemeTemplate } from "../../../../Store/Slices/format-data/caseThemeTemplate";

const CaseThemeSelect = () => {
    const dispatch = useDispatch();
    const { auth } = usePage().props;
    const layout = useSelector((state) => state.layout);
    const [modalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
        useState(false);
    const [defaultOption, setDefaultOption] = useState([]);
    const caseThemeList = useSelector((state) => state.caseTheme);

    const options = [
        {
            label: "Yellow theme",
            value: "dark",
            createdBy: 12,
            style: {
                outer_border: "#0d0900",
                inner_border: "#ff9100",
                outer_background: "#ffc524",
                inner_background: "#fceab6",
            },
        },
        {
            label: "Pink Theme",
            value: "pink",
            createdBy: 12,
            style: {
                outer_border: "#706662",
                inner_border: "#fff",
                outer_background: "#e8c4b8",
                inner_background: "#fff",
            },
        },
    ];
    const onChangeSelectTheme = (val) => {
        dispatch(updateCaseTheme({ caseTheme: val }));
    };

    const CloseModalCreateNewTheme = () => {
        return setModalCreateNewThemeOpen(false);
    };

    const loadDefaultCaseTheme = async () => {
        return await axios
            .get("/case-theme/get-default-case-theme")
            .then((res) => {
                return setDefaultOption(JSON.parse(res.data.case_theme_data));
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
            return loadDefaultCaseTheme();
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
                        // setModalCreateNewThemeOpen(true);
                        dispatch(
                            updateCaseThemeModal({
                                caseTheme: caseThemeTemplate,
                            })
                        );
                        dispatch(modalCreateCaseThemeOpen());
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
            <Select
                options={[...caseThemeList, ...defaultOption]}
                styles={customStyleSelect}
                value={layout.layout_data.caseData.caseTheme}
                onChange={onChangeSelectTheme}
                components={{
                    Option: CustomOptionCaseTheme,
                    MenuList: CustomMenuList,
                    Menu: customMenu,
                }}
            />
            {/* <ModalLayout
                open={modalCreateNewThemeOpen}
                close={CloseModalCreateNewTheme}
            >
                <ModalCreateCaseTheme />
            </ModalLayout> */}
        </>
    );
};

export default CaseThemeSelect;
