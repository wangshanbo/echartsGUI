import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import MetaInfo from 'vue-meta-info'
import WsPlugin from '~/framework/core/ws-plugin'
import { createRouter } from './router'
import createStore from '~/store'
import _ from 'lodash'
//自定义验证器
window._appReadyCbs = []
window.onAppReady = function (cb) {
	window._appReadyCbs.push(cb)
}
	
import plugin0 from '~/plugins/element'
				
import plugin1 from '~/plugins/vuelidate'
				
Vue.use(Vuex)
Vue.use(MetaInfo)
Vue.use(WsPlugin)
const store = createStore();
const router = createRouter();


plugin1 ()
			

		let _app;
	const p = Promise.all([plugin0()])
	p.then(function (v) {
		_app = new Vue({
			router,
			store,
			render: h => h(App)
		});
		window._ws = {};
		_app.$mount('#_ws')
		Vue.nextTick(function () {
			window._appReadyCbs.forEach((cb) => {
				if (typeof cb === 'function') {
					cb(_app)
				}
			})
		})
	})
		

export default _app;