import router from '../../router';

export default {
    name: "Step1Talk",
    mounted() {
        const video = document.getElementById('step-1-talk');
        video.addEventListener('ended', function() {
            router.push('/step-1')
        });

    }
};