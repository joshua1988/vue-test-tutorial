<template>
	<div>
		<news-item @toggle="toggleLike" :item="newsItem"></news-item>
	</div>
</template>

<script>
import NewsItem from './NewsItem.vue';

export default {
	components: {
		NewsItem,
	},
	data() {
		return {
			newsItem: {
				name: 'Marvel',
				liked: false,
			},
		};
	},
	methods: {
		toggleLike(value) {
			this.newsItem.liked = value;
		},
	},
};
</script>

<style></style>
