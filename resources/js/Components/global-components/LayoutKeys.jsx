import React from "react";
import Keys from "./Keys";

const LayoutKeys = ({ layoutScreenhotRef, layout_data, previewMode }) => {
    return (
        <div className="case flex flex-shrink-0 justify-center">
            <div
                className="rounded-[4px] ms-4 me-4 p-2 whitespace-nowrap"
                style={{
                    background:
                        layout_data.caseData.caseTheme.style[
                            "outer_background"
                        ],
                    border: `1px solid ${layout_data.caseData.caseTheme.style["outer_border"]}`,
                }}
            >
                <div
                    className="rounded-[9px] p-3 whitespace-nowrap"
                    style={{
                        background:
                            layout_data.caseData.caseTheme.style[
                                "inner_background"
                            ],
                        border: `1px solid ${layout_data.caseData.caseTheme.style["inner_border"]}`,
                    }}
                >
                    {layout_data.layoutData.map((row, index) => {
                        return (
                            <div
                                className="flex flex-shrink-0 whitespace-nowrap min-h-[57px] "
                                key={row.id}
                            >
                                {row.column.map((col, index2) => {
                                    return (
                                        <div
                                            key={col.id}
                                            className={`hover:scale-[93%] ${
                                                col.pressedKey == true
                                                    ? col.keycapsSize < 5
                                                        ? `scale-[85%]`
                                                        : `scale-[93%]`
                                                    : ``
                                            } transition-all flex flex-shrink-0`}
                                        >
                                            <Keys
                                                key={col.id}
                                                keysData={col}
                                                previewMode={previewMode}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LayoutKeys;
