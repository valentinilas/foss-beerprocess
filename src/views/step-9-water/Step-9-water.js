import router from '../../router';

export default {
    name: "Step9",
    mounted() {
        const video = document.getElementById('step-9');
        video.addEventListener('ended', function() {
            router.push('/step-7-talk')
        });

    }
};