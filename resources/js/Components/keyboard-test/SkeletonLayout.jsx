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
                    className={`rounded-[4px] ${
                        scale ? `ms-1 me-1 p-1` : `ms-4 me-4 p-2`
                    }  whitespace-nowrap border`}
                >
                    <div
                        className={`rounded-[9px] ${
                            scale ? `p-1.5` : `p-3`
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
                                                className={`flex flex-shrink-0`}
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
                                                        }`}
                                                    >
                                                        <div>{col.legend}</div>
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
