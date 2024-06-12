import React, { useRef, useState } from "react";

const ModalAccountSetting = () => {
    const inputImage = useRef(null);
    const [uploadImage, setUploadImage] = useState(null);

    return (
        <div className="lg:w-[320px] md:w-[320px] w-[320px]">
            <div className="mb-6 semibold text-[20px]">
                <div>Account setting</div>
                <hr />
            </div>
            <input
                ref={inputImage}
                type="file"
                onChange={(e) => {
                    const getFileName = e.target.files[0];
                    if (getFileName.name.match(/\.(jpg|jpeg|png)$/)) {
                        return setUploadImage(
                            URL.createObjectURL(e.target.files[0])
                        );
                    } else {
                        alert("ERROR, upload image with jpg/jpeg/png only");
                        e.target.value = null;
                        return setUploadImage(null);
                    }
                }}
                className="hidden"
            />
            <div className="flex justify-center mb-3 relative cursor-pointer">
                <img
                    src={
                        uploadImage
                            ? uploadImage
                            : `https://picsum.photos/seed/picsum/200/300`
                    }
                    className="w-32 h-32 rounded-full inline border-4 border-white object-cover"
                    accept="image/*"
                />

                <div
                    onClick={() => {
                        return inputImage.current.click();
                    }}
                    className="w-32 h-32 absolute overflow-hidden flex items-center justify-center group"
                >
                    <div className="w-full h-full bg-slate-500 rounded-full opacity-0 group-hover:opacity-50 "></div>
                    <div className="opacity-100 absolute font-bold hidden group-hover:block">
                        Change photo
                    </div>
                </div>
            </div>
            <div className="">
                <div className="w-full mt-1">
                    <label className="text-md">Username</label>
                    <input
                        type="text"
                        placeholder="Layout name"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    />
                </div>
                <div className="w-full mt-1">
                    <label className="text-md">Email address</label>
                    <input
                        type="text"
                        placeholder="Email address"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    />
                </div>
                <div className="w-full mt-5 mb-3">
                    <button
                        href="#"
                        className="bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-md "
                    >
                        Submit change
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalAccountSetting;
