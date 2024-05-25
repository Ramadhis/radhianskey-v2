import React, { useState } from "react";
import ModalSignIn from "../../auth/ModalSignIn";
import ModalSignUp from "../../auth/ModalSignUp";
import ModalLayout from "../../template-layout/ModalLayout";
import ModalforgotPassword from "../../auth/ModalforgotPassword";
import { Link } from "@inertiajs/inertia-react";
import AuthHeaderTemplate from "../../auth/AuthHeaderTemplate";

const Header = () => {
    return (
        <div className="text-white w-full h-full ms-2 pe-4 flex justify-between items-center">
            <div className="w-40 text-lg font-semibold">Radhians-Keys</div>
            <div className="px-2 bg-[#1f1f1f] w-80 h-7 lg:block md:block hidden relative overflow-hidden group rounded-sm hover:scale-110 delay-150 ease-in-out duration-300">
                <div className="animate-spin-slow group-hover:animate-none group-hover:transition-all group-hover:delay-100 group-hover::duration-150 w-96 h-20 m-auto -left-3 right-0 bg-white absolute"></div>
                <Link
                    href="/keyboard-test"
                    className="inset-[1px] bg-[#1c1e20] absolute flex justify-center items-center text-[11px] rounded-sm "
                >
                    Test your keyboard here...
                </Link>
            </div>{" "}
            {/*Test your keyboard here...*/}
            <AuthHeaderTemplate />
        </div>
    );
};

export default Header;
