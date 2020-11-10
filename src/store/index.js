import Vue from 'vue'
import Vuex from 'vuex'
import { preloadVideos } from "../methods/preload-videos";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loaded: true,
        videos: []
    },
    mutations: {
        setVideoUrls(state, payload) {
            state.videos = payload;
            state.loaded = true;
        }
    },
    actions: {
        preload(state) {
            preloadVideos(
                "media/sample.mp4",
                "media/videos/sample2.mp4",
                "media/videos/sample3.mp4",
                "media/videos/sample4.mp4",
                "media/videos/sample5.mp4",
                "media/videos/sample6.mp4"
            ).then(data => {
                console.log(data);
                state.commit('setVideoUrls', data);
            });
        }
    },
    getters: {
        getVideos(state) {
            return state.videos;
        },
        getLoadedStatus(state) {
            return state.loaded;
        }
    }
})