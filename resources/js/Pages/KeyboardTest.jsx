import React, { useEffect, useRef } from "react";
import AuthHeaderTemplate from "../Components/auth/AuthHeaderTemplate";
import {
    addPressed,
    getLayoutTest,
} from "../Store/Slices/keyboard-test/layoutTestSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LayoutKeys from "../Components/global-components/LayoutKeys";

const KeyboardTest = () => {
    // const loginStatus = false;
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.layoutTest);
    const layoutScreenhotRef = useRef(null);

    const pressedControl = (code, pressed) => {
        const layoutData = JSON.parse(
            JSON.stringify(layouts.data.layout_data.layoutData)
        );
        layoutData.forEach((element, index) => {
            element.column.forEach((elements, index2) => {
                if (elements.onKeyPress.value == code) {
                    dispatch(
                        addPressed({
                            indexRow: index,
                            indexColumn: index2,
                            pressed: pressed,
                        })
                    );
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
        pressedControl(e.code, true);
    };

    const keyUpPressed = (e) => {
        e.preventDefault();
        // console.log(`up ${e.code}`);
        pressedControl(e.code, false);
    };

    useEffect(() => {
        dispatch(getLayoutTest({ uid: "default" }));
    }, []);

    useEffect(() => {
        console.log("LOADED COMPLETED");
        if (layouts.data != null) {
            //detect key down keyboard
            window.addEventListener("keydown", keyDownPressed);
            //detect key up keyboard
            window.addEventListener("keyup", keyUpPressed);
        }
    }, [layouts.data !== null]);

    // useEffect(() => {
    //     if (layouts.data != null) {
    //         console.log(layouts.data.layout_data);
    //     }
    // }, [layouts]);

    return (
        <div>
            <div className="Header flex justify-between p-2">
                <div className="flex grow-0 items-center">
                    <div className="text-[25px] font-bold text-white">
                        Radhianskey
                    </div>
                    <div className="text-white text-[17px] ms-5 me-1">
                        Create-layout
                    </div>
                    <div className="text-white text-[17px] mx-1">menu 2</div>
                </div>
                <div className="">
                    <AuthHeaderTemplate />
                </div>
            </div>
            <div className="container mx-auto px-1">
                <div className="w-full body flex justify-center mt-14 z-10 opacity-40 hover:opacity-90 transition-all">
                    <div className="w-[600px] bg-[#181818] shadow-lg border border-[#313131] rounded-md px-5 py-2 flex justify-around">
                        <div className=" text-white hover:text-red-600 font-bold cursor-pointer transition-all delay-75">
                            <i className="bi bi-arrow-clockwise"></i> Reset
                        </div>
                        <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                            Layout-test
                        </div>
                        <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                            Skeleton-layout
                        </div>
                        <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                            Statistic-test
                        </div>
                        <div className="text-zinc-300 hover:text-white cursor-pointer transition-all">
                            My-layout
                        </div>
                    </div>
                </div>
                <div className="flex justify-center content-center -m-10">
                    <SkeletonTheme baseColor="#2c2b2c" highlightColor="#444">
                        {layouts.isLoading == true && (
                            <div className="w-80 h-32 mt-20">
                                <Skeleton className="h-40" />
                            </div>
                        )}
                    </SkeletonTheme>
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

                    {!layouts.isErrors && layouts.isLoading == false ? (
                        layouts.data != null ? (
                            <LayoutKeys
                                layoutScreenhotRef={null}
                                layout_data={layouts.data.layout_data}
                                previewMode={true}
                            />
                        ) : null
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default KeyboardTest;
