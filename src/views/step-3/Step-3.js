import router from '../../router';

export default {
    name: "Step3",
    data() {
        return {
            ended: false
        }
    },
    mounted() {
        if (router.currentRoute.query.ended) {
            this.ended = true;
        }
    }
};