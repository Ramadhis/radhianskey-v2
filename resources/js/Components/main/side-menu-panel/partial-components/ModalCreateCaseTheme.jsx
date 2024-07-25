import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const ModalCreateCaseTheme = () => {
    const [sketchPickerColor, setSketchPickerColor] = useState("#A8A29E");
    const [radioBtnValue, setRadioBtnValue] = useState("outer_border");
    const [caseThemeData, setCaseThemeData] = useState({
        name: "",
        style: {
            outer_border: "#706662",
            inner_border: "#706662",
            outer_background: "#e8c4b8",
            inner_background: "#332b29",
        },
    });

    const changeColor = (color, event) => {
        setSketchPickerColor(color.hex);

        setCaseThemeData((prev) => {
            prev.style[radioBtnValue] = color.hex;
            return { ...prev };
        });
    };

    useEffect(() => {
        console.log(radioBtnValue);
    }, [radioBtnValue]);

    return (
        <div>
            <div className="semibold text-[20px] text-white">
                Create new case theme
            </div>
            <div className="w-[380px] h-[140px] mt-2 mb-2 bg-slate-400 rounded-sm overflow-hidden relative">
                <div className="case flex flex-shrink-0 w-full absolute right-[-100px] top-[-15px]">
                    <div
                        className={` w-full h-[380px] rounded-[4px] ms-4 me-11 mt-12 mb-11 p-2 whitespace-nowrap`}
                        style={{
                            background: caseThemeData.style["outer_background"],
                            border: `1px solid ${caseThemeData.style["outer_border"]}`,
                        }}
                    >
                        <div
                            className=" h-full rounded-[9px] p-3 whitespace-nowrap"
                            style={{
                                background:
                                    caseThemeData.style["inner_background"],
                                border: `1px solid ${caseThemeData.style["inner_border"]}`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="w-full mb-2">
                <input
                    type="text"
                    value={caseThemeData.name}
                    onChange={(e) => {
                        setCaseThemeData((prev) => {
                            return { ...prev, name: e.target.value };
                        });
                    }}
                    placeholder="Theme name...."
                    className="text-center w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="flex justify-between mt-3">
                <div className="w-full pe-1">
                    {caseThemeData
                        ? Object.keys(caseThemeData.style).map((key, index) => {
                              return (
                                  <label className="group mt-0.5" key={index}>
                                      <div className="text-sm capitalize">
                                          {key.split("_").join(" ")}
                                      </div>
                                      <input
                                          type="radio"
                                          name="caseColor"
                                          className="hidden peer"
                                          checked={`${key}` == radioBtnValue}
                                          onChange={(e) => {
                                              setRadioBtnValue(e.target.value);
                                              setSketchPickerColor(
                                                  caseThemeData.style[key]
                                              );
                                          }}
                                          value={`${key}`}
                                      />
                                      <div className="border border-1 border-solid border-white group-hover:border-blue-600 peer-checked:border-green-600 peer-checked:border-double p-1">
                                          <div
                                              className={`w-full h-3`}
                                              style={{
                                                  background:
                                                      caseThemeData.style[key],
                                              }}
                                          ></div>
                                      </div>
                                  </label>
                              );
                          })
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
                <a
                    href="#"
                    className="bg-[#2c508a] p-1 rounded-sm px-2 h-4 text-sm font-medium "
                >
                    Save theme
                </a>
            </div>
        </div>
    );
};

export default ModalCreateCaseTheme;
