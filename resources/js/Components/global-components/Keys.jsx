import React from "react";

const Keys = ({ keysData, previewMode }) => {
    const preview = previewMode || false;

    const keySize = 58 * keysData.keycapsSize;

    return (
        <div
            //default 58x58
            className={`rounded-sm text-black relative inline-block scale-[98%]`}
            style={{
                width: `${keySize}px`,
                height: "58px",
                background: keysData.keycapsTheme.style[2]["background"],
                borderTop: `1px solid ${keysData.keycapsTheme.style[2]["top_border"]}`,
                borderBottom: `1px solid ${keysData.keycapsTheme.style[2]["bottom_border"]}`,
                borderLeft: `1px solid ${keysData.keycapsTheme.style[2]["left_border"]}`,
                borderRight: `1px solid ${keysData.keycapsTheme.style[2]["right_border"]}`,
            }}
        >
            {/* //normal Width keycaps 53x53 */}
            <div
                //default 45x45
                className={`mt-[3px] mx-auto px-1 text-[15px] flex`}
                style={{
                    width:
                        (keysData.keycapsSize >= 1
                            ? keySize - 13
                            : keySize - 3.3) + `px`,
                    height: "45px",
                    background: keysData.keycapsTheme.style[1]["background"],
                    borderTop: `1px solid ${keysData.keycapsTheme.style[1]["top_border"]}`,
                    borderBottom: `1px solid ${keysData.keycapsTheme.style[1]["bottom_border"]}`,
                    borderLeft: `1px solid ${keysData.keycapsTheme.style[1]["left_border"]}`,
                    borderRight: `1px solid ${keysData.keycapsTheme.style[1]["right_border"]}`,
                }}
            >
                {/* {keysData.keycapsTheme.style[0].textPlacement.split("-")[0]} */}
                <div
                    className="w-full overflow-hidden"
                    style={{
                        color: keysData.keycapsTheme.style[0].fontColor,
                        fontFamily: keysData.keycapsTheme.style[0].fontFamily,
                        alignSelf:
                            keysData.keycapsTheme.style[0].textPlacement.split(
                                "-"
                            )[0],
                        //example top-center <-- arr 0 = top
                        textAlign:
                            keysData.keycapsTheme.style[0].textPlacement.split(
                                "-"
                            )[1], //example top-center <-- arr 1 = center
                        fontWeight: keysData.keycapsTheme.style[0].fontWeight,
                        fontSize: keysData.keycapsTheme.style[0].fontSize,
                    }}
                >
                    {keysData.legend}
                </div>
            </div>

            {keysData.KeyConnectTop && preview ? (
                <div className="flex justify-center">
                    <div
                        className={`h-[22px]  border absolute top-[-15px]`}
                        style={{
                            //default 58x22
                            width: `${58 * keysData.keycapsSize}px`,
                            background:
                                keysData.keycapsTheme.style[2]["background"],
                            borderTop: `0px solid ${keysData.keycapsTheme.style[2]["top_border"]}`,
                            borderBottom: `0px solid ${keysData.keycapsTheme.style[2]["bottom_border"]}`,
                            borderLeft: `1px solid ${keysData.keycapsTheme.style[2]["left_border"]}`,
                            borderRight: `1px solid ${keysData.keycapsTheme.style[2]["right_border"]}`,
                        }}
                    ></div>
                    <div
                        className={`h-[22px]  absolute top-[-15px]`}
                        style={{
                            //default 45x22
                            width: `${58 * keysData.keycapsSize - 13}px`,
                            background:
                                keysData.keycapsTheme.style[1]["background"],
                            borderTop: `0px solid ${keysData.keycapsTheme.style[1]["top_border"]}`,
                            borderBottom: `0px solid ${keysData.keycapsTheme.style[1]["bottom_border"]}`,
                            borderLeft: `1px solid ${keysData.keycapsTheme.style[1]["left_border"]}`,
                            borderRight: `1px solid ${keysData.keycapsTheme.style[1]["right_border"]}`,
                        }}
                    ></div>
                </div>
            ) : (
                false
            )}

            {keysData.KeyConnectLeft && preview ? (
                <div className="absolute -top-0">
                    <div
                        className={`w-[22px] h-[58px] mt-[-1px]  absolute left-[-15px]`}
                        style={{
                            background:
                                keysData.keycapsTheme.style[2]["background"],
                            borderTop: `1px solid ${keysData.keycapsTheme.style[2]["top_border"]}`,
                            borderBottom: `1px solid ${keysData.keycapsTheme.style[2]["bottom_border"]}`,
                            borderLeft: `0px solid ${keysData.keycapsTheme.style[2]["left_border"]}`,
                            borderRight: `0px solid ${keysData.keycapsTheme.style[2]["right_border"]}`,
                        }}
                    ></div>
                    <div
                        className={`w-[22px] h-[45px] mt-[3px]  absolute -top-15 left-[-15px]`}
                        style={{
                            background:
                                keysData.keycapsTheme.style[1]["background"],
                            borderTop: `1px solid ${keysData.keycapsTheme.style[1]["top_border"]}`,
                            borderBottom: `1px solid ${keysData.keycapsTheme.style[1]["bottom_border"]}`,
                            borderLeft: `0px solid ${keysData.keycapsTheme.style[1]["left_border"]}`,
                            borderRight: `0px solid ${keysData.keycapsTheme.style[1]["right_border"]}`,
                        }}
                    ></div>
                </div>
            ) : (
                false
            )}
        </div>
    );
};

export default Keys;
