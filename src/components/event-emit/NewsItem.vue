<template>
	<div>
		<p class="feed-item">{{ item.name }}</p>
		<label for="like">Do you like this topic? Yes: </label>
		<input
			type="checkbox"
			id="like"
			:checked="item.liked"
			@change="checkItem"
		/>
	</div>
</template>

<script>
export default {
	props: {
		item: Object,
	},
	methods: {
		checkItem(event) {
			this.$emit('toggle', event.target.checked);
		},
	},
};
</script>

<style scoped>
.feed-item {
	font-size: 1.25rem;
}
</style>
