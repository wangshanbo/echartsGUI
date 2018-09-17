import ElementUI from 'element-ui';
import Vue from 'vue'
export default function () {
    return new Promise((resolve, reject) => {
        Vue.use(ElementUI)
        resolve()
    })
}
