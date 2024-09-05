import React from "react";

const SkeletonLayout = ({
    layoutScreenhotRef,
    layout_data,
    previewMode,
    scale,
}) => {
    return (
        <div className={`case flex flex-shrink-0 justify-center`}>
            <div ref={layoutScreenhotRef}>
                <div
                    className={` ${
                        scale
                            ? `rounded-[2px] ms-1 me-1 p-1`
                            : `rounded-[4px] ms-4 me-4 p-2`
                    }  whitespace-nowrap border`}
                >
                    <div
                        className={` ${
                            scale
                                ? `rounded-[4.5px] p-1.5`
                                : `rounded-[9px] p-3`
                        } whitespace-nowrap border`}
                    >
                        {layout_data.layoutData.map((row, index) => {
                            return (
                                <div
                                    className="flex flex-shrink-0 whitespace-nowrap"
                                    key={index}
                                >
                                    {row.column.map((col, index2) => {
                                        return (
                                            <div
                                                key={index2}
                                                className={`flex flex-shrink-0 ${
                                                    col.keycapsTheme.value ==
                                                    "Invisible"
                                                        ? `invisible`
                                                        : ``
                                                }`}
                                            >
                                                <div
                                                    className={`border scale-[98%]
                                                    ${
                                                        col.pressedStatus ==
                                                            true &&
                                                        `bg-green-500`
                                                    }
                                                    `}
                                                    style={{
                                                        width: `${
                                                            scale
                                                                ? 29 *
                                                                  col.keycapsSize
                                                                : 58 *
                                                                  col.keycapsSize
                                                        }px`,
                                                        height: ` ${
                                                            scale
                                                                ? `29px`
                                                                : `58px`
                                                        }`,
                                                    }}
                                                >
                                                    <div
                                                        className={`text-white ${
                                                            scale
                                                                ? `text-[8px]`
                                                                : ``
                                                        } w-full h-full overflow-hidden flex justify-center items-center
                                                        ${
                                                            col.pressedKey ==
                                                            true
                                                                ? `bg-[#87cefa]`
                                                                : ``
                                                        }
                                                        `}
                                                    >
                                                        <div>
                                                            {
                                                                col.onKeyPress
                                                                    .label
                                                            }
                                                        </div>
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLayout;
