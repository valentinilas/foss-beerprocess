import router from '../../router';

export default {
    name: "Step3TalkHowTo",
    mounted() {
        const video = document.getElementById('step-3-talk-howto');
        video.addEventListener('ended', function() {
            router.push('/step-3?ended=true')
        });

    }
};