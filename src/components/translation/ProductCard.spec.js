import { shallowMount } from '@vue/test-utils';
import ProductCard from './ProductCard';
import i18n from '../../translation';
// filter function
import { formatDate } from './filters';

const mockProducts = [
	{ id: 0, name: 'shoes', price: 520, registeredDate: 1566869976194 },
];
const factory = values =>
	shallowMount(ProductCard, {
		data() {
			return {
				...values,
			};
		},
		// real implementation
		i18n,
	});

describe('ProductCard.vue', () => {
	let wrapper;
	beforeEach(() => (wrapper = factory({ products: mockProducts })));

	test('product registered date should be formatted through filter function', () => {
		const displayedDate = wrapper.find('.date').text();
		const filteredDate = formatDate(mockProducts[0].registeredDate);
		expect(displayedDate).toBe(filteredDate);
	});

	test('product name should be translated', () => {
		const displayedText = wrapper.find('.name').text();
		const translatedText = i18n.t(mockProducts[0].name);
		expect(displayedText).toBe(translatedText);
	});
});

describe('ProductCard.vue - mock i18n', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(ProductCard, {
			data() {
				return { products: mockProducts };
			},
			// mock translate
			mocks: {
				$t: () => {},
			},
		});
	});

	test('product registered date should be formatted through filter function', () => {
		const displayedDate = wrapper.find('.date').text();
		const filteredDate = formatDate(mockProducts[0].registeredDate);
		expect(displayedDate).toBe(filteredDate);
	});
});
