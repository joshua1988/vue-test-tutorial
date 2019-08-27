<template>
	<div>
		<ul>
			<li v-for="todoItem in todoItems" :key="todoItem.id">
				{{ todoItem.title }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			result: [],
		};
	},
	computed: {
		todoItems() {
			return this.$store.state.todos;
		},
	},
	async created() {
		const response = await this.$store.dispatch('FETCH_TODOS');
		this.result = response;
	},
};
</script>

<style></style>
