import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from './TodoList';
import flushPromises from 'flush-promises';

// #1 - mocking store
const localVue = createLocalVue();
localVue.use(Vuex);

const mockStore = {
	state: { todos: [] },
	mutations: {
		setTodos: jest.fn(),
	},
	actions: {
		FETCH_TODOS: jest.fn(),
	},
};

// #2 - real store
import realStore from '../../store';

// mock axios
const mockResponse = [
	{ title: 'delectus aut autem' },
	{ title: 'quis ut nam facilis et officia qui' },
];
jest.mock('axios', () => ({
	get: jest.fn(() =>
		Promise.resolve({
			data: mockResponse,
		}),
	),
}));

// factory function
const factory = storeConfig => {
	return shallowMount(TodoList, {
		localVue,
		...storeConfig,
	});
};

describe('TodoList.vue - with mockStore', () => {
	test('fetch data when created', () => {
		factory({ store: new Vuex.Store(mockStore) });
		expect(mockStore.actions.FETCH_TODOS).toHaveBeenCalled();
	});
});

describe('TodoList.vue - with realStore', () => {
	test('fetch data when created', async () => {
		const wrapper = factory({ store: realStore });
		await flushPromises();
		const numberOfFetchedTodoItems = wrapper.findAll('li').length;
		expect(numberOfFetchedTodoItems).toBe(mockResponse.length);
	});
});
