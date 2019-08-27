import { shallowMount } from '@vue/test-utils';
import NumberCounter from './NumberCounter.vue';

describe('NumberCounter.vue - Mouse', () => {
	test('header must be displayed on rendering', () => {
		const wrapper = shallowMount(NumberCounter);
		const headerText = wrapper.find('h1').text();
		expect(headerText).toBe('Number Counter');
	});

	test('button click will increase the counter by 1', () => {
		const wrapper = shallowMount(NumberCounter);
		// mock the button click
		const button = wrapper.find('button');
		button.trigger('click');
		// access the data to verify
		const counter = wrapper.vm.counter;
		expect(counter).toBe(1);
	});

	test('button click will display the increased counter on <p> tag', () => {
		const wrapper = shallowMount(NumberCounter);
		// mock the button click
		const button = wrapper.find('button');
		button.trigger('click');
		const pTagText = wrapper.find('#result').text();
		expect(pTagText).toBe('1');
	});
});

describe('NumberCounter.vue - Keyboard', () => {
	test('Enter on input decreases the counter by 1', () => {
		const wrapper = shallowMount(NumberCounter);
		const input = wrapper.find('input');
		input.trigger('keydown.enter');
		const counter = wrapper.vm.counter;
		expect(counter).toBe(-1);
	});
});
