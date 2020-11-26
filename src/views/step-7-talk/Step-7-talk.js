export default {
    name: "StepyTalk",
    data() {
        return {
            videoEnded: false
        }
    },
    mounted() {
        const video = document.getElementById('step-7-talk');
        video.addEventListener('ended', () => {
            // router.push('/step-7')
            console.log('ended');
            this.videoEnded = true;
        });

    }
};