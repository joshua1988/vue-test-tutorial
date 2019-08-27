import { mount } from '@vue/test-utils';
import UserList from './UserList';

const mockUserItems = [
	{ name: 'John', id: 1 },
	{ name: 'Sarah', id: 2 },
	{ name: 'Paul', id: 3 },
];
const factory = () =>
	mount(UserList, {
		propsData: {
			items: mockUserItems,
		},
	});

describe('UserList.vue', () => {
	test('props passed from the parent should be rendered on tags', () => {
		const wrapper = factory();
		const userItemTags = wrapper.findAll('.user-item');
		expect(userItemTags.length).toBe(mockUserItems.length);
	});
});
