import React, { useState, useEffect } from "react";
import ModalMyLayout from "../../../auth/ModalMyLayout";
import ModalLayout from "../../../template-layout/ModalLayout";
import { modalSaveAsOpen } from "../../../../Store/Slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { toPng } from "html-to-image";
import { updateLayoutData } from "../../../../Store/Slices/main/layoutSlice";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { toastFireFailed } from "../../../utils/Toast";

const SaveBtn = ({ saveType, layoutScreenhotRef }) => {
    const { auth, session, errors } = usePage().props;
    const dispatch = useDispatch();
    const layout = useSelector((state) => state.layout);
    const [buttonSave, setButtonSave] = useState(false);

    const openSaveAsModal = (e) => {
        e.preventDefault();
        if (!auth.user) {
            return toastFireFailed("failed to save, please sign-in first");
        }

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
        if (!auth.user) {
            return toastFireFailed("failed to save, please sign-in first");
        }
        setButtonSave(true);
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

    useEffect(() => {
        setButtonSave(false);
    }, [session, errors]);

    return (
        <>
            <button
                onClick={
                    saveType == "save" && layout.uid != null
                        ? save
                        : openSaveAsModal
                }
                className={`bg-[#2c508a] ms-2 py-1 rounded-sm px-4 text-sm text-white font-medium inline ${
                    buttonSave == true ? `bg-blue-300 cursor-not-allowed ` : ``
                }`}
                disabled={buttonSave}
            >
                {buttonSave ? (
                    <div className="flex content-center justify-center">
                        <div className="me-1 w-[15px] h-[15px] border-[4px] border-blue-200 border-t-[4px] border-t-blue-500 rounded-[50%] animate-spin inline-block"></div>
                        Please wait...{" "}
                    </div>
                ) : (
                    <>
                        <i className="bi bi-cloud-check text-[14px] me-1"></i>{" "}
                        {saveType == "save" ? "Save" : "Save as"}
                    </>
                )}
            </button>
        </>
    );
};

export default SaveBtn;
