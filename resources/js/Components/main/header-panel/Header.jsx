import React, { useState } from "react";
import ModalSignIn from "../../auth/ModalSignIn";
import ModalSignUp from "../../auth/ModalSignUp";
import ModalLayout from "../../template-layout/ModalLayout";

const Header = () => {
    const loginStatus = false;
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);

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

    const closeSignUpnModal = (e) => {
        e.preventDefault();
        console.log("close");
        return setSignUpModalOpen(false);
    };

    return (
        <div className="text-white w-full h-full ms-2 flex justify-between items-center">
            <div className="w-40 text-lg font-semibold">Radhians-Keys</div>
            <div className="px-2 bg-[#1f1f1f] w-80 h-7 lg:block md:block hidden relative overflow-hidden group rounded-sm hover:scale-110 delay-150 ease-in-out duration-300">
                <div className="animate-spin-slow group-hover:animate-none group-hover:transition-all group-hover:delay-100 group-hover::duration-150 w-96 h-20 m-auto -left-3 right-0 bg-white absolute"></div>
                <a
                    href="#"
                    className="inset-[1px] bg-[#1c1e20] absolute flex justify-center items-center text-[11px] rounded-sm "
                >
                    Test your keyboard here...
                </a>
            </div>{" "}
            {/*Test your keyboard here...*/}
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
                <div className="h-full flex items-center group pe-4">
                    <button
                        onClick={openSignInModal}
                        className="border bg-[#1c1e20] hover:bg-slate-50 hover:text-[#0d6efd] border-[#0d6efd] hover:border-none text-[14px] pt-[3px] pb-[3px] ps-2 pe-2 me-2 rounded-sm font-semibold"
                    >
                        Sign in
                    </button>
                    <button
                        onClick={openSignUpModal}
                        className="bg-[#0d6efd] hover:bg-slate-50 hover:text-[#0d6efd] text-[14px] pt-[3px] pb-[3px] ps-2 pe-2 rounded-sm font-semibold"
                    >
                        Create account
                    </button>
                </div>
            )}
            {/* <ModalAuth
                authModalOpen={authModalOpen}
                authModalClose={closeModalAuth}
            /> */}
            <ModalLayout open={signInModalOpen} close={closeSignInModal}>
                <ModalSignIn openSignUp={openSignUpModal} />
            </ModalLayout>
            <ModalLayout open={signUpModalOpen} close={closeSignUpnModal}>
                <ModalSignUp openSignIn={openSignInModal} />
            </ModalLayout>
        </div>
    );
};

export default Header;
