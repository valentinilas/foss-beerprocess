export default {
    name: 'Navigation',
    methods: {
        toggleFSMode() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                this.$emit('fs', 'scale-up');

            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.$emit('fs', 'scale-down');
                }
            }

        }
    }

}