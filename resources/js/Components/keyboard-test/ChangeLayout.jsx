import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@inertiajs/inertia-react";
import { getListDefaultLayout } from "../../Store/Slices/keyboard-test/defaulLayoutSlice";

const ChangeLayout = ({ menu }) => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.defaultLayout);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(0);

    useEffect(() => {
        if (menu == "change-layout") {
            dispatch(getListDefaultLayout());
        }
    }, [menu]);

    return (
        <div className="lg:w-[1024px] md:w-[768px] w-[320px] text-white mt-12">
            {/* <div className="rounded-sm ms-4 me-4 mb-11 p-2 border">Change</div> */}
            <div className="w-full border border-zinc-600 my-1 mt-2 p-1 bg-[#181818]">
                <SimpleBar className="h-full">
                    <div className="w-full h-[400px] grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-3">
                        <SkeletonTheme
                            baseColor="#2c2b2c"
                            highlightColor="#444"
                        >
                            {list.isLoading &&
                                [...Array(4)].map((val, index) => {
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
                        {list.isErrors && (
                            <>
                                <div className="text-lg">{list.message}</div>
                            </>
                        )}

                        {list.data.length < 1 && list.isLoading == false && (
                            <>
                                <div className="ms-2">
                                    There is no layout data yet...
                                </div>
                            </>
                        )}

                        {!list.isErrors && list.isLoading == false
                            ? list.data.map((val, index) => {
                                  return (
                                      <label
                                          key={index}
                                          className="bg-blue-400 h-32 border group border-white hover:border-[#2c508a] hover:border-2 hover:scale-[98%] transition-all delay-100 cursor-pointer"
                                      >
                                          <a
                                              href={`/radhians/${val.name_slug}`}
                                          >
                                              <div className="overflow-hidden w-full h-full relative">
                                                  <input
                                                      type="radio"
                                                      className="peer hidden"
                                                      value={val.uid}
                                                      checked={
                                                          val.uid ==
                                                          selectedRadioBtn
                                                              ? true
                                                              : false
                                                      }
                                                      onChange={(e) => {
                                                          return setSelectedRadioBtn(
                                                              e.target.value
                                                          );
                                                      }}
                                                  />
                                                  <img
                                                      className="object-contain w-full h-full hover:scale-110 hover:transition-all hover:animate-none hover:duration-150 hover:delay-100"
                                                      src={`/images/preview_layout/${val.preview_image}`}
                                                  />
                                                  {/* <div className="absolute top-0 right-1 invisible group-hover:visible">
                                                  <button
                                                      className="hover:text-red-500 text-[20px]"
                                                      onClick={() => {
                                                          deleteMyLayout(
                                                              val.name,
                                                              val.uid
                                                          );
                                                      }}
                                                  >
                                                      <i className="bi bi-trash-fill"></i>
                                                  </button>
                                              </div> */}
                                                  <div className="absolute bottom-1 left-0 rounded-md hidden group-hover:block peer-checked:block peer-checked:text-[#2c508a] text-sm px-1">
                                                      <i className="bi bi-check2-circle text-[23px] font-extrabold my-[-10px]"></i>
                                                  </div>
                                              </div>
                                              <div className="w-full mt-1 text-sm overflow-hidden whitespace-nowrap">
                                                  {val.name}
                                              </div>
                                              <div className="text-[11px]">
                                                  Last update {val.updated_date}
                                              </div>
                                          </a>
                                      </label>
                                  );
                              })
                            : null}
                    </div>
                </SimpleBar>
                <a href="/layout-search" className="w-full">
                    <button className="w-full h-9 bg-blue-500 hover:bg-white rounded-sm border font-semibold border-white hover:border-blue-500 text-center hover:text-blue-500 cursor-pointer px-2">
                        Load more layout
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ChangeLayout;
