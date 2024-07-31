import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useRef, useState, useEffect } from "react";

const ModalAccountSetting = () => {
    const { auth, errors } = usePage().props;
    const inputImage = useRef(null);
    const [form, setForm] = useState({
        email: "",
        name: "",
        profile_picture: null,
    });
    const [imageUpload, setImageUpload] = useState({
        default: "",
        uploaded: null,
    });
    const submit = (e) => {
        e.preventDefault();
        Inertia.post("/update-account", form, {
            forceFormData: true,
        });
        setImageUpload((prev) => {
            prev.uploaded = null;
            return { ...prev };
        });
    };

    useEffect(() => {
        if (auth.user) {
            setForm((prev) => {
                return {
                    email: auth.user.email,
                    name: auth.user.name,
                    profile_picture: null,
                };
            });
            setImageUpload((prev) => {
                prev.default = auth.user.profile_picture;
                return { ...prev };
            });
        }
    }, [auth]);

    return (
        <div className="lg:w-[320px] md:w-[320px] w-[320px]">
            <form onSubmit={submit}>
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
                            setImageUpload((prev) => {
                                prev.uploaded = URL.createObjectURL(
                                    e.target.files[0]
                                );
                                return { ...prev };
                            });
                            setForm((prev) => {
                                prev.profile_picture = e.target.files[0];
                                return { ...prev };
                            });
                        } else {
                            alert("ERROR, upload image with jpg/jpeg/png only");
                            e.target.value = null;
                            return setForm((prev) => {
                                prev.profile_picture = null;
                                return { ...prev };
                            });
                        }
                    }}
                    className="hidden"
                />

                <div className="flex justify-center mb-3 relative cursor-pointer">
                    {auth.user ? (
                        <img
                            src={
                                imageUpload.uploaded
                                    ? imageUpload.uploaded
                                    : "/profile_picture/" + imageUpload.default
                            }
                            className="w-32 h-32 rounded-full inline border-4 border-white object-cover"
                            accept="image/*"
                        />
                    ) : null}

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
                {errors.profile_picture ? (
                    <div className="text-red-600 text-sm">
                        {errors.profile_picture}
                    </div>
                ) : null}
                <div className="">
                    <div className="w-full mt-1">
                        <label className="text-md">Username</label>
                        <input
                            type="text"
                            placeholder="Layout name"
                            className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                            value={form.name}
                            onChange={(e) => {
                                e.preventDefault();
                                return setForm((prev) => {
                                    prev.name = e.target.value;
                                    return { ...prev };
                                });
                            }}
                        />
                        {errors.name ? (
                            <div className="text-red-600 text-sm">
                                {errors.name}
                            </div>
                        ) : null}
                    </div>
                    <div className="w-full mt-1">
                        <label className="text-md">Email address</label>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                            value={form.email}
                            onChange={(e) => {
                                e.preventDefault();
                                return setForm((prev) => {
                                    prev.email = e.target.value;
                                    return { ...prev };
                                });
                            }}
                        />
                        {errors.email ? (
                            <div className="text-red-600 text-sm">
                                {errors.email}
                            </div>
                        ) : null}
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
            </form>
        </div>
    );
};

export default ModalAccountSetting;
