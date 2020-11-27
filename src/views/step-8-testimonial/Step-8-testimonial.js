import router from '../../router';

export default {
    name: "Step8",
    mounted() {
        const video = document.getElementById('step-8');
        video.addEventListener('ended', function() {
            router.push('/step-7?ended=true')
        });

    }
};