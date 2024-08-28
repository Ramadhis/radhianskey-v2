import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import {
    updateCaseThemeModal,
    updateStyleCaseTheme,
} from "../../../../Store/Slices/main/modalCaseThemeDataSlice";
import SubmitBtnWithLoading from "../../../utils/SubmitBtnWithLoading";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { v4 } from "uuid";
import { toastFireFailed } from "../../../utils/Toast";

const ModalCreateCaseTheme = () => {
    const dispatch = useDispatch();
    const { session, auth, errors } = usePage().props;
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const modalCaseThemeData = useSelector((state) => state.modalCaseTheme);
    const caseThemeState = useSelector((state) => state.caseTheme);
    const [radioBtnValue, setRadioBtnValue] = useState("outer_border");
    const [sketchPickerColor, setSketchPickerColor] = useState(
        modalCaseThemeData.style[radioBtnValue]
    );

    const changeColor = (color, event) => {
        setSketchPickerColor(color.hex);
        dispatch(
            updateStyleCaseTheme({
                inputName: radioBtnValue,
                inputValue: color.hex,
            })
        );
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (!auth.user) {
            return toastFireFailed("failed to save, please sign-in first");
        }
        setButtonSubmit(true);
        const caseThemeArr = [...caseThemeState];

        let modalCaseThemeDatas = { ...modalCaseThemeData };

        let findById = caseThemeArr.findIndex((caseThemeArrs) => {
            return caseThemeArrs.id == modalCaseThemeDatas.id;
        });

        // return console.log(findById);

        if (findById > -1) {
            //update
            caseThemeArr.splice(findById, 1);
        }

        //create new id
        const newModalCaseThemeDatas = {
            ...modalCaseThemeDatas,
            id: v4(),
            createdBy: auth.user.id,
        }; //set ID & created by

        caseThemeArr.push(newModalCaseThemeDatas);

        Inertia.post("/case-theme/update", {
            caseThemeData: caseThemeArr,
        });
    };

    useEffect(() => {
        setButtonSubmit(false);
    }, [session, errors]);

    return (
        <form onSubmit={submitForm} className="text-white">
            <div className="semibold text-[20px] text-white">
                Create new case theme
            </div>
            <div className="w-[380px] h-[140px] mt-2 mb-2 bg-slate-400 rounded-sm overflow-hidden relative">
                <div className="case flex flex-shrink-0 w-full absolute right-[-100px] top-[-15px]">
                    <div
                        className={` w-full h-[380px] rounded-[4px] ms-4 me-11 mt-12 mb-11 p-2 whitespace-nowrap`}
                        style={{
                            background:
                                modalCaseThemeData.style["outer_background"],
                            border: `1px solid ${modalCaseThemeData.style["outer_border"]}`,
                        }}
                    >
                        <div
                            className=" h-full rounded-[9px] p-3 whitespace-nowrap"
                            style={{
                                background:
                                    modalCaseThemeData.style[
                                        "inner_background"
                                    ],
                                border: `1px solid ${modalCaseThemeData.style["inner_border"]}`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-2">
                <input
                    type="text"
                    value={modalCaseThemeData.label}
                    onChange={(e) => {
                        // setCaseThemeData((prev) => {
                        //     return { ...prev, label: e.target.value };
                        // });
                        dispatch(
                            updateCaseThemeModal({
                                caseTheme: {
                                    label: e.target.value,
                                    value: e.target.value
                                        .toLowerCase()
                                        .replace(/ /g, "-")
                                        .replace(/[^\w-]+/g, ""),
                                },
                            })
                        );
                    }}
                    placeholder="Theme name...."
                    className="text-center w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    required
                />
            </div>
            <div className="flex justify-between mt-3">
                <div className="w-full pe-1">
                    {modalCaseThemeData
                        ? Object.keys(modalCaseThemeData.style).map(
                              (key, index) => {
                                  return (
                                      <label
                                          className="group mt-0.5"
                                          key={index}
                                      >
                                          <div className="text-sm capitalize">
                                              {key.split("_").join(" ")}
                                          </div>
                                          <input
                                              type="radio"
                                              name="caseColor"
                                              className="hidden peer"
                                              checked={
                                                  `${key}` == radioBtnValue
                                              }
                                              onChange={(e) => {
                                                  setRadioBtnValue(
                                                      e.target.value
                                                  );

                                                  setSketchPickerColor(
                                                      modalCaseThemeData.style[
                                                          key
                                                      ]
                                                  );
                                              }}
                                              value={`${key}`}
                                          />
                                          <div className="border border-1 border-solid border-white group-hover:border-blue-600 peer-checked:border-green-600 peer-checked:border-double p-1">
                                              <div
                                                  className={`w-full h-3`}
                                                  style={{
                                                      background:
                                                          modalCaseThemeData
                                                              .style[key],
                                                  }}
                                              ></div>
                                          </div>
                                      </label>
                                  );
                              }
                          )
                        : null}
                </div>
                <div className="">
                    <ChromePicker
                        onChange={changeColor}
                        color={sketchPickerColor}
                        className="h-full"
                    />
                </div>
            </div>
            <div className="mt-2">
                <hr />
            </div>
            <div className="w-full mt-2 text-right ">
                <SubmitBtnWithLoading
                    classData={
                        "bg-[#2c508a] p-1 rounded-sm px-2 text-sm font-medium "
                    }
                    buttonText={"Save theme"}
                    isLoading={buttonSubmit}
                />
            </div>
        </form>
    );
};

export default ModalCreateCaseTheme;
