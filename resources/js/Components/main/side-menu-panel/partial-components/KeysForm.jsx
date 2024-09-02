import React, { useState, useEffect } from "react";
import KeyThemeSelect from "./KeyThemeSelect";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";
import Select from "react-select";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedKey } from "../../../../Store/Slices/main/layoutSlice";
import { updateSelectedKeyDetail } from "../../../../Store/Slices/main/selectionKeySlice";
import { onKeyPressCodeList } from "../static-data/onKeyPressCodeList";

const KeysForm = () => {
    const dispatch = useDispatch();

    const selectionKey = JSON.parse(
        JSON.stringify(useSelector((state) => state.selectionKey))
    );

    const layout = JSON.parse(
        JSON.stringify(useSelector((state) => state.layout))
    );

    const keyConnectOption = [
        { value: true, label: "True" },
        { value: false, label: "False" },
    ];

    const onChangeFormData = (formName, formValue) => {
        dispatch(
            updateSelectedKey({
                selectedKey: selectionKey.selectedKey,
                formName: formName,
                formValue: formValue,
            })
        );
        dispatch(
            updateSelectedKeyDetail({
                formName: formName,
                formValue: formValue,
            })
        );
    };

    return (
        <div className="pb-3">
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Keys legend
                </label>
                <input
                    type="text"
                    value={selectionKey.selectedKeyDetail.legend}
                    onChange={(e) => {
                        onChangeFormData("legend", e.target.value);
                    }}
                    placeholder="keys legend (Max 5 character)"
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    readOnly={
                        selectionKey.selectedKey.length < 1 ? true : false
                    }
                    maxLength={5}
                />
            </div>
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    On key pressed
                </label>
                <Select
                    options={onKeyPressCodeList}
                    styles={customStyleSelect}
                    value={selectionKey.selectedKeyDetail.onKeyPress}
                    onChange={(e) => {
                        onChangeFormData("onKeyPress", {
                            label: e.label,
                            value: e.value,
                        });
                    }}
                    isDisabled={
                        selectionKey.selectedKey.length < 1 ? true : false
                    }
                />
            </div>
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Keycaps size
                </label>
                <NumericFormat
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    decimalScale={2}
                    suffix={`U`}
                    allowNegative={false}
                    // placeholder={`${
                    //     val.satuan ? `satuan ${val.satuan}` : `satuan kg`
                    // }`}
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    value={selectionKey.selectedKeyDetail.keycapsSize}
                    onValueChange={(values, sourceInfo) => {
                        if (values.floatValue) {
                            return onChangeFormData(
                                "keycapsSize",
                                values.floatValue
                            );
                        }
                        return false;
                    }}
                    isAllowed={(values) => {
                        const { floatValue } = values;
                        return floatValue === undefined || floatValue <= 20;
                    }}
                    maxLength={5}
                    allowLeadingZeros
                    readOnly={
                        selectionKey.selectedKey.length < 1 ? true : false
                    }
                />
            </div>
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Keycaps theme
                </label>
                <KeyThemeSelect
                    selectedTheme={selectionKey.selectedKeyDetail.keycapsTheme}
                    selectedKey={selectionKey.selectedKey}
                    selectedKeyDetail={selectionKey.selectedKeyDetail}
                    onChangeFormData={onChangeFormData}
                />
            </div>
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Key connect to top{" "}
                    <p className="italic inline-block text-red-600">(*Beta)</p>
                </label>
                <Select
                    options={keyConnectOption}
                    styles={customStyleSelect}
                    value={{
                        value: selectionKey.selectedKeyDetail.KeyConnectTop,
                        label:
                            selectionKey.selectedKeyDetail.KeyConnectTop == true
                                ? "True"
                                : "False",
                    }}
                    onChange={(e) => {
                        return onChangeFormData("KeyConnectTop", e.value);
                    }}
                    isDisabled={
                        selectionKey.selectedKey.length < 1 ? true : false
                    }
                />
            </div>
            <div className="w-full mt-1">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Key connect to left{" "}
                    <p className="italic inline-block text-red-600">(*Beta)</p>
                </label>
                <Select
                    options={keyConnectOption}
                    styles={customStyleSelect}
                    value={{
                        value: selectionKey.selectedKeyDetail.KeyConnectLeft,
                        label:
                            selectionKey.selectedKeyDetail.KeyConnectLeft ==
                            true
                                ? "True"
                                : "False",
                    }}
                    onChange={(e) => {
                        return onChangeFormData("KeyConnectLeft", e.value);
                    }}
                    isDisabled={
                        selectionKey.selectedKey.length < 1 ? true : false
                    }
                />
            </div>
        </div>
    );
};

export default KeysForm;
