import React, { useState, useEffect } from "react";
import Header from "../../Components/global-components/Header";
import SubmitBtnWithLoading from "../../Components/utils/SubmitBtnWithLoading";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const ResetPassword = ({ token }) => {
    const { session, errors } = usePage().props;
    const [buttonSubmit, setButtonSubmit] = useState(false);

    const [form, setForm] = useState({
        password: "",
        confirm_password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setButtonSubmit(true);
        Inertia.post("/submit-reset-password", { ...form, token });
    };

    useEffect(() => {
        // console.log(errors);
        // if (session.status == "success") {
        //     setButtonSubmit(false);
        // }
        // console.log(session);
        setButtonSubmit(false);
    }, [session, errors]);

    return (
        <div>
            <Header />
            <div className="container mx-auto px-1">
                <div className="w-full body flex justify-center mt-20 z-10">
                    <div className="border border-white shadow bg-[#1f1f1f] rounded-md p-6 text-white">
                        <div className="text-center font-semibold text-[20px] mb-6">
                            Reset Password
                        </div>
                        <form onSubmit={submit}>
                            <div className="w-full mt-3">
                                <label className="text-md">New password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                    value={form.password}
                                    onChange={(e) => {
                                        setForm((prev) => {
                                            prev.password = e.target.value;
                                            return { ...prev };
                                        });
                                    }}
                                    required
                                />
                                {errors.password ? (
                                    <div className="text-red-600 text-sm">
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full mt-2">
                                <label className="text-md">
                                    Confirm new password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                    value={form.confirm_password}
                                    onChange={(e) => {
                                        setForm((prev) => {
                                            prev.confirm_password =
                                                e.target.value;
                                            return { ...prev };
                                        });
                                    }}
                                    required
                                />
                                {errors.confirm_password ? (
                                    <div className="text-red-600 text-sm">
                                        {errors.confirm_password}
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full mt-5 mb-3">
                                <SubmitBtnWithLoading
                                    classData={
                                        "bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-md"
                                    }
                                    buttonText={"Reset Password"}
                                    isLoading={buttonSubmit}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
