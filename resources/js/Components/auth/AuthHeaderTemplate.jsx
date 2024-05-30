import React, { useState } from "react";
import ModalSignIn from "./ModalSignIn";
import ModalSignUp from "./ModalSignUp";
import ModalforgotPassword from "./ModalforgotPassword";
import ModalLayout from "../template-layout/ModalLayout";

const AuthHeaderTemplate = () => {
    const loginStatus = false;
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);
    const [forgotPasswordModalOpen, setForgotPasswordModalOpen] =
        useState(false);

    const openSignInModal = (e) => {
        e.preventDefault();
        setSignUpModalOpen(false);
        return setSignInModalOpen(true);
    };

    const closeSignInModal = (e) => {
        e.preventDefault();
        console.log("close");
        return setSignInModalOpen(false);
    };

    const openSignUpModal = (e) => {
        e.preventDefault();
        setSignInModalOpen(false);
        return setSignUpModalOpen(true);
    };

    const closeSignUpModal = (e) => {
        e.preventDefault();
        console.log("close");
        return setSignUpModalOpen(false);
    };

    const openForgotPasswordModal = (e) => {
        e.preventDefault();
        setSignUpModalOpen(false);
        setSignInModalOpen(false);
        return setForgotPasswordModalOpen(true);
    };

    const closeForgotPasswordModal = (e) => {
        e.preventDefault();
        return setForgotPasswordModalOpen(false);
    };

    return (
        <>
            {loginStatus ? (
                <div className="h-full flex items-center group">
                    <div className="me-2 text-sm font-semibold cursor-pointer">
                        Ramadhiansyah
                    </div>
                    <a href="#" className="pe-6">
                        <img
                            alt="name"
                            src="https://i.stack.imgur.com/HgkK0.png"
                            className="object-none w-8 h-8 rounded-full inline border-2"
                        />
                    </a>
                    <div className="bg-[#1f1f1f] border border-zinc-300  w-36 z-30 absolute top-9 right-5 rounded text-black hidden group-hover:block group-hover:transition">
                        <div className="hover:bg-[#2c508a] w-full mt-2 text-zinc-300 ps-2">
                            <a href="#" className="w-full">
                                My Layout
                            </a>
                        </div>
                        <div className="hover:bg-[#2c508a] mt-2 text-zinc-300 ps-2">
                            <a href="#">Account setting</a>
                        </div>
                        <div className="hover:bg-[#2c508a] mt-2 mb-2 text-zinc-300 ps-2">
                            <a href="#">Sign out</a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-full flex items-center group">
                    <button
                        onClick={openSignInModal}
                        className="border bg-none hover:bg-slate-50 text-white hover:text-[#0d6efd] border-[#0d6efd] hover:border-none text-[14px] pt-[3px] pb-[3px] ps-2 pe-2 me-2 rounded-sm font-semibold"
                    >
                        Sign in
                    </button>
                    <button
                        onClick={openSignUpModal}
                        className="bg-[#0d6efd] hover:bg-slate-50 text-white hover:text-[#0d6efd] text-[14px] pt-[3px] pb-[3px] ps-2 pe-2 rounded-sm font-semibold"
                    >
                        Create account
                    </button>
                </div>
            )}

            <ModalLayout open={signInModalOpen} close={closeSignInModal}>
                <ModalSignIn
                    openSignUp={openSignUpModal}
                    openForgotPassword={openForgotPasswordModal}
                />
            </ModalLayout>
            <ModalLayout open={signUpModalOpen} close={closeSignUpModal}>
                <ModalSignUp
                    openSignIn={openSignInModal}
                    openForgotPassword={openForgotPasswordModal}
                />
            </ModalLayout>
            <ModalLayout
                open={forgotPasswordModalOpen}
                close={closeForgotPasswordModal}
            >
                <ModalforgotPassword />
            </ModalLayout>
        </>
    );
};

export default AuthHeaderTemplate;
