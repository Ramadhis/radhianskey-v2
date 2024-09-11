import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Components/global-components/Header";
import LayoutSearchList from "../Components/layout-search/LayoutSearchList";
import MenuSearch from "../Components/layout-search/MenuSearch";
import { useDispatch, useSelector } from "react-redux";
import { usePage } from "@inertiajs/inertia-react";
import { getSearchLayout } from "../Store/Slices/layout-search/SearchLayoutSlice";
import Pagination from "../Components/utils/Pagination";

const LayoutSearch = () => {
    const dispatch = useDispatch();
    const { auth, session } = usePage().props;
    const searchLayout = useSelector((state) => state.searchLayout);

    useEffect(() => {
        dispatch(getSearchLayout());
    }, []);

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
                        Home / Layout
                    </div>
                </div>
                <div className="border border-zinc-600 px-3 py-4 bg-[#181818] rounded-md">
                    <MenuSearch />
                    <hr className="mt-3 border-zinc-500" />
                    {searchLayout.isLoading == false &&
                    searchLayout.isErrors == false ? (
                        searchLayout.data.data != null ? (
                            <>
                                <LayoutSearchList
                                    list={searchLayout.data.data}
                                />
                                {/* <Pagination
                                    pagination={searchLayout.data.links}
                                /> */}
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
            </div>
        </>
    );
};

export default LayoutSearch;
