import React, { useEffect, useRef, useState } from "react";
import {
    addPressed,
    addPressedStatus,
    getLayoutTest,
    reset,
    resetToDefault,
} from "../Store/Slices/keyboard-test/layoutTestSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LayoutKeys from "../Components/global-components/LayoutKeys";
import SkeletonLayout from "../Components/keyboard-test/SkeletonLayout";
import StatisticLayout from "../Components/keyboard-test/StatisticLayout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { toastFireFailed } from "../Components/utils/Toast";
import { closeModal, modalMyLayoutOpen } from "../Store/Slices/modalSlice";
import Header from "../Components/global-components/Header";

const KeyboardTest = ({ usernameSlug, layoutSlug }) => {
    // const loginStatus = false;
    const dispatch = useDispatch();
    const { auth } = usePage().props;
    const layouts = useSelector((state) => state.layoutTest);
    const layoutScreenhotRef = useRef(null);
    const [menu, setMenu] = useState("layout-test");

    const pressedControl = (typeKeyPress, code, pressed, layout) => {
        // const layoutData = JSON.parse(
        //     JSON.stringify(layouts.data.layout_data.layoutData)
        // );
        layout.data.layout_data.layoutData.map((element, index) => {
            element.column.map((elements, index2) => {
                if (elements.onKeyPress.value == code) {
                    dispatch(
                        addPressed({
                            // indexRow: index,
                            // indexColumn: index2,

                            pressed: pressed,
                            idRow: element.id,
                            idCol: elements.id,
                        })
                    );
                    if (typeKeyPress == "keyUp") {
                        dispatch(
                            addPressedStatus({
                                // indexRow: index,
                                // indexColumn: index2,

                                idRow: element.id,
                                idCol: elements.id,
                            })
                        );
                    }
                }
            });
        });
    };

    const keyDownPressed = (e) => {
        // console.log(e.code);
        // stops its action
        switch (e.code) {
            case "Quote":
                e.preventDefault();
                break;
            case "Slash":
                e.preventDefault();
                break;
            case "ContextMenu":
                e.preventDefault();
                break;
            case "Tab":
                e.preventDefault();
                break;
            case "F1":
                e.preventDefault();
                break;
            case "F2":
                e.preventDefault();
                break;
            case "F3":
                e.preventDefault();
                break;
            case "F4":
                e.preventDefault();
                break;
            case "F5":
                e.preventDefault();
                break;
            case "F6":
                e.preventDefault();
                break;
            case "F7":
                e.preventDefault();
                break;
            case "F8":
                e.preventDefault();
                break;
            case "F9":
                e.preventDefault();
                break;
            case "F10":
                e.preventDefault();
                break;
            case "F11":
                e.preventDefault();
                break;
            case "F12":
                e.preventDefault();
                break;
            case "NumpadDivide":
                e.preventDefault();
                break;
            case "AltLeft":
                e.preventDefault();
                break;
            case "AltRight":
                e.preventDefault();
                break;
        }
        // console.log(`down ${e.code}`);
        pressedControl("keyDown", e.code, true, layouts);
    };

    const keyUpPressed = (e) => {
        e.preventDefault();
        // console.log(`up ${e.code}`);
        pressedControl("keyUp", e.code, false, layouts);
    };

    const myLayoutMenu = () => {
        if (!auth.user) {
            return toastFireFailed(
                "You must be signed in to continue this feature"
            );
        }
        return dispatch(modalMyLayoutOpen(true));
    };

    useEffect(() => {
        if (usernameSlug != null && layoutSlug !== null) {
            // console.log("UPDATE STATE");
            // dispatch(resetToDefault());
            dispatch(getLayoutTest({ usernameSlug, layoutSlug }));
            // console.log(layouts, "dats");
        } else {
            // dispatch(resetToDefault());
            dispatch(getLayoutTest({ uid: "default" }));
        }
        // layouts = useSelector((state) => state.layoutTest);
    }, []);

    useEffect(() => {
        console.log("LOADED COMPLETED");
        if (layouts.data != null) {
            // console.log(layouts.data);
            //detect key down keyboard
            window.addEventListener("keydown", keyDownPressed);
            //detect key up keyboard
            window.addEventListener("keyup", keyUpPressed);

            dispatch(closeModal());
        }
    }, [layouts.data !== null]);

    // useEffect(() => {
    //     if (layouts.data != null) {
    //         console.log(layouts.data.layout_data);
    //     }
    // }, [layouts]);

    return (
        <div>
            <Header />
            <div className="container mx-auto px-1">
                <div className="w-full body flex justify-center mt-6 z-10 opacity-40 hover:opacity-90 transition-all">
                    <nav className="text-[15px] font-semibold w-[600px] bg-[#181818] shadow-lg border border-[#313131] rounded-md px-5 py-2 flex justify-around">
                        <div
                            className="text-white group hover:text-red-600 font-bold cursor-pointer transition delay-75"
                            onClick={() => {
                                dispatch(reset());
                            }}
                        >
                            <i className="bi bi-arrow-clockwise"></i> Reset
                        </div>
                        <div
                            className="group text-zinc-300 hover:text-white cursor-pointer transition-all self-center"
                            onClick={() => {
                                return setMenu("layout-test");
                            }}
                        >
                            Layout test
                            <div className="w-full flex justify-center">
                                <div
                                    className={`h-0.5 bg-zinc-100 ${
                                        menu == "layout-test"
                                            ? `w-[80%]`
                                            : `w-0`
                                    } group-hover:w-[80%] transition-all duration-300 rounded-md`}
                                ></div>
                            </div>
                        </div>
                        <div
                            className="group text-zinc-300 hover:text-white cursor-pointer transition-all"
                            onClick={() => {
                                return setMenu("skeleton-layout");
                            }}
                        >
                            Skeleton layout
                            <div className="w-full flex justify-center">
                                <div
                                    className={`h-0.5 bg-zinc-100 ${
                                        menu == "skeleton-layout"
                                            ? `w-[80%]`
                                            : `w-0`
                                    } group-hover:w-[80%] transition-all duration-300 rounded-md`}
                                ></div>
                            </div>
                        </div>
                        <div
                            className="text-white group hover:text-[#0d6efd] cursor-pointer transition delay-75"
                            onClick={myLayoutMenu}
                        >
                            My layout
                        </div>
                        {/* <div
                            className="group text-zinc-300 hover:text-white cursor-pointer transition-all"
                            onClick={() => {
                                return setMenu("statistic-test");
                            }}
                        >
                            Statistic test
                            <div className="w-full flex justify-center">
                                <div
                                    className={`h-0.5 bg-zinc-100 ${
                                        menu == "statistic-test"
                                            ? `w-[80%]`
                                            : `w-0`
                                    } group-hover:w-[80%] transition-all duration-300 rounded-md`}
                                ></div>
                            </div>
                        </div> */}

                        {/* <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                            My-layout
                        </div> */}
                    </nav>
                </div>
                <div className="flex justify-center items-center ">
                    {layouts.isLoading == true && (
                        <div className="w-80 h-[300px] flex items-center justify-center">
                            <div className="align-center">
                                <div className="mx-auto w-[35px] h-[35px] border-[6px] border-blue-200 border-t-[6px] border-t-blue-500 rounded-[50%] animate-spin"></div>
                                <div className="text-white mx-auto text-center">
                                    Please wait...
                                </div>
                            </div>
                        </div>
                    )}
                    {layouts.isErrors && (
                        <>
                            <div className="text-lg">{layouts.message}</div>
                        </>
                    )}
                    {/*
                {layouts.data == null && layouts.isLoading == false && (
                    <>
                        <div className="ms-2">
                            There is no layout data yet...
                        </div>
                    </>
                )} */}
                    <div className="-mt-6">
                        {!layouts.isErrors && layouts.isLoading == false ? (
                            layouts.data != null ? (
                                <>
                                    {menu == "layout-test" ? (
                                        <>
                                            <LayoutKeys
                                                layoutScreenhotRef={null}
                                                layout_data={
                                                    layouts.data.layout_data
                                                }
                                                previewMode={true}
                                            />
                                            <div className="relative">
                                                <div className="absolute -bottom-[260px] scale-y-[40%] scale-x-[40%]">
                                                    <SkeletonLayout
                                                        layoutScreenhotRef={
                                                            null
                                                        }
                                                        layout_data={
                                                            layouts.data
                                                                .layout_data
                                                        }
                                                        previewMode={true}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : null}

                                    {menu == "skeleton-layout" ? (
                                        <SkeletonLayout
                                            layoutScreenhotRef={null}
                                            layout_data={
                                                layouts.data.layout_data
                                            }
                                            previewMode={true}
                                        />
                                    ) : null}
                                    {menu == "statistic-test" ? (
                                        <StatisticLayout />
                                    ) : null}
                                </>
                            ) : null
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyboardTest;
