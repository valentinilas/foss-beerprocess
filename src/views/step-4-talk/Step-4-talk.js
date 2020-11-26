import router from '../../router';

export default {
    name: "Step4Talk",
    mounted() {
        const video = document.getElementById('step-4-talk');
        video.addEventListener('ended', function() {
            router.push('/step-4')
        });

    }
};