import React from "react";
import confirmButtonFire from "../../../utils/ConfirmDialog";

const NewLayoutBtn = () => {
    const newLayout = () => {
        return confirmButtonFire(
            "Are you sure ? Make sure you have saved your current work",
            () => {
                var url = window.location.toString();
                window.location.replace("/create-layout");
                return true;
            },
            () => {
                return false;
            }
        );
    };

    return (
        <button
            onClick={newLayout}
            className="bg-[#2c508a] hover:bg-[#213e6d] border border-white p-1 rounded-sm px-4 ms-2 text-sm  text-white font-medium inline"
        >
            <i className="bi bi-file-earmark-fill"></i> New blank layout
        </button>
    );
};

export default NewLayoutBtn;
