import React, { useState } from "react";
import Select from "react-select";
import ModalLayout from "../../../template-layout/ModalLayout";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";
import ModalCreateCaseTheme from "./ModalCreateCaseTheme";

const CaseThemeSelect = () => {
    const [modalCreateNewThemeOpen, setModalCreateNewThemeOpen] =
        useState(false);

    const options = [
        {
            label: "Create new theme",
            value: "new",
        },
        {
            label: "Dark-theme",
            value: "dark",
        },
        { label: "White-Theme", value: "white" },
    ];
    const onChangeSelectTheme = (val) => {
        if (val.label == "Create new theme") {
            return setModalCreateNewThemeOpen(true);
        } else {
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
            {" "}
            <Select
                options={options}
                styles={customStyleSelect}
                value={{
                    value: "white",
                    label: "White-Theme",
                }}
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
