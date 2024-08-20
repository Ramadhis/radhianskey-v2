import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import confirmButtonFire from "../../../../utils/ConfirmDialog";
import { Inertia } from "@inertiajs/inertia";
import { deleteThemeById } from "../../../../../Store/Slices/main/keyThemeSlice";
import { modalCreateNewThemeOpen } from "../../../../../Store/Slices/modalSlice";

const CustomOptionCaseTheme = ({
    value,
    label,
    data,
    children,
    innerProps,
    isDisabled,
    isFocused,
    isSelected,
}) => {
    const { auth } = usePage().props;
    const dispatch = useDispatch();
    const keyThemeList = useSelector((state) => state.keyTheme);

    const editTheme = () => {
        return console.log("tes edit");
    };
    const deleteTheme = (id, label) => {
        confirmButtonFire(
            `Are you sure want delete "${label}" theme ?`,
            () => {
                // dispatch(deleteThemeById({ id: id }));
                const keyThemeArr = [...keyThemeList];
                const findState = keyThemeArr.findIndex((val) => {
                    return val.id === id;
                });
                keyThemeArr.splice(findState, 1);
                Inertia.post("key-theme/update", {
                    keyThemeData: keyThemeArr,
                });
                return console.log("succcess");
            },
            () => {
                return console.log("cancel");
            }
        );
        return false;
        // return console.log("tes delete");
    };

    return (
        <div
            {...innerProps}
            className={` py-1 text-white ${
                isFocused || isSelected ? `bg-slate-500` : `bg-[#181818]`
            } whitespace-nowrap cursor-pointer ps-2 flex justify-between max-h-11 overflow-y-auto`}
        >
            <div className="inline-block whitespace-nowrap overflow-x-hidden">{`${children}`}</div>
            {auth.user && auth.user.id == data.createdBy ? (
                <div
                    className={`inline-block pe-2 ps-2 ${
                        isFocused || isSelected
                            ? `bg-slate-500`
                            : `bg-[#181818]`
                    } `}
                >
                    <button
                        className="hover:text-green-500 inline-block pe-1"
                        onClick={(e) => {
                            e.stopPropagation();
                            // dispatch(modalCreateNewThemeOpen());
                        }}
                    >
                        <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                        className="hover:text-red-500 inline-block"
                        onClick={(e) => {
                            e.stopPropagation();
                            // deleteTheme(data.id, label);
                        }}
                    >
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default CustomOptionCaseTheme;
