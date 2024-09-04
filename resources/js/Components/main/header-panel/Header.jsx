import React, { useState } from "react";
import ModalSignIn from "../../auth/ModalSignIn";
import ModalSignUp from "../../auth/ModalSignUp";
import ModalLayout from "../../template-layout/ModalLayout";
import ModalforgotPassword from "../../auth/ModalForgotPassword";
import { Link } from "@inertiajs/inertia-react";
import AuthHeaderTemplate from "../../auth/AuthHeaderTemplate";

const Header = () => {
    return (
        <div className="text-white w-full h-full ms-2 pe-4 flex justify-between items-center">
            <div className="text-lg font-semibold mt-1">
                <img src="/images/radhianskey2.png" className="h-6" alt="" />
            </div>
            {/* <div className="px-2 bg-[#1f1f1f] w-80 h-7 lg:block md:block hidden relative overflow-hidden group rounded-sm hover:scale-110 delay-150 ease-in-out duration-300">
                <div className="animate-spin-slow group-hover:animate-none group-hover:transition-all group-hover:duration-150 w-96 h-20 m-auto -left-3 right-0 bg-white absolute"></div>
                <Link
                    href="/"
                    className="inset-[1px] bg-[#1c1e20] absolute flex justify-center items-center text-[11px] rounded-sm "
                >
                    Test your keyboard here...
                </Link>
            </div> */}

            {/* <div className="px-1 border border-zinc-300 bg-[#1f1f1f] py-1 relative overflow-hidden group rounded-sm"> */}
            <Link href="/">
                <div className="group border border-[#313131] hover:border-x hover:border-x-zinc-100 w-40 md:w-60 lg:w-96">
                    <div className="w-full flex justify-center">
                        <hr
                            className={`bg-zinc-100 w-0 group-hover:w-[100%] transition-all duration-700 rounded-md`}
                        />
                    </div>
                    <div className="w-full flex justify-center py-1">
                        <div className="text-[11px] rounded-sm text-zinc-400 group-hover:text-zinc-100 group-hover:scale-110 transition-all ease-in-out">
                            Test your keyboard here...
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <hr
                            className={` bg-zinc-100 w-0 group-hover:w-[100%] transition-all duration-700 rounded-md`}
                        />
                    </div>
                </div>
            </Link>
            {/*Test your keyboard here...*/}
            <AuthHeaderTemplate />
        </div>
    );
};

export default Header;
