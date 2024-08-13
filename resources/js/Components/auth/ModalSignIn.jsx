import { Inertia } from "@inertiajs/inertia";
import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import SubmitBtnWithLoading from "../utils/SubmitBtnWithLoading";

const ModalSignIn = ({ openSignUp, openForgotPassword }) => {
    const { session, errors } = usePage().props;
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setButtonSubmit(true);
        Inertia.post("/login", form);
    };

    useEffect(() => {
        setButtonSubmit(false);
    }, [session, errors]);

    return (
        <div className="w-[320px] text-white">
            <div className="text-center font-semibold text-[20px] mb-6">
                Sign in to Radhians
            </div>
            <form onSubmit={submit}>
                <div className="w-full mt-1">
                    <label className="text-md">Email</label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                        value={form.email}
                        onChange={(e) => {
                            e.preventDefault();
                            return setForm((prev) => {
                                prev.email = e.target.value;
                                return { ...prev };
                            });
                        }}
                        required
                    />
                    {errors.email ? (
                        <div className="text-red-600 text-sm">
                            {errors.email}
                        </div>
                    ) : null}
                </div>
                <div className="w-full mt-3">
                    <label className="text-md">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                        value={form.password}
                        onChange={(e) => {
                            e.preventDefault();
                            return setForm((prev) => {
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
                <div className="w-full mt-5 mb-3">
                    <SubmitBtnWithLoading
                        classData={
                            "bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-md"
                        }
                        buttonText={"Sign in"}
                        isLoading={buttonSubmit}
                    />
                </div>
            </form>
            <a href="#" onClick={openForgotPassword} className="text-[#6ab0e4]">
                Forgot password?
            </a>
            <div>
                Don't have an account?{" "}
                <a href="#" onClick={openSignUp} className="text-[#6ab0e4]">
                    create new
                </a>
            </div>
        </div>
    );
};

export default ModalSignIn;
