<template>
	<div v-if="fixedTitle">
		{{ fixedTitle }} - via
		<a :href="article.url" target="_blank">{{ article.source.name }}</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fixedTitle: null
		};
	},
	props: ['article'],
	mounted() {
		this.trimArticle();
	},
	methods: {
		trimArticle: function() {
			return (this.fixedTitle = this.article.title.substr(
				0,
				this.article.title.lastIndexOf('-')
			));
		}
	}
};
</script>

<style>
a {
	color: rgb(55, 181, 215);
}
</style>
