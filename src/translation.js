import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
	en: {
		shoes: 'BTS shoes',
		shirt: 'BTS shirt',
	},
	ko: {
		shoes: '방탄소년단 신발',
		shirt: '방탄소년단 셔츠',
	},
};

export default new VueI18n({
	locale: 'en', // set locale
	fallbackLocale: 'en',
	messages, // set locale messages
});
