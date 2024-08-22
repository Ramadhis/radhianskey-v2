import React, { useState, useRef, useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import SideMenu from "../Components/main/side-menu-panel/SideMenu";
import Header from "../Components/main/header-panel/Header";
import MainLayout from "../Components/main/main-panel/MainLayout";
import PreviewLayout from "../Components/main/preview-panel/PreviewLayout";
import Footer from "../Components/main/footer-panel/Footer";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../Store/Slices/modalSlice";
import ModalLayout from "../Components/template-layout/ModalLayout";
import ModalMyLayout from "../Components/auth/ModalMyLayout";
import { usePage } from "@inertiajs/inertia-react";
import { toastFire, toastFireFailed } from "../Components/utils/Toast";
import { updateLayoutData } from "../Store/Slices/main/layoutSlice";
import startingLayout from "../Store/Slices/format-data/starting-layout";
import {
    addMultipleKeyTheme,
    getListKeyTheme,
    deleteAllTheme,
} from "../Store/Slices/main/keyThemeSlice";
import ModalCreateKeyTheme from "../Components/main/side-menu-panel/partial-components/ModalCreateKeyTheme";
import {
    getListCaseTheme,
    deleteAllCaseTheme,
} from "../Store/Slices/main/caseThemeSlice";
import ModalCreateCaseTheme from "../Components/main/side-menu-panel/partial-components/ModalCreateCaseTheme";

const Main = ({ data, globalKeyTheme, privateKeyTheme }) => {
    const dispatch = useDispatch();
    const { auth, errors, session } = usePage().props;
    const modalState = useSelector((state) => state.modal);
    const [isDraggingPortrait, setIsDraggingPortrait] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const layoutScreenhotRef = useRef(null);

    useEffect(() => {
        if (session.status == "success") {
            toastFire(session.message);
            if (modalState.saveAsModal == true) {
                dispatch(
                    updateLayoutData({
                        uid: session.data.uid, //set uid to global state
                    })
                );
            }
            dispatch(closeModal());
        }
        if (auth.user == null) {
            dispatch(updateLayoutData({ ...startingLayout }));
            dispatch(closeModal());
        }
    }, [session]);

    useEffect(() => {
        if (errors.message) {
            return toastFireFailed(errors.message);
        }
    }, [errors]);

    useEffect(() => {
        // console.log(auth.user);
        if (data != null && auth.user != null) {
            dispatch(
                updateLayoutData({
                    uid: data.uid,
                    name: data.name,
                    description: data.description,
                    preview_image: data.preview_image,
                    layout_data: JSON.parse(data.layout_data),
                })
            );
            dispatch(closeModal());
        }

        // if (globalKeyTheme) {
        //     let globalKeyThemes = JSON.parse(globalKeyTheme);
        //     dispatch(addMultipleKeyTheme(globalKeyThemes));
        //     if (auth.user && auth.user.roles != "admin") {
        //         dispatch(getListKeyTheme());
        //     }
        // }

        // if (privateKeyTheme && auth.user != null) {
        //     let privateKeyThemes = JSON.parse(privateKeyTheme);
        //     console.log(privateKeyThemes, "private");
        //     dispatch(addMultipleKeyTheme(privateKeyThemes));
        // }
    }, []);

    useEffect(() => {
        // if (globalKeyTheme) {
        //     let globalKeyThemes = JSON.parse(globalKeyTheme);
        //     dispatch(addMultipleKeyTheme(globalKeyThemes));
        //     if (auth.user && auth.user.roles != "admin") {
        //         dispatch(getListKeyTheme());
        //     }
        // }
        dispatch(deleteAllTheme()); //keyTheme
        dispatch(deleteAllCaseTheme());
        if (auth.user) {
            dispatch(getListKeyTheme());
            dispatch(getListCaseTheme());
        }
    }, [auth]);

    return (
        <>
            <PanelGroup direction="horizontal" className="w-full h-screen">
                <Panel className="h-screen" minSize={20} defaultSize={40}>
                    <PanelGroup direction="vertical">
                        <Panel
                            className="bg-[#1f1f1f] w-full mx-auto "
                            defaultSize={6}
                            minSize={6}
                        >
                            <Header />
                        </Panel>
                        <PanelResizeHandle disabled={true}>
                            <div className="w-full h-px bg-[#313131]"></div>
                        </PanelResizeHandle>
                        <Panel
                            className="bg-cyan-300"
                            defaultSize={93}
                            minSize={93}
                        >
                            <PanelGroup
                                direction="horizontal"
                                className="w-full h-full"
                            >
                                <Panel
                                    className="bg-[#181818]"
                                    minSize={10}
                                    maxSize={30}
                                    defaultSize={15}
                                >
                                    <SideMenu />
                                </Panel>
                                <PanelResizeHandle
                                    onDragging={setIsDraggingPortrait}
                                    className="relative z-[14]"
                                >
                                    <div className="absolute w-2 h-full bg-transparent group">
                                        <div
                                            className="w-px h-full bg-[#313131] group-hover:bg-[#0078d4] group-hover:w-1 data-[is-dragging='true']:bg-[#0078d4] data-[is-dragging='true']:w-1 transition-all"
                                            data-is-dragging={
                                                isDraggingPortrait
                                            }
                                        ></div>
                                    </div>
                                </PanelResizeHandle>
                                <Panel defaultSize={85} className="w-max-full">
                                    <PanelGroup direction="vertical">
                                        <Panel
                                            className="bg-[#1f1f1f] w-full mx-auto ps-2 pb-1"
                                            defaultSize={70}
                                        >
                                            <MainLayout
                                                layoutScreenhotRef={
                                                    layoutScreenhotRef
                                                }
                                            />
                                        </Panel>
                                        <PanelResizeHandle
                                            onDragging={setIsDragging}
                                            className="relative z-[14]"
                                            //w-screen border-b-2 hover:border-b-4 hover:border-orange-700 focus:border-orange-700  border-transparent
                                        >
                                            <div className="absolute w-full h-2 bg-transparent group">
                                                <div
                                                    className="w-full h-px bg-[#313131] group-hover:bg-[#0078d4] group-hover:h-1 data-[is-dragging='true']:bg-[#0078d4] data-[is-dragging='true']:h-1 transition-all"
                                                    data-is-dragging={
                                                        isDragging
                                                    }
                                                ></div>
                                            </div>
                                        </PanelResizeHandle>
                                        <Panel
                                            className="bg-[#181818] w-full mx-auto pb-1"
                                            minSize={10}
                                            maxSize={90}
                                            defaultSize={30}
                                        >
                                            <PreviewLayout
                                                layoutScreenhotRef={
                                                    layoutScreenhotRef
                                                }
                                            />
                                        </Panel>
                                    </PanelGroup>
                                </Panel>
                            </PanelGroup>
                        </Panel>
                        <PanelResizeHandle disabled={true}>
                            <div className="w-full h-px bg-[#313131]"></div>
                        </PanelResizeHandle>
                        <Panel
                            className="bg-[#1f1f1f] w-full mx-auto"
                            defaultSize={3}
                            minSize={3}
                        >
                            <Footer />
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>

            <>
                {/* modal */}
                <ModalLayout
                    open={modalState.saveAsModal}
                    close={() => {
                        dispatch(closeModal());
                    }}
                >
                    <ModalMyLayout />
                </ModalLayout>
                <ModalLayout
                    open={modalState.createKeyThemeModal}
                    close={() => {
                        dispatch(closeModal());
                    }}
                >
                    <ModalCreateKeyTheme
                    // modalCreateNewThemeOpen={modalState.createNewThemeModal}
                    />
                </ModalLayout>

                <ModalLayout
                    open={modalState.createCaseThemeModal}
                    close={() => {
                        dispatch(closeModal());
                    }}
                >
                    <ModalCreateCaseTheme />
                </ModalLayout>
            </>
        </>
    );
};

export default Main;
