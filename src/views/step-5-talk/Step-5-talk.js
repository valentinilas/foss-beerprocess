import router from '../../router';

export default {
    name: "Step5Talk",
    mounted() {
        const video = document.getElementById('step-5-talk');
        video.addEventListener('ended', function() {
            router.push('/step-5')
        });

    }
};