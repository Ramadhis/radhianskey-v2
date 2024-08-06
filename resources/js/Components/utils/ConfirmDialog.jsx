import Swal from "sweetalert2";
import "animate.css";

const confirmButton = Swal.mixin({
    customClass: {
        title: "text-[17px] text-white w-full text-left",
        confirmButton:
            "bg-green-600 p-1 text-white font-semibold rounded-sm px-8 me-2 border border-green-600 text-sm hover:border-white",
        denyButton:
            "bg-red-600 border border-red-600 hover:border-white p-1 text-white font-semibold rounded-sm px-8 text-sm",
        actions: "w-full flex justify-end pe-4 pb-1",
        popup: "bg-[#374151] w-[430px] pt-1",
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
            confirmButtonText:
                "<i class='bi bi-check-circle me-1 text-md'></i>Yes",
            denyButtonText: "<i class='bi bi-x-circle me-1 text-md'></i>No",
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
