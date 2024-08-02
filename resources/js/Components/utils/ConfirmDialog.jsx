import Swal from "sweetalert2";
import "animate.css";

const confirmButton = Swal.mixin({
    customClass: {
        title: "text-[20px] text-white",
        confirmButton:
            "bg-green-600 p-1 text-white font-semibold rounded-sm px-6 me-2",
        denyButton: "bg-red-600 p-1 text-white font-semibold rounded-sm px-6",
        actions: "w-[150px]",
        popup: "bg-[#374151]",
    },
    buttonsStyling: false,
});

const confirmButtonFire = (titleText, confirmed, denied) => {
    confirmButton
        .fire({
            title: titleText,
            // background: "#374151 border border-white",
            // border: "1px solid white",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
            showClass: {
                popup: "animate__animated animate__fadeIn animate__faster",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOut animate__faster",
            },
        })
        .then((result) => {
            if (result.isConfirmed) {
                confirmed();
            } else if (result.isDenied) {
                denied();
            }
        });
};
export default confirmButtonFire;
