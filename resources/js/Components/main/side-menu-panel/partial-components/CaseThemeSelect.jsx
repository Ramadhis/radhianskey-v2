import React, { useState } from "react";
import Select from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";
import ModalCreateCaseTheme from "./ModalCreateCaseTheme";
import { useSelector, useDispatch } from "react-redux";
import { updateCaseTheme } from "../../../../Store/Slices/main/layoutSlice";

const CaseThemeSelect = () => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.layout);
    const [modalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
        useState(false);

    const options = [
        {
            label: "Create new theme",
            value: "new",
            style: {
                outer_border: "#706662",
                inner_border: "#706662",
                outer_background: "#e8c4b8",
                inner_background: "#332b29",
            },
        },
        {
            label: "Yellow theme",
            value: "dark",
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
            style: {
                outer_border: "#706662",
                inner_border: "#fff",
                outer_background: "#e8c4b8",
                inner_background: "#fff",
            },
        },
    ];
    const onChangeSelectTheme = (val) => {
        if (val.label == "Create new theme") {
            return setModalCreateNewThemeOpen(true);
        } else {
            dispatch(updateCaseTheme({ caseTheme: val }));
            // return onChangeFormData("keycapsTheme", {
            //     name: val.label,
            //     style: val.value,
            // });
        }
    };

    const CloseModalCreateNewTheme = () => {
        return setModalCreateNewThemeOpen(false);
    };
    return (
        <>
            <Select
                options={options}
                styles={customStyleSelect}
                value={layout.caseData.caseTheme}
                onChange={onChangeSelectTheme}
            />
            <ModalLayout
                open={modalCreateNewThemeOpen}
                close={CloseModalCreateNewTheme}
            >
                <ModalCreateCaseTheme />
            </ModalLayout>
        </>
    );
};

export default CaseThemeSelect;
