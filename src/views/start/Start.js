export default {
    name: "PageStart",

    computed: {
        videoUrl() {
            return this.$store.getters.getVideos[0];
        }
    },

    // mounted() {
    //     const videoBlob = this.$store.getters.getVideos[0];
    //     let objectURL = URL.createObjectURL(videoBlob);
    //     document.getElementById('step-start').play();
    // }
};


// (async function(){
//     const res = await fetch('http://xxxx.mp4')
//     const blob = await res.blob()
//     const src = window.URL.createObjectURL(blob)
//     const el = document.getElementById('video')
//     el.src = src
//     el.play()
//   })()