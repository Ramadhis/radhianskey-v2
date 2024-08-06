import React, { useState, useEffect } from "react";
import ModalMyLayout from "../../../auth/ModalMyLayout";
import ModalLayout from "../../../template-layout/ModalLayout";
import { modalSaveAsOpen } from "../../../../Store/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { toPng } from "html-to-image";
import { updateLayoutData } from "../../../../Store/Slices/main/layoutSlice";
import { Inertia } from "@inertiajs/inertia";

const SaveBtn = ({ saveType, layoutScreenhotRef }) => {
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.layout);
    const [saveAsModalOpen, setSaveAsModalOpen] = useState(false);

    const openSaveAsModal = (e) => {
        e.preventDefault();
        toPng(layoutScreenhotRef.current, {
            skipFonts: true,
            preferredFontFormat: "woff2",
            backgroundColor: "transparent",
        })
            .then(function (dataUrl) {
                dispatch(updateLayoutData({ preview_image: dataUrl }));

                return dispatch(modalSaveAsOpen());
            })
            .catch(function (error) {
                return console.error("oops, something went wrong!", error);
            });
    };

    const save = (e) => {
        e.preventDefault();
        toPng(layoutScreenhotRef.current, {
            skipFonts: true,
            preferredFontFormat: "woff2",
            backgroundColor: "transparent",
        })
            .then(function (dataUrl) {
                // dispatch(updateLayoutData({ preview_image: dataUrl }));
                // console.log(dataUrl);
                return Inertia.post("/save", {
                    ...layout,
                    preview_image: dataUrl,
                });
            })
            .catch(function (error) {
                return console.error("oops, something went wrong!", error);
            });
    };

    // useEffect(() => {
    //     console.log(layout);
    // }, [layout]);

    return (
        <>
            <button
                onClick={
                    saveType == "save" && layout.uid != null
                        ? save
                        : openSaveAsModal
                }
                className="bg-[#2c508a] ms-2 p-1 rounded-sm px-4 text-sm text-white font-medium inline"
            >
                <i className="bi bi-cloud-check text-[18px] me-1"></i>{" "}
                {saveType == "save" ? "Save" : "Save as"}
            </button>
        </>
    );
};

export default SaveBtn;
