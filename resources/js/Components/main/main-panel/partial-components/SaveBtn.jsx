import React, { useState } from "react";
import ModalMyLayout from "../../../auth/ModalMyLayout";
import ModalLayout from "../../../template-layout/ModalLayout";

const SaveBtn = ({ saveType }) => {
    const [saveAsModalOpen, setSaveAsModalOpen] = useState(false);

    const openSaveAsModal = (e) => {
        e.preventDefault();
        return setSaveAsModalOpen(true);
    };

    const closeSaveAsModal = (e) => {
        e.preventDefault();
        return setSaveAsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={openSaveAsModal}
                className="bg-[#2c508a] ms-2 p-1 rounded-sm px-4 text-sm text-white font-medium inline"
            >
                <i className="bi bi-cloud-check text-[18px] me-1"></i>{" "}
                {saveType == "save" ? "Save" : "Save as"}
            </button>
            {saveType == "save-as" ? (
                <ModalLayout open={saveAsModalOpen} close={closeSaveAsModal}>
                    <ModalMyLayout />
                </ModalLayout>
            ) : null}
        </>
    );
};

export default SaveBtn;
