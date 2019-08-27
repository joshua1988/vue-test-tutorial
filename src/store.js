import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [],
	},
	mutations: {
		setTodos(state, todos) {
			state.todos = todos;
		},
	},
	actions: {
		async FETCH_TODOS({ commit }) {
			const url = 'https://jsonplaceholder.typicode.com/todos';
			const response = await axios.get(url);
			commit('setTodos', response.data);
			return response;
		},
	},
});
