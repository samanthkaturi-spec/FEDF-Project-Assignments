function uploadStatus(isUploadSuccessful) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (isUploadSuccessful) {
                resolve(
                    "Image uploaded to WhatsApp Status successfully"
                );
            } else {
                reject("Image upload failed");
            }

        }, 3000);

    });
}

uploadStatus(true)
    .then((result) => {
        console.log(result);
        console.log("Upload process completed");
    })
    .catch((error) => {
        console.log(error);
    });
