import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import SideMenu from "../Components/main/side-menu-panel/SideMenu";
import Header from "../Components/main/header-panel/Header";
import MainLayout from "../Components/main/main-panel/MainLayout";
import PreviewLayout from "../Components/main/preview-panel/PreviewLayout";
import Footer from "../Components/main/footer-panel/Footer";
import ListKeysProvider, { useListKeys } from "../Context/listKeys";

const Main = () => {
    const [isDraggingPortrait, setIsDraggingPortrait] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <ListKeysProvider>
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
                                    className="relative z-10"
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
                                            <MainLayout />
                                        </Panel>
                                        <PanelResizeHandle
                                            onDragging={setIsDragging}
                                            className="relative z-10"
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
                                            minSize={20}
                                            maxSize={80}
                                            defaultSize={30}
                                        >
                                            <PreviewLayout />
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
        </ListKeysProvider>
    );
};

export default Main;
