/**
 * 
 * @param  {...any} videoUrls 
 * @returns array of video blobs
 */
export const preloadVideos = (...videoUrls) => {
    const videoPromises = videoUrls.map((videoUrl) => {
        return new Promise((resolve) => {
            // fetch(videoUrl)
            //     .then((data) => {
            //         return data.blob();
            //     })
            //     .then(blob => {
            //         resolve(blob);
            //     })

            var xhr = new XMLHttpRequest();
            xhr.open("GET", videoUrl, true);
            xhr.responseType = "blob";

            xhr.addEventListener("load", function() {
                if (xhr.status === 200) {
                    var blob_url = URL.createObjectURL(xhr.response);
                    resolve(blob_url);
                }
            }, false);


            xhr.send();
        })
    })

    return Promise.all(videoPromises);
}






// prefetch_file('https://raw.githubusercontent.com/FilePlayer/test/gh-pages/sw_360_lq.mp4', onSuccess, onProgress, onError)

// function prefetch_file(url,
//                        fetched_callback,
//                        progress_callback,
//                        error_callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.responseType = "blob";

//     xhr.addEventListener("load", function () {
//         if (xhr.status === 200) {
//             var URL = window.URL || window.webkitURL;
//             var blob_url = URL.createObjectURL(xhr.response);
//             fetched_callback(blob_url);
//         } else {
//             error_callback();
//         }
//     }, false);


//     xhr.send();
// }