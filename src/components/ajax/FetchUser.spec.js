import { shallowMount } from '@vue/test-utils';
import FetchUser from './FetchUser.vue';
import flushPromises from 'flush-promises';

// mock data for axios
const mockData = {
	name: 'Leanne Graham',
	email: 'Sincere@april.biz',
};

// mock axios
jest.mock('axios', () => ({
	get: jest.fn(() =>
		Promise.resolve({
			data: mockData,
		}),
	),
}));

const factory = values =>
	shallowMount(FetchUser, {
		data() {
			return {
				...values,
			};
		},
	});

describe('FetchUser.vue', () => {
	let wrapper, button;

	beforeEach(async () => {
		wrapper = factory();
		button = wrapper.find('button');
		button.trigger('click');
		await flushPromises();
	});

	test('button click fetches user data', () => {
		const fetchedUser = wrapper.vm.user;
		expect(fetchedUser).toEqual(mockData);
	});

	test('fetched name must be displayed on the first <p> tag', () => {
		const pTag = wrapper.findAll('p').at(0);
		const displayedName = pTag.text();
		expect(displayedName).toBe(`name: ${mockData['name']}`);
	});
});
