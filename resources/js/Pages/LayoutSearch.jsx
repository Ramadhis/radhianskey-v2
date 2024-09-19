import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/global-components/Header";
import LayoutSearchList from "../Components/layout-search/LayoutSearchList";
import MenuSearch from "../Components/layout-search/MenuSearch";
import { useDispatch, useSelector } from "react-redux";
import { usePage } from "@inertiajs/inertia-react";
import Pagination from "../Components/utils/Pagination";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getSearchLayout } from "../Store/Slices/layout-search/searchLayoutSlice";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const LayoutSearch = () => {
    const dispatch = useDispatch();
    const { auth, session } = usePage().props;
    const searchLayout = useSelector((state) => state.searchLayout);
    const url = new URL(location); //pagination

    useEffect(() => {
        dispatch(getSearchLayout({ url: url.searchParams }));
        // console.log(url.searchParams);
    }, []);
    // console.log(searchLayout);

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
            </div>
            <div className="container mx-auto lg:px-24 mt-16 md:px-5 px-1 mb-10">
                <div className="mb-5">
                    <div className="text-[30px] text-zinc-200 font-semibold">
                        Layout Search
                    </div>
                    <div className="text-md mt-2 text-zinc-200">
                        <a href="/" className="text-blue-500 underline">
                            Home
                        </a>{" "}
                        / Layout Search
                    </div>
                </div>
                <div className="border border-zinc-600 px-3 py-4 bg-[#181818] rounded-md">
                    <MenuSearch />
                    <hr className="mt-3 border-zinc-500" />
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
                        <SkeletonTheme
                            baseColor="#2c2b2c"
                            highlightColor="#444"
                        >
                            {searchLayout.isLoading &&
                                [...Array(9)].map((val, index) => {
                                    return (
                                        <div key={index}>
                                            <Skeleton className="h-40" />
                                            <Skeleton />
                                            <Skeleton
                                            // className="pt-1 pb-1"
                                            // height={2}
                                            />
                                        </div>
                                    );
                                })}
                        </SkeletonTheme>
                        {searchLayout.isErrors && (
                            <>
                                <div className="text-lg">{list.message}</div>
                            </>
                        )}

                        {searchLayout.isLoading == false &&
                        searchLayout.isErrors == false &&
                        searchLayout.data !== null ? (
                            searchLayout["data"] !== undefined ? (
                                <>
                                    {searchLayout["data"]["data"] !==
                                    undefined ? (
                                        searchLayout["data"]["data"].length <
                                        1 ? (
                                            <div className="font-semibold text-zinc-200 mt-8 md:col-span-6 col-span-1 ms-2 text-center">
                                                Layout not found, try searching
                                                with other keywords
                                            </div>
                                        ) : (
                                            // <LazyLoadComponent>
                                            <LayoutSearchList
                                                list={searchLayout.data.data}
                                            />
                                            // </LazyLoadComponent>
                                        )
                                    ) : (
                                        <div className="md:cols-span-3 cols-span-1 ms-2">
                                            There is no layout data yet...
                                        </div>
                                    )}
                                </>
                            ) : null
                        ) : null}

                        {/* {!searchLayout.isErrors &&
                    searchLayout.isLoading == false &&
                    searchLayout.data.data.length > 0 ? (
                        <>
                            <LayoutSearchList list={searchLayout.data.data} />
                            <Pagination pagination={searchLayout.data.links} />
                        </>
                    ) : null} */}
                    </div>
                    <div className="mt-14">
                        {searchLayout.isLoading == false &&
                        searchLayout.isErrors == false &&
                        searchLayout.data !== null ? (
                            searchLayout["data"] !== undefined ? (
                                <>
                                    {searchLayout["data"]["data"] !==
                                    undefined ? (
                                        <Pagination
                                            pagination={searchLayout.data.links}
                                        />
                                    ) : null}
                                </>
                            ) : null
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutSearch;
