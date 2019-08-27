import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

const factory = values =>
	shallowMount(LoginForm, {
		data() {
			return {
				...values,
			};
		},
	});

describe('LoginForm.vue', () => {
	test('Invalid password disables the login button', () => {
		const wrapper = factory({ email: 'test@abc.com', password: null });
		const loginButton = wrapper.find('button');
		const isLoginButtonDisabled = loginButton.element.disabled;
		expect(isLoginButtonDisabled).toBeTruthy();
	});

	test('Valid inputs can submit the form', () => {
		const wrapper = factory({ email: 'test@abc.com', password: '1234' });
		const loginButton = wrapper.find('button');
		loginButton.trigger('submit');
		const isFormSubmitted = wrapper.vm.isFormSubmitted;
		expect(isFormSubmitted).toBeTruthy();
	});

	test('Authenticated email is displayed on <p> tag', () => {
		const mockEmail = 'test@abc.com';
		const wrapper = factory({ email: mockEmail, password: '1234' });
		const emailInput = wrapper.find('#email');
		emailInput.trigger('submit');
		const resultText = wrapper.find('p').text();
		expect(resultText).toBe(`${mockEmail} logged in`);
	});
});
