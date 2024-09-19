import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import confirmButtonFire from "../utils/ConfirmDialog";
import { updateLayoutData } from "../../Store/Slices/main/layoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import checkImageExists from "../helpers/checkImageExists";
import {
    deleteLayout,
    getListLayout,
} from "../../Store/Slices/main/listLayoutSlice";
import { closeModal } from "../../Store/Slices/modalSlice";
import { Link, usePage } from "@inertiajs/inertia-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubmitBtnWithLoading from "../utils/SubmitBtnWithLoading";

const ModalMyLayout = () => {
    const dispatch = useDispatch();
    const { auth, session, errors } = usePage().props;
    const [buttonSave, setButtonSave] = useState(false);
    const list = useSelector((state) => state.listLayout);
    const layout = useSelector((state) => state.layout);
    const modal = useSelector((state) => state.modal);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(0);

    const deleteMyLayout = (nameLayout, uid) => {
        return confirmButtonFire(
            `are you sure want to delete "${nameLayout}" layout ?`,
            () => {
                dispatch(deleteLayout(uid));
                setSelectedRadioBtn(0);
            },
            () => {
                return;
            }
        );
    };

    const open = (e) => {
        e.preventDefault();
        if (selectedRadioBtn == 0) {
            return false;
        } else {
            Inertia.post("/open-layout", { uid: selectedRadioBtn });
        }
    };
    const saveAs = (e) => {
        e.preventDefault();
        setButtonSave(true);
        Inertia.post("/save-as", layout);
    };

    useEffect(() => {
        if (modal.saveAsModal || modal.myLayoutModal) {
            dispatch(getListLayout());
        }
    }, [modal.saveAsModal, modal.myLayoutModal]);

    useEffect(() => {
        setButtonSave(false);
    }, [session, errors]);

    return (
        <div className="lg:w-[768px] md:w-[768px] w-[320px] text-white z-50">
            <div className="font-semibold text-[20px]">My Layout</div>
            {/* <input
                type="text"
                placeholder="Email"
                className="w-full h-9 mt-1 bg-[#1f1f1f] text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 p-2"
                required
            /> */}
            <div className="w-full h-[400px] border border-[#313131] my-1 mt-2 p-1">
                <SimpleBar className="h-full">
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-3">
                        <SkeletonTheme
                            baseColor="#2c2b2c"
                            highlightColor="#444"
                        >
                            {list.isLoading &&
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
                                                  className="object-contain w-full h-full hover:scale-125 hover:transition-all hover:animate-none hover:duration-150 hover:delay-100"
                                                  src={`/images/preview_layout/${val.preview_image}`}
                                                  onError={(e) => {
                                                      return (e.target.src =
                                                          "/images/preview_layout/no-image.png");
                                                  }}
                                              />
                                              <div className="absolute top-0 right-1 invisible group-hover:visible">
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
                                              </div>
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
                                      </label>
                                  );
                              })
                            : null}
                    </div>
                </SimpleBar>
            </div>
            <form onSubmit={modal.saveAsModal ? saveAs : open}>
                {modal.saveAsModal && (
                    <>
                        <div className="relative text-md ring-1 rounded-sm focus:outline-none focus:ring-slate-500 focus:ring-1 mt-4">
                            <label className="inline-block text-[13px] absolute top-[-11px] left-2 bg-[#1f1f1f]">
                                Layout name
                            </label>
                            <input
                                type="text"
                                className=" w-full h-9 mt-1 bg-transparent text-sm ring-1 rounded-sm focus:outline-none focus:ring-transparent focus:ring-1 ring-transparent p-0.5 ps-2"
                                value={layout.name}
                                onChange={(e) => {
                                    dispatch(
                                        updateLayoutData({
                                            name: e.target.value,
                                        })
                                    );
                                }}
                                max={30}
                                min={3}
                                required
                            />
                        </div>
                        {errors.name ? (
                            <div className="text-red-600 text-sm">
                                {errors.name}
                            </div>
                        ) : null}
                    </>
                )}
                <div className="flex justify-end mt-2">
                    {modal.saveAsModal && (
                        // <button
                        //     type="submit"
                        //     className="bg-[#2c508a] rounded-sm px-6 py-1 font-semibold text-sm "
                        // >
                        //     Save layout
                        // </button>
                        <SubmitBtnWithLoading
                            classData={
                                "bg-[#2c508a] rounded-sm px-6 py-1 font-semibold text-sm "
                            }
                            buttonText={"Save layout"}
                            isLoading={buttonSave}
                        />
                    )}
                    {modal.myLayoutModal &&
                        !modal.saveAsModal &&
                        list.data.length > 0 &&
                        selectedRadioBtn != 0 && (
                            <>
                                <a
                                    href={`/${auth.user.name_slug}/${
                                        list.data.find(
                                            (val) => val.uid == selectedRadioBtn
                                        ).name_slug
                                    }`}
                                    className="bg-[#2c508a] me-2 rounded-sm px-6 py-1 font-semibold text-sm "
                                >
                                    <i className="bi bi-play-fill"></i> Run test
                                </a>
                                <a
                                    href={`/create-layout/${selectedRadioBtn}`}
                                    className="bg-[#2c508a] rounded-sm px-6 py-1 font-semibold text-sm "
                                >
                                    <i className="bi bi-folder2-open"></i> Open
                                    layout
                                </a>
                            </>
                        )}
                    {selectedRadioBtn == 0 && !modal.saveAsModal && (
                        <>
                            <button
                                disabled={true}
                                className="bg-[#596b86] me-2 rounded-sm px-6 py-1 font-semibold text-sm cursor-not-allowed"
                            >
                                <i className="bi bi-play-fill"></i> Run test
                            </button>
                            <button
                                disabled={true}
                                className="bg-[#596b86] rounded-sm px-6 py-1 font-semibold text-sm cursor-not-allowed"
                            >
                                <i className="bi bi-folder2-open"></i> Open
                                layout
                            </button>
                        </>
                    )}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            return dispatch(closeModal());
                        }}
                        className="bg-red-600 ms-2 rounded-sm px-6 py-1  font-semibold text-sm "
                    >
                        <i className="bi bi-x-circle"></i> Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalMyLayout;
