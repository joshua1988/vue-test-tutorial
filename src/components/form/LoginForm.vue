<template>
	<div>
		<h1>Login Form</h1>
		<form @submit.prevent="submitForm">
			<div>
				<label for="email">email:</label>
				<input id="email" type="text" v-model="email" />
			</div>
			<div>
				<label for="password">password:</label>
				<input id="password" type="password" v-model="password" />
			</div>
			<button type="submit" :disabled="isFormInvalid">login</button>
		</form>
		<p>{{ loginResult }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			loginResult: '',
			isFormSubmitted: false,
		};
	},
	computed: {
		isFormInvalid() {
			return !this.email || !this.password;
		},
	},
	methods: {
		submitForm() {
			if (this.email === 'test@abc.com' && this.password === '1234') {
				this.loginResult = this.email + ' logged in';
				this.isFormSubmitted = true;
			}
		},
	},
};
</script>

<style></style>
