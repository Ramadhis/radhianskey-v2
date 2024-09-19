import React, { useEffect, useState } from "react";
import ModalSignIn from "./ModalSignIn";
import ModalSignUp from "./ModalSignUp";
import ModalForgotPassword from "./ModalForgotPassword";
import ModalLayout from "../template-layout/ModalLayout";
import ModalAccountSetting from "./ModalAccountSetting";
import ModalMyLayout from "./ModalMyLayout";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { toastFire } from "../utils/Toast";
import checkImageExists from "../helpers/checkImageExists";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalMyLayoutOpen } from "../../Store/Slices/modalSlice";

const AuthHeaderTemplate = () => {
    const loginStatus = false;
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.modal);
    const { auth, errors, session } = usePage().props;
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);
    const [forgotPasswordModalOpen, setForgotPasswordModalOpen] =
        useState(false);
    // const [myLayoutModalOpen, setMyLayoutModalOpen] = useState(true);
    const [accountSettingModalOpen, setAccountsettingModalOpen] =
        useState(false);

    const closeAllModal = (e) => {
        setSignUpModalOpen(false);
        setSignInModalOpen(false);
        setForgotPasswordModalOpen(false);
        setAccountsettingModalOpen(false);
    };

    const openSignInModal = (e) => {
        e.preventDefault();
        closeAllModal();
        return setSignInModalOpen(true);
    };

    const closeSignInModal = (e) => {
        e.preventDefault();
        return setSignInModalOpen(false);
    };

    const openSignUpModal = (e) => {
        e.preventDefault();
        closeAllModal();
        return setSignUpModalOpen(true);
    };

    const closeSignUpModal = (e) => {
        e.preventDefault();
        return setSignUpModalOpen(false);
    };

    const openForgotPasswordModal = (e) => {
        e.preventDefault();
        closeAllModal();
        return setForgotPasswordModalOpen(true);
    };

    const closeForgotPasswordModal = (e) => {
        e.preventDefault();
        return setForgotPasswordModalOpen(false);
    };

    const openMyLayoutModal = (e) => {
        e.preventDefault();
        closeAllModal();
        return dispatch(modalMyLayoutOpen(true));
    };

    const closeMyLayoutModal = (e) => {
        return dispatch(closeModal());
    };

    const openAccountsettingModal = (e) => {
        e.preventDefault();
        closeAllModal();
        return setAccountsettingModalOpen(true);
    };

    const closeAccountsettingModal = (e) => {
        e.preventDefault();
        return setAccountsettingModalOpen(false);
    };

    const signOut = (e) => {
        e.preventDefault();
        Inertia.post("/logout");
    };

    useEffect(() => {
        if (session.status == "success") {
            closeAllModal();
        }
        // console.log(session);
    }, [session]);

    return (
        <>
            {auth.user ? (
                <div className="h-full flex items-center group">
                    <div className="me-2 text-[15px] font-semibold cursor-pointer text-white">
                        {auth.user ? auth.user.name : null}
                    </div>
                    <a href="#" className="">
                        <img
                            alt="name"
                            src={
                                "/images/profile_picture/" +
                                auth.user.profile_picture
                            }
                            className="w-9 h-9 rounded-full inline border-2 object-cover"
                            onError={(e) => {
                                return (e.target.src =
                                    "/images/profile_picture/default.png");
                            }}
                        />
                    </a>
                    <div className="bg-[#1f1f1f] border border-zinc-300  w-36 z-50 absolute top-9 right-5 rounded text-black hidden group-hover:block group-hover:transition">
                        <div className="hover:bg-[#2c508a] w-full mt-2 py-1 text-zinc-300">
                            <button
                                onClick={openMyLayoutModal}
                                className="w-full text-left ps-2"
                            >
                                My Layout
                            </button>
                        </div>
                        <div className="hover:bg-[#2c508a] py-1 text-zinc-300">
                            <button
                                onClick={openAccountsettingModal}
                                className="w-full text-left ps-2"
                            >
                                Account setting
                            </button>
                        </div>
                        <div className="hover:bg-[#2c508a] mb-2 py-1 text-zinc-300 ps-2">
                            <button onClick={signOut}>Sign out</button>
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
                <ModalForgotPassword />
            </ModalLayout>
            <ModalLayout
                open={accountSettingModalOpen}
                close={closeAccountsettingModal}
            >
                <ModalAccountSetting />
            </ModalLayout>
            <ModalLayout
                open={modalState.myLayoutModal}
                close={closeMyLayoutModal}
            >
                <ModalMyLayout />
            </ModalLayout>
        </>
    );
};

export default AuthHeaderTemplate;
