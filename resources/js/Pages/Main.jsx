import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Main = () => {
    const [isDraggingPortrait, setIsDraggingPortrait] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
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
                            <div className="text-white w-full h-full ms-2 flex justify-between items-center">
                                <div className="w-40 text-lg font-semibold">
                                    Radhians-Keys
                                </div>
                                <div className="px-2 bg-[#1f1f1f] w-80 h-7 lg:block md:block hidden relative overflow-hidden group rounded-sm hover:scale-110 delay-150 ease-in-out duration-300">
                                    <div className="animate-spin-slow group-hover:animate-none transition-all group-hover:delay-100 group-hover::duration-150 w-96 h-20 m-auto -left-3 right-0 bg-white absolute"></div>
                                    <a
                                        href="#"
                                        className="inset-[1px] bg-[#1c1e20] absolute flex justify-center items-center text-[11px] rounded-sm "
                                    >
                                        Test your keyboard here...
                                    </a>
                                </div>{" "}
                                {/*Test your keyboard here...*/}
                                <div className="h-full flex items-center group">
                                    <div className="me-2 text-sm font-semibold">
                                        Ramadhiansyah
                                    </div>
                                    <a href="#" className="pe-6">
                                        <img
                                            alt="name"
                                            src="https://i.stack.imgur.com/HgkK0.png"
                                            class="object-none w-8 h-8 rounded-full inline border-2"
                                        />
                                    </a>
                                    <div className="bg-[#1f1f1f] border border-zinc-300  w-36 h-20 z-30 absolute top-9 right-5 rounded text-black hidden group-hover:block group-hover:transition">
                                        <div className="hover:bg-[#2c508a] mt-2 text-zinc-300 ps-2">
                                            <a href="#">Account setting</a>
                                        </div>
                                        <div className="hover:bg-[#2c508a] mt-2 text-zinc-300 ps-2">
                                            <a href="#">Sign out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <div
                                        className="w-full h-full overflow-hidden hover:overflow-auto"
                                        style={{
                                            scrollbarWidth: "thin",
                                            scrollbarColor: "#616161 #66000000",
                                        }}
                                    >
                                        <div className="h-full p-1">
                                            <div className="menu my-1 text-zinc-300">
                                                <div className="bg-gray-700 w-full p-1 rounded-t-sm text-sm font-medium">
                                                    Edit keys
                                                </div>
                                                <div className="accor-body h-auto bg-[#1f1f1f] rounded-b-sm  p-1 border-s border-b border-e border-gray-700">
                                                    <div className="w-full mt-1">
                                                        <label className="text-sm">
                                                            Keys legend (Max 10
                                                            character)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="keys..."
                                                            className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                                        />
                                                    </div>
                                                    <div className="w-full mt-1">
                                                        <label className="text-sm">
                                                            On key pressed
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="On key pressed..."
                                                            className="w-full h-7 bg-[#1f1f1f] text-sm ring-1 rounded-md focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                                                        />
                                                    </div>
                                                    <div className="w-full mt-3 mb-3 text-right">
                                                        <a
                                                            href="#"
                                                            className="bg-[#2c508a] p-1 rounded-sm px-2 h-4 text-sm font-medium "
                                                        >
                                                            Apply
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu my-1 text-zinc-300">
                                                <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                                                    Edit column menu
                                                </div>
                                                <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                                                    content
                                                </div>
                                            </div>
                                            <div className="menu my-1 text-zinc-300">
                                                <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                                                    Edit column menu
                                                </div>
                                                <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                                                    content
                                                </div>
                                            </div>
                                            <div className="menu my-1 text-zinc-300">
                                                <div className="bg-gray-700 w-full p-1 rounded-t-sm">
                                                    Edit column menu
                                                </div>
                                                <div className="accor-body bg-[#1f1f1f] rounded-b-sm h-40 p-1 border-s border-b border-e border-gray-700">
                                                    content
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                            <div
                                                className="overflow-auto h-full p-2 text-[#678f9c] pe-11 pb-11"
                                                style={{
                                                    scrollbarWidth: "thin",
                                                    scrollbarColor:
                                                        "#616161 #66000000",
                                                }}
                                            >
                                                <div className="mt-1 divide-y divide-gradient-to-r from-indigo-500">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="bg-[#2c508a] p-1 rounded-sm px-7 h-4 text-sm text-white font-medium hover:"
                                                        >
                                                            + Row
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="bg-[#2c508a] ms-2 p-1 rounded-sm px-7 h-4 text-sm text-white font-medium hover:"
                                                        >
                                                            + Save
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="bg-[#2c508a] ms-2 p-1 rounded-sm px-7 h-4 text-sm text-white font-medium "
                                                        >
                                                            + Reverse option
                                                            position
                                                        </a>
                                                    </div>
                                                    <div className="mt-2"></div>
                                                </div>
                                                <label className="text-sm mt-1 text-zinc-300">
                                                    Right click to delete
                                                    items/keys
                                                </label>
                                                <div className="w-screen h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                                <div className="w-2/3 h-14 overflow-hidden mt-2 bg-gray-700 border rounded-sm"></div>
                                            </div>
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
                                            <div
                                                className=" h-full text-[#678f9c] overflow-hidden hover:overflow-auto "
                                                style={{
                                                    scrollbarWidth: "thin",
                                                    scrollbarColor:
                                                        "#616161 #66000000",
                                                }}
                                            >
                                                {" "}
                                                <div className=" text-sm ps-1 pe-3 pt-3 pb-2 w-full fixed bg-[#181818]">
                                                    <div className="ms-4 mt-2 text-zinc-300 hover:text-white inline">
                                                        PREVIEW LAYOUT
                                                    </div>
                                                    {/* <div className="ms-4 mt-1 text-zinc-300 hover:text-white inline">PREVIEW LAYOUT</div> */}

                                                    {/* <hr /> */}
                                                </div>
                                                <div className="w-screen h-48 overflow-hidden bg-gray-700 border rounded-sm ms-4 me-11 mt-12 mb-11"></div>
                                            </div>
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
                            <div className="text-sm text-white ms-1">
                                © 2023 Radhians-Keys
                            </div>
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
        </>
    );
};

export default Main;
