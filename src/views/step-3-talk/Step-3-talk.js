import router from '../../router';

export default {
    name: "Step3Talk",
    mounted() {
        const video = document.getElementById('step-3-talk');
        video.addEventListener('ended', function() {
            router.push('/step-3')
        });

    }
};