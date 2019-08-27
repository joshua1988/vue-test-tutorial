import Vue from 'vue';
import App from './App.vue';
// TODO: uncomment for vuex test code
import store from './store';
// TODO: uncomment for 3rd-party test code
import i18n from './translation';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	// TODO: uncomment for vuex test code
	store,
	// TODO: uncomment for 3rd-party test code
	i18n,
}).$mount('#app');
