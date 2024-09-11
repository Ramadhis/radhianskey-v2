import React, { useState, useRef, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import SubmitBtnWithLoading from "../utils/SubmitBtnWithLoading";

const ModalSignUp = ({ openSignIn, openForgotPassword }) => {
    const { session, errors } = usePage().props;
    const [buttonSubmit, setButtonSubmit] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setButtonSubmit(true);
        Inertia.post("/register", form);
    };

    useEffect(() => {
        setButtonSubmit(false);
    }, [session, errors]);

    return (
        <div className="w-[320px] text-white">
            <div className="text-center font-semibold text-[20px] mb-6">
                Create Radhianskey account
            </div>
            <form onSubmit={submit}>
                <div className="w-full mt-1">
                    <label className="text-md">Username</label>
                    <input
                        type="text"
                        min={3}
                        max={20}
                        placeholder="Username"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                        value={form.name}
                        onChange={(e) => {
                            e.preventDefault();
                            return setForm((prev) => {
                                prev.name = e.target.value;
                                return { ...prev };
                            });
                        }}
                        required
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
                        required
                    />
                    {errors.email ? (
                        <div className="text-red-600 text-sm">
                            {errors.email}
                        </div>
                    ) : null}
                </div>
                <div className="w-full mt-2">
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
                <div className="w-full mt-1">
                    <label className="text-md">Confirm password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                        value={form.confirm_password}
                        onChange={(e) => {
                            e.preventDefault();
                            return setForm((prev) => {
                                prev.confirm_password = e.target.value;
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
                    {/* <button
                        type="submit"
                        ref={submitBtn}
                        className="bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-md "
                    >
                        Sign up
                    </button> */}

                    <SubmitBtnWithLoading
                        classData={
                            "bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-md"
                        }
                        buttonText={"Sign up"}
                        isLoading={buttonSubmit}
                    />
                </div>
                <a
                    href="#"
                    onClick={openForgotPassword}
                    className="text-[#6ab0e4]"
                >
                    Forgot password?
                </a>
                <div>
                    You have an account?{" "}
                    <a href="#" onClick={openSignIn} className="text-[#6ab0e4]">
                        Sign in here
                    </a>
                </div>
            </form>
        </div>
    );
};

export default ModalSignUp;
