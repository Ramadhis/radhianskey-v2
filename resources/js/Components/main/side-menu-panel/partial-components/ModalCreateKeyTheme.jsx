import { usePage } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { v4 } from "uuid";
import { toastFireFailed } from "../../../utils/Toast";
import SubmitBtnWithLoading from "../../../utils/SubmitBtnWithLoading";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import { addKeyTheme } from "../../../../Store/Slices/main/keyThemeSlice";
import { useDispatch, useSelector } from "react-redux";

const ModalCreateKeyTheme = ({ modalCreateNewThemeOpen }) => {
    const { session, auth, errors } = usePage().props;
    const dispatch = useDispatch();
    const [selectLayer, setSelectLayer] = useState(2);
    const [radioBtnValue, setRadioBtnValue] = useState("background");
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const modal = useSelector((state) => state.modal);

    let template = {
        id: "",
        label: "custom",
        value: "",
        createdBy: 0,
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
    };
    const modalKeyThemeState = JSON.parse(
        JSON.stringify(useSelector((state) => state.modalKeyTheme))
    );
    // AIzaSyDI1zX6JuqVR3bUB99OmVEnI0KLBB1L4AE  google font api token key
    const [colorthemeData, setColorthemeData] = useState(template);
    const [sketchPickerColor, setSketchPickerColor] = useState("#A8A29E");
    const keyThemeList = useSelector((state) => state.keyTheme);

    useEffect(() => {
        if (modal.createKeyThemeModal == true) {
            setColorthemeData((prev) => {
                return { ...modalKeyThemeState };
            });
        }
    }, [modal.createKeyThemeModal]);

    const fontList = [
        "arial",
        "arial Black",
        "verdana",
        "tahoma",
        "trebuchet MS",
        "impact",
        "times new roman",
        "georgia",
        "Palatino",
        "baskerville",
        "Andalé Mono",
        "courier",
        "monaco",
        "bradley hand",
        "brush script mt",
        "comic sans ms",
    ];

    const changeColor = (color, event) => {
        setSketchPickerColor(color.hex);

        const newColorthemeData = JSON.parse(
            JSON.stringify({ ...colorthemeData })
        );
        newColorthemeData.style[selectLayer][radioBtnValue] = color.hex;
        setColorthemeData(newColorthemeData);
    };

    const changeSelectLayer = (e) => {
        setSelectLayer(e.target.value);
        if (e.target.value == "0") {
            setRadioBtnValue("fontColor");
            setSketchPickerColor(colorthemeData.style[0]["fontColor"]);
        } else {
            setRadioBtnValue("background");
            setSketchPickerColor(
                colorthemeData.style[selectLayer]["background"]
            );
        }
    };

    const changeFont = (columnName, value) => {
        //change font style and placement
        const newColorthemeData = JSON.parse(
            JSON.stringify({ ...colorthemeData })
        );
        newColorthemeData.style[0][columnName] = value;
        setColorthemeData(newColorthemeData);
    };

    const changeRadioHexColor = (e) => {
        setRadioBtnValue(e.target.value);
        if (selectLayer == "0") {
            setSketchPickerColor(colorthemeData.style[0]["fontColor"]);
        } else {
            setSketchPickerColor(
                colorthemeData.style[selectLayer][e.target.value]
            );
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if (!auth.user) {
            return toastFireFailed("failed to save, please sign-in first");
        }
        setButtonSubmit(true);

        if (keyThemeList) {
            const keyThemeArr = [...keyThemeList];
            let findById = keyThemeArr.findIndex((keyThemeArrs) => {
                return keyThemeArrs.id === colorthemeData.id;
            });

            let colorThemeDatas = { ...colorthemeData };
            if (findById > 0) {
                //update
                keyThemeArr.splice(findById, 1);
            } else {
                //create new id
                colorThemeDatas = {
                    ...colorThemeDatas,
                    id: v4(),
                    createdBy: auth.user.id,
                }; //set ID & created by
            }

            dispatch(addKeyTheme({ themes: colorThemeDatas }));
            keyThemeArr.push(colorThemeDatas);

            Inertia.post("/key-theme/update", {
                keyThemeData: keyThemeArr,
            });
        }
        // else {
        //     toastFireFailed(`failed to save, try again laters`);
        // }
    };

    useEffect(() => {
        setButtonSubmit(false);
    }, [session, errors]);

    return (
        <form onSubmit={submitForm} className="text-white">
            <div className="semibold text-[20px] text-white">
                Create new theme
            </div>

            <div className="w-[380px] h-[140px] mt-2 mb-2 bg-slate-400 flex justify-center items-center rounded-sm">
                <div
                    className="scale-150 w-[58px] h-[58px] ms-[3px] rounded-sm text-black flex justify-center flex-shrink-0 relative z-0"
                    style={{
                        background: colorthemeData.style[2]["background"],
                        borderTop: `1px solid ${colorthemeData.style[2]["top_border"]}`,
                        borderBottom: `1px solid ${colorthemeData.style[2]["bottom_border"]}`,
                        borderLeft: `1px solid ${colorthemeData.style[2]["left_border"]}`,
                        borderRight: `1px solid ${colorthemeData.style[2]["right_border"]}`,
                    }}
                >
                    {/* //normal Width keycaps 53x53 */}
                    <div
                        className={`w-[45px] h-[45px] mt-[3px] px-1 text-[15px] flex`}
                        style={{
                            background: colorthemeData.style[1]["background"],
                            borderTop: `1px solid ${colorthemeData.style[1]["top_border"]}`,
                            borderBottom: `1px solid ${colorthemeData.style[1]["bottom_border"]}`,
                            borderLeft: `1px solid ${colorthemeData.style[1]["left_border"]}`,
                            borderRight: `1px solid ${colorthemeData.style[1]["right_border"]}`,
                        }}
                    >
                        <div
                            className="w-full"
                            style={{
                                color: colorthemeData.style[0].fontColor,
                                fontFamily: colorthemeData.style[0].fontFamily,
                                alignSelf:
                                    colorthemeData.style[0].textPlacement.split(
                                        "-"
                                    )[0], //example top-center <-- arr 0 = top
                                textAlign:
                                    colorthemeData.style[0].textPlacement.split(
                                        "-"
                                    )[1], //example top-center <-- arr 1 = center
                                fontWeight: colorthemeData.style[0].fontWeight,
                                fontSize: colorthemeData.style[0].fontSize,
                            }}
                        >
                            Ab?
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-2">
                <input
                    type="text"
                    placeholder="Theme name...."
                    value={colorthemeData.label}
                    onChange={(e) => {
                        setColorthemeData((prev) => {
                            return {
                                ...prev,
                                label: e.target.value,
                                value: e.target.value
                                    .toLowerCase()
                                    .replace(/ /g, "-")
                                    .replace(/[^\w-]+/g, ""),
                            };
                        });
                    }}
                    className="text-center w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    required
                />
            </div>
            <div className="flex justify-between mt-3">
                <div className="">
                    <select
                        name=""
                        id=""
                        defaultValue={selectLayer}
                        onChange={changeSelectLayer}
                        className="text-black text-[13px]"
                    >
                        <option value="0">Text Style</option>
                        <option value="1">Top color of keycaps</option>
                        <option value="2">Side color of keycaps</option>
                    </select>
                    <div className="mt-1">
                        <hr />
                    </div>
                    {selectLayer == "1" || selectLayer == "2" ? (
                        Object.keys(colorthemeData.style[selectLayer]).map(
                            (key, index) => {
                                return (
                                    <label className="group" key={index}>
                                        <div className="text-sm capitalize">
                                            {key.split("_").join(" ")}
                                        </div>
                                        <input
                                            type="radio"
                                            name="color"
                                            className="hidden peer"
                                            checked={key == radioBtnValue}
                                            onChange={changeRadioHexColor}
                                            value={`${key}`}
                                        />
                                        <div className="border border-1 border-solid border-white group-hover:border-blue-600 peer-checked:border-green-600 peer-checked:border-double p-1">
                                            <div
                                                className={`w-full h-3`}
                                                style={{
                                                    background:
                                                        colorthemeData.style[
                                                            selectLayer
                                                        ][key],
                                                }}
                                            ></div>
                                        </div>
                                    </label>
                                );
                            }
                        )
                    ) : (
                        <>
                            <div className="mt-0.5">
                                <div className="text-[13px]">Font family</div>
                                <select
                                    defaultValue={
                                        colorthemeData.style[0].fontFamily
                                    }
                                    onChange={(e) => {
                                        changeFont(
                                            "fontFamily",
                                            e.target.value
                                        );
                                    }}
                                    className="text-black text-[13px] w-full capitalize"
                                >
                                    {fontList.map((key, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={`${key}`}
                                            >{`${key}`}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="mt-0.5">
                                <div className="text-[13px]">
                                    Text Placement
                                </div>
                                <select
                                    defaultValue={
                                        colorthemeData.style[0].textPlacement
                                    }
                                    onChange={(e) => {
                                        return changeFont(
                                            "textPlacement",
                                            e.target.value
                                        );
                                    }}
                                    className="text-black text-[13px] w-full"
                                >
                                    <option value="start-left">Top-Left</option>
                                    <option value="start-center">
                                        Top-Center
                                    </option>
                                    <option value="start-right">
                                        Top-Right
                                    </option>
                                    <option value="center-left">
                                        Center-Left
                                    </option>
                                    <option value="center-center">
                                        Center-Center
                                    </option>
                                    <option value="center-right">
                                        Center-Right
                                    </option>
                                    <option value="end-left">
                                        Bottom-Left
                                    </option>
                                    <option value="end-center">
                                        Bottom-Center
                                    </option>
                                    <option value="end-right">
                                        Bottom-Right
                                    </option>
                                </select>
                            </div>
                            <div className="mt-0.5">
                                <div className="text-[13px]">Font weight</div>
                                <select
                                    defaultValue={
                                        colorthemeData.style[0].fontWeight
                                    }
                                    onChange={(e) => {
                                        return changeFont(
                                            "fontWeight",
                                            e.target.value
                                        );
                                    }}
                                    className="text-black text-[13px] w-full"
                                >
                                    <option value="normal">Normal</option>
                                    <option value="bold">Bold</option>
                                </select>
                            </div>
                            <div className="mt-0.5">
                                <div className="text-[13px]">Font size</div>
                                <select
                                    defaultValue={
                                        colorthemeData.style[0].fontSize
                                    }
                                    onChange={(e) => {
                                        changeFont("fontSize", e.target.value);
                                    }}
                                    className="text-black text-[13px] w-full"
                                >
                                    {[...Array(25)].map((key, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={`${index + 1}px`}
                                            >{`${index + 1}px`}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="group mt-0.5">
                                <div className="text-sm">Text color</div>
                                <input
                                    type="radio"
                                    name="fontColor"
                                    className="hidden peer"
                                    checked={"fontColor" == radioBtnValue}
                                    onChange={changeRadioHexColor}
                                    value={`fontColor`}
                                />
                                <div className="border border-1 border-solid border-white group-hover:border-blue-600 peer-checked:border-green-600 peer-checked:border-double p-1">
                                    <div
                                        className={`w-full h-3`}
                                        style={{
                                            background:
                                                colorthemeData.style[0]
                                                    .fontColor,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="">
                    <ChromePicker
                        onChange={changeColor}
                        color={sketchPickerColor}
                        className="h-full"
                    />
                </div>
            </div>
            <div className="mt-3">
                <hr />
            </div>
            <div className="w-full mt-3 text-right ">
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

export default ModalCreateKeyTheme;
