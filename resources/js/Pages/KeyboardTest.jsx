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
import { toastFire, toastFireFailed } from "../Components/utils/Toast";
import { closeModal, modalMyLayoutOpen } from "../Store/Slices/modalSlice";
import Header from "../Components/global-components/Header";
import ChangeLayout from "../Components/keyboard-test/ChangeLayout";
import MenuKeybTest from "../Components/keyboard-test/MenuKeybTest";
import { Helmet } from "react-helmet-async";

const KeyboardTest = ({ usernameSlug, layoutSlug }) => {
    // const loginStatus = false;
    const dispatch = useDispatch();
    const { auth, session } = usePage().props;
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
            // case "Space":
            //     e.preventDefault();
            //     break;
        }
        // console.log(`down ${e.code}`);
        pressedControl("keyDown", e.code, true, layouts);
    };

    const keyUpPressed = (e) => {
        switch (e.code) {
            case "Tab":
                e.preventDefault();
                break;
        }
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

    const changeMenu = (menu) => {
        setMenu(menu);
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
        if (session.status == "success") {
            toastFire(session.message);
            dispatch(closeModal());
        }
    }, [session]);

    useEffect(() => {
        // console.log("LOADED COMPLETED");
        if (layouts.data != null) {
            // console.log(layouts.data);
            //detect key down keyboard
            window.addEventListener("keydown", keyDownPressed);
            //detect key up keyboard
            window.addEventListener("keyup", keyUpPressed);

            dispatch(closeModal());
        }
    }, [layouts.data !== null]);

    return (
        <>
            <Helmet>
                <title>Keyboard Test | Radhianskeys</title>
                <meta
                    name="description"
                    content="Test your computer's mechanical keyboard for free, and you can also create your own computer keyboard layout and design your dream mechanical keyboard."
                ></meta>
                <link rel="canonical" href="/" />
            </Helmet>
            <div className="">
                <Header />
                <div className="container mx-auto px-1">
                    <MenuKeybTest
                        menu={menu}
                        changeMenu={changeMenu}
                        data={layouts.data}
                    />
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
                        <div className="">
                            {!layouts.isErrors && layouts.isLoading == false ? (
                                layouts.data != null ? (
                                    <>
                                        {menu == "layout-test" ? (
                                            <>
                                                <div className="mt-5">
                                                    <LayoutKeys
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
                                                <div className="mt-5 mb-5 scale-90">
                                                    <SkeletonLayout
                                                        layoutScreenhotRef={
                                                            null
                                                        }
                                                        layout_data={
                                                            layouts.data
                                                                .layout_data
                                                        }
                                                        previewMode={true}
                                                        scale={true}
                                                    />
                                                </div>
                                            </>
                                        ) : null}

                                        {menu == "skeleton-layout" ? (
                                            <div className="mt-5">
                                                <SkeletonLayout
                                                    layoutScreenhotRef={null}
                                                    layout_data={
                                                        layouts.data.layout_data
                                                    }
                                                    previewMode={true}
                                                    scale={false}
                                                />
                                            </div>
                                        ) : null}
                                    </>
                                ) : (
                                    <>
                                        {menu != "change-layout" ? (
                                            <div className="w-80 h-[300px] flex items-center justify-center">
                                                <div className="align-center">
                                                    <div className=" flex items-center justify-center">
                                                        <i className="bi bi-database-fill-x text-[60px] text-white"></i>
                                                    </div>
                                                    <div className="text-white font-semibold mx-auto text-center">
                                                        <div>
                                                            Layout not found,
                                                        </div>
                                                        <div>
                                                            select another
                                                            layout
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                                    </>
                                )
                            ) : null}
                            {menu == "change-layout" ? (
                                <ChangeLayout menu={menu} />
                            ) : null}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="fixed bottom-0 w-full">
                        <div className="text-sm text-white ms-1 flex justify-between">
                            <div></div>
                            <div className="pe-1 text-zinc-300 hover:text-white ">
                                © 2024 Radhians-Keys
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KeyboardTest;
