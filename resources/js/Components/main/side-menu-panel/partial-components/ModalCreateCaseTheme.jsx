import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ModalCreateCaseTheme = () => {
    const [sketchPickerColor, setSketchPickerColor] = useState("#A8A29E");
    const changeColor = (color, event) => {
        // setSketchPickerColor(color.hex);
        // setColorthemeData((prev) => {
        //     prev.style[selectLayer][radioBtnValue] = color.hex;
        //     return { ...prev };
        // });
    };

    return (
        <div>
            <div className="semibold text-[20px] text-white">
                Create new case theme
            </div>
            <div className="w-[380px] h-[140px] mt-2 mb-2 bg-slate-400 rounded-sm overflow-hidden relative">
                <div className="case flex flex-shrink-0 w-full absolute right-[-100px] top-[-15px]">
                    <div className=" bg-[#e8c4b8] w-full h-[380px] border border-[#706662] rounded-[4px] ms-4 me-11 mt-12 mb-11 p-2 whitespace-nowrap">
                        <div className=" h-full bg-[#332b29] border border-[#706662] rounded-[9px] p-3 whitespace-nowrap"></div>
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
                <div className="w-full pe-1">
                    <div className="group mt-0.5">
                        <div className="text-sm">Text color</div>
                        <input
                            type="radio"
                            name="fontColor"
                            className="hidden peer"
                            // checked={"fontColor" == radioBtnValue}
                            // onChange={changeRadioHexColor}
                            value={`fontColor`}
                        />
                        <div className="border border-1 border-solid border-white group-hover:border-blue-600 peer-checked:border-green-600 peer-checked:border-double p-1">
                            <div
                                className={`w-full h-3`}
                                style={{
                                    background: "#fff",
                                    // colorthemeData.style[0].fontColor,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ChromePicker
                        onChange={changeColor}
                        color={sketchPickerColor}
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalCreateCaseTheme;
