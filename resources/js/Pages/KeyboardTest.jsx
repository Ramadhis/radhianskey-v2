import React, { useEffect, useRef } from "react";
import AuthHeaderTemplate from "../Components/auth/AuthHeaderTemplate";
import { getLayoutTest } from "../Store/Slices/keyboard-test/layoutTestSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LayoutKeys from "../Components/global-components/LayoutKeys";

const KeyboardTest = () => {
    // const loginStatus = false;
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.layoutTest);
    const layoutScreenhotRef = useRef(null);
    useEffect(() => {
        dispatch(getLayoutTest({ uid: "default" }));
    }, []);

    // useEffect(() => {
    //     console.log(layouts.data.layout_data);
    // }, [layouts]);

    return (
        <>
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
            <div className="flex justify-center -m-10">
                <SkeletonTheme baseColor="#2c2b2c" highlightColor="#444">
                    {layouts.isLoading &&
                        [...Array(6)].map((val, index) => {
                            return (
                                <div className="h-32" key={index}>
                                    <Skeleton className="h-32" />
                                    <Skeleton />
                                    <Skeleton
                                    // className="pt-1 pb-1"
                                    // height={2}
                                    />
                                </div>
                            );
                        })}
                </SkeletonTheme>
                {layouts.isErrors && (
                    <>
                        <div className="text-lg">{layouts.message}</div>
                    </>
                )}

                {layouts.data == null &&
                    layouts.isLoading == false &&
                    layouts.isErrors == false && (
                        <>
                            <div className="ms-2">
                                There is no layout data yet...
                            </div>
                        </>
                    )}

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
        </>
    );
};

export default KeyboardTest;
