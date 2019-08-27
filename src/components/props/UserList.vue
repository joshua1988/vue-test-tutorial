<template>
	<ul>
		<li class="user-item" v-for="(item, index) in items" :key="index">
			{{ item.name }}
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		items: Array,
	},
};
</script>

<style></style>
