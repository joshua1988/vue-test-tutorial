<template>
	<div>
		<ul>
			<li v-for="product in products" :key="product.id">
				<span class="name">{{ $t(product.name) }}</span>
				<span class="date">{{ product.registeredDate | formatDate }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { formatDate } from './filters';

export default {
	filters: {
		formatDate,
	},
	data() {
		return {
			products: [
				{ id: 1, name: 'shoes', price: 300, registeredDate: 1566869976194 },
				{ id: 2, name: 'shirt', price: 120, registeredDate: 1566669976194 },
			],
		};
	},
};
</script>

<style scoped>
span {
	margin: 0 0.2rem;
}
</style>
