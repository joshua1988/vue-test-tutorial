<template>
	<div>
		<h1>Number Counter</h1>
		<div>
			<p id="result">{{ counter }}</p>
			<button @click="increaseCounter">increase</button>
		</div>
		<div>
			<input type="text" @keydown.enter="decreaseCounter" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
			username: '',
		};
	},
	methods: {
		increaseCounter() {
			this.counter = this.counter + 1;
		},
		decreaseCounter() {
			this.counter = this.counter - 1;
		},
	},
};
</script>

<style></style>
