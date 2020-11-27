import router from '../../router';

export default {
    name: "StepyTalk",
    mounted() {
        const video = document.getElementById('step-7-talk');
        video.addEventListener('ended', () => {
            router.push('/step-7?ended=true')
        });

    }
};