import React from "react";

const ModalSignUp = ({ openSignIn, openForgotPassword }) => {
    return (
        <div className="w-[320px] text-white">
            <div className="text-center font-semibold text-[20px] mb-6">
                Create Radhians-key account
            </div>
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
            <div className="w-full mt-3">
                <label className="text-md">Password</label>
                <input
                    type="password"
                    placeholder="Layout name"
                    className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-3">
                <label className="text-md">Confirm password</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                />
            </div>
            <div className="w-full mt-5 mb-3">
                <button
                    href="#"
                    className="bg-[#2c508a] w-full rounded-sm px-6 py-2 font-semibold text-md "
                >
                    Sign up
                </button>
            </div>
            <a href="#" onClick={openForgotPassword} className="text-[#6ab0e4]">
                Forgot password?
            </a>
            <div>
                You have an account?{" "}
                <a href="#" onClick={openSignIn} className="text-[#6ab0e4]">
                    Sign in here
                </a>
            </div>
        </div>
    );
};

export default ModalSignUp;
