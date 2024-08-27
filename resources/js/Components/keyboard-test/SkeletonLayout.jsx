import React from "react";

const SkeletonLayout = ({ layoutScreenhotRef, layout_data, previewMode }) => {
    return (
        <div className="case flex flex-shrink-0 mt-12">
            <div ref={layoutScreenhotRef}>
                <div className="rounded-[4px] ms-4 me-4 mb-11 p-2 whitespace-nowrap border">
                    <div className="rounded-[9px] p-3 whitespace-nowrap border">
                        {layout_data.layoutData.map((row, index) => {
                            return (
                                <div
                                    className="flex flex-shrink-0 whitespace-nowrap min-h-[57px] "
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
                                                            58 * col.keycapsSize
                                                        }px`,
                                                        height: "58px",
                                                    }}
                                                >
                                                    <div
                                                        className={`text-white w-full h-full overflow-hidden flex justify-center items-center
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
