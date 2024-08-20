const checkImageExists = async (url) => {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        // console.log(true);
        return true;
    } else {
        img.onload = () => {
            // console.log(true);
            return true;
        };

        img.onerror = () => {
            // console.log(false);
            return false;
        };
    }
};

export default checkImageExists;
