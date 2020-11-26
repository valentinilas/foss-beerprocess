import router from '../../router';

export default {
    name: "Step6Talk",
    mounted() {
        const video = document.getElementById('step-6-talk');
        video.addEventListener('ended', function() {
            router.push('/step-6')
        });

    }
};