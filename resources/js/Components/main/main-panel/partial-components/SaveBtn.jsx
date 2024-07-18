import React from "react";

const SaveBtn = ({ saveType }) => {
    return (
        <a
            href="#"
            className="bg-[#2c508a] ms-2 p-1 rounded-sm px-4 h-4 text-sm text-white font-medium inline"
        >
            <i className="bi bi-cloud-check text-[18px] me-1"></i>{" "}
            {saveType == "save" ? "Save" : "Save as"}
        </a>
    );
};

export default SaveBtn;
