import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteRow } from "../../../../Store/Slices/main/layoutSlice";
import { resetSelection } from "../../../../Store/Slices/main/selectionKeySlice";
import confirmButtonFire from "../../../utils/ConfirmDialog";

const DeleteRow = ({ indexRow }) => {
    const dispatch = useDispatch();

    const updateDeleteRow = () => {
        confirmButtonFire(
            `Are you sure want to delete row ${indexRow + 1} ?`,
            () => {
                //confirmed
                dispatch(deleteRow({ indexRow: indexRow }));
                return dispatch(resetSelection());
            },
            () => {
                //denied
                return;
            }
        );
    };

    return (
        <button
            onClick={updateDeleteRow}
            className="absolute -left-5 -top-5 hidden group-hover:block w-6 h-6 mt-1 rounded-full bg-red-600 cursor-pointer text-white hover:text-red-600 hover:bg-white border border-white hover:border-red-600 "
        >
            <div className="w-full h-full flex items-center justify-center ">
                <i
                    className="bi bi-x-lg text-[10px] "
                    style={{ WebkitTextStroke: "1px" }}
                ></i>
            </div>
        </button>
    );
};

export default DeleteRow;
