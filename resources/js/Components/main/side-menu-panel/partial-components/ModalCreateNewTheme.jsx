import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
const ModalCreateNewTheme = () => {
    const [selectLayer, setSelectLayer] = useState(2);
    const [radioBtnValue, setRadioBtnValue] = useState("background");
    const [colorthemeData, setColorthemeData] = useState({
        theme: "custom",
        style: [
            {
                //layer1 = index 0
                fontFamily: "Arial",
                fontSize: "12px",
                fontColor: "#000",
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
    });

    const [sketchPickerColor, setSketchPickerColor] = useState("#A8A29E");

    const changeColor = (color, event) => {
        setSketchPickerColor(color.hex);

        setColorthemeData((prev) => {
            prev.style[selectLayer][radioBtnValue] = color.hex;
            return { ...prev };
        });
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

    useEffect(() => {
        console.log(colorthemeData.style[0]);
    }, [sketchPickerColor]);

    // const listlayerData = () => {
    //     for (let dat of object.key(colorthemeData.style[0])) {
    //         console.log("data", dat);
    //     }
    // };

    return (
        <>
            <div className="semibold text-[20px] text-white">
                Create new theme
            </div>

            <div className="w-[380px] h-40 mt-2 mb-2 bg-slate-400 flex justify-center items-center rounded-sm">
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
                        className="w-[45px] h-[45px] mt-[3px] ps-[2px] text-[15px]"
                        style={{
                            background: colorthemeData.style[1]["background"],
                            borderTop: `1px solid ${colorthemeData.style[1]["top_border"]}`,
                            borderBottom: `1px solid ${colorthemeData.style[1]["bottom_border"]}`,
                            borderLeft: `1px solid ${colorthemeData.style[1]["left_border"]}`,
                            borderRight: `1px solid ${colorthemeData.style[1]["right_border"]}`,
                            color: colorthemeData.style[0].fontColor,
                        }}
                    >
                        A
                    </div>
                </div>
            </div>
            <div className="w-full mb-2">
                <input
                    type="text"
                    placeholder="Theme name...."
                    className="text-center w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
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
                        <option value="0">Font Style</option>
                        <option value="1">Top color of keycaps</option>
                        <option value="2">Side color of keycaps</option>
                    </select>
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
                            <div className="mt-1">
                                <div className="text-[13px]">Font style</div>
                                <input
                                    type="text"
                                    placeholder="Font Style"
                                    className="h-7 w-[145px] text-[13px] bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                />
                            </div>
                            <div className="mt-1">
                                <div className="text-[13px]">Text align</div>
                                <input
                                    type="text"
                                    placeholder="Text align"
                                    className="h-7 w-[145px] text-[13px] bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                />
                            </div>
                            <div className="group mt-1">
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
                <a
                    href="#"
                    className="bg-[#2c508a] p-1 rounded-sm px-2 h-4 text-sm font-medium "
                >
                    Save theme
                </a>
            </div>
        </>
    );
};

export default ModalCreateNewTheme;
