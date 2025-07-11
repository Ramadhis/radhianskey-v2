import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLayoutData } from "../../../../Store/Slices/main/layoutSlice";
import { usePage } from "@inertiajs/inertia-react";
import Select from "react-select";
import { customStyleSelect } from "../../../../Styles/customStyleReactSelect";

const LayoutDescForm = () => {
    const dispatch = useDispatch();
    const { errors } = usePage().props;
    const layout = useSelector((state) => state.layout);

    const options = [
        { value: "public", label: "Public" },
        { value: "private", label: "Private" },
    ];

    return (
        <div className="mb-2">
            <div className="w-full mt-2">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Layout Name
                </label>
                <input
                    type="text"
                    placeholder="Layout name"
                    value={layout.name}
                    onChange={(e) => {
                        dispatch(updateLayoutData({ name: e.target.value }));
                    }}
                    className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
                {errors.name ? (
                    <div className="text-red-600 text-sm">{errors.name}</div>
                ) : null}
            </div>
            <div className="w-full mt-2  mb-2">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Layout Publication type
                </label>
                <Select
                    options={options}
                    value={
                        layout.publication_type == "public"
                            ? options[0]
                            : options[1]
                    }
                    placeholder={
                        <div className="text-md">publication type...</div>
                    }
                    onChange={(val) => {
                        dispatch(
                            updateLayoutData({ publication_type: val.value })
                        );
                    }}
                    styles={{ ...customStyleSelect, fontSize: "30px" }}
                />
            </div>
            <div className="w-full mt-2  mb-2">
                <label className="flex flex-shrink-0 whitespace-nowrap overflow-hidden text-sm">
                    Layout Description
                </label>
                <textarea
                    type="text"
                    placeholder="Layout name"
                    value={layout.description}
                    onChange={(e) => {
                        dispatch(
                            updateLayoutData({ description: e.target.value })
                        );
                    }}
                    className="w-full min-h-16 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>

            {/* <div className="w-full mt-3 mb-3 text-right">
                <a
                    href="#"
                    className="bg-[#2c508a] p-1 rounded-sm px-2 h-4 text-sm font-medium "
                >
                    Apply
                </a>
            </div> */}
        </div>
    );
};

export default LayoutDescForm;
