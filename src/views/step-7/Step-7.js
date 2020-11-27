import router from '../../router';


export default {
    name: "Step7",
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