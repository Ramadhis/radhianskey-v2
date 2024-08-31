import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import SubmitBtnWithLoading from "../utils/SubmitBtnWithLoading";

const ModalForgotPassword = ({ closeForgotPassword }) => {
    const { session, errors } = usePage().props;
    const [form, setForm] = useState({
        email: "",
    });
    const [buttonSubmit, setButtonSubmit] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setButtonSubmit(true);
        Inertia.post("/submit-forgot-password", form);
    };

    useEffect(() => {
        if (session.status == "success") {
            setForm((prev) => {
                return { ...prev, email: "" };
            });
        }
        setButtonSubmit(false);
        // console.log(session);
    }, [session, errors]);

    return (
        <div className="w-[320px]  text-white">
            <form onSubmit={submit}>
                <div className="text-center font-semibold text-[20px] mb-6">
                    Forgot password
                </div>
                <div className="w-full mt-1">
                    <label className="text-md">Email</label>
                    <input
                        value={form.email}
                        onChange={(e) => {
                            setForm((prev) => {
                                return { ...prev, email: e.target.value };
                            });
                        }}
                        type="text"
                        placeholder="Email"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                    />
                </div>
                <div className="w-full mt-5 mb-3">
                    <SubmitBtnWithLoading
                        classData={
                            "bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-sm"
                        }
                        buttonText={"Send password reset link to your email"}
                        isLoading={buttonSubmit}
                    />
                </div>
            </form>
        </div>
    );
};

export default ModalForgotPassword;
