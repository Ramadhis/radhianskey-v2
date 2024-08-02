import React from "react";

const ModalLayout = ({ open, close, children }) => {
    return (
        <div
            // onClick={close}
            className={`fixed inset-0 flex justify-center items-center transition-colors  z-[1000000] ${
                open ? "visible bg-black/50" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-[#1f1f1f] rounded-md shadow p-6 transition-all -mt-10 border border-white ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-0"
                }`}
            >
                <div
                    onClick={close}
                    className="absolute -top-5 -right-4 w-9 h-9 bg-red-600 cursor-pointer text-white hover:text-red-600 hover:bg-white rounded-full border border-white hover:border-red-600 flex items-center justify-center "
                >
                    <i
                        className="bi bi-x-lg "
                        style={{ WebkitTextStroke: "2px" }}
                    ></i>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ModalLayout;
