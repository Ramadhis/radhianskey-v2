import React from "react";
import AddRowBtn from "./AddRowBtn";
import SaveBtn from "./SaveBtn";
import DeleteKeysBtn from "./DeleteKeysBtn";
import NewLayoutBtn from "./NewLayoutBtn";
import SelectType from "./SelectType";

const MenuMain = ({ layoutScreenhotRef }) => {
    return (
        <div className="ps-1 pt-2 pb-1 pe-2 w-full z-[1] bg-[#1f1f1f] top-0 right-0">
            <div className="flex justify-between">
                <div>
                    <AddRowBtn />

                    <SaveBtn
                        saveType={"save"}
                        layoutScreenhotRef={layoutScreenhotRef}
                    />
                    <SaveBtn
                        saveType={"save-as"}
                        layoutScreenhotRef={layoutScreenhotRef}
                    />
                    <DeleteKeysBtn />
                </div>
                <div>
                    <NewLayoutBtn />
                </div>
            </div>
            <hr className="mt-2 mb-1"></hr>
            <SelectType />
        </div>
    );
};

export default MenuMain;
