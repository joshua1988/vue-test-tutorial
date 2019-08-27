<template>
	<div>
		<h1>Ajax</h1>
		<div>
			<p>name: {{ user.name }}</p>
			<p>email: {{ user.email }}</p>
		</div>
		<button @click="fetchUser">get user</button>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			user: {},
		};
	},
	methods: {
		fetchUser() {
			const url = 'https://jsonplaceholder.typicode.com/users/1';
			axios
				.get(url)
				.then(response => {
					const user = response.data;
					this.user = user;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
};
</script>

<style></style>
