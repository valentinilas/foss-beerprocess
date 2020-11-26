import router from '../../router';

export default {
    name: "Step2Talk",
    mounted() {
        const video = document.getElementById('step-2-talk');
        video.addEventListener('ended', function() {
            router.push('/step-2')
        });

    }
};