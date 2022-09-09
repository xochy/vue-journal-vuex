import Vue from "vue";

// axios
import axios from "axios";

const axiosIns = axios.create({
    // You can add your headers here
    // ================================
    baseURL: "https://vue-demos-c48a4-default-rtdb.firebaseio.com/",
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
