<template>
	<span>
		<span class="triangle" v-if="icon">{{ icon }} </span>{{ temp }}°c
	</span>
</template>

<script>
export default {
	data() {
		return {
			icon: null
		};
	},
	props: ['title', 'temp'],
	mounted() {
		if (this.title === 'High') {
			this.icon = '▲';
		} else {
			this.icon = '▼';
		}
	}
};
</script>

<style>
.triangle {
	opacity: 0.5;
}
</style>
