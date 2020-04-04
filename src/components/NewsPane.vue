<template>
	<span>
		<div>
			<label for="news">Choose your news: </label>
			<select id="news" v-on:change="handleChange">
				<option v-for="category in newsChoices" :key="category">
					{{ category }}
				</option>
			</select>
		</div>
		<div v-if="fetchedNews">
			<article-display
				class="article"
				v-for="(article, index) in fetchedNews.articles"
				:article="article"
				:key="index"
			>
			</article-display>
		</div>
	</span>
</template>

<script>
import ArticleDisplay from './ArticleDisplay';

export default {
	data() {
		return {
			fetchedNews: null,
			newsCategory: null,
			newsChoices: [
				'Business',
				'Entertainment',
				'General',
				'Health',
				'Science',
				'Sports',
				'Technology'
			]
		};
	},
	props: ['userLocation'],
	mounted() {},
	components: {
		'article-display': ArticleDisplay
	},
	methods: {
		handleChange: function() {
			this.fetchedNews = null;
			this.newsCategory = event.target.value.toLowerCase();
			this.fetchArticles();
		},
		fetchArticles: function() {
			fetch(
				`https://newsapi.org/v2/top-headlines?country=${this.userLocation}&pageSize=3&category=${this.newsCategory}&apiKey=${process.env.VUE_APP_API_KEY_NEWS}`
			)
				.then(res => res.json())
				.then(json => (this.fetchedNews = json));
		}
	}
};
</script>

<style>
.article {
	padding-bottom: 10px;
}

select {
	color: rgb(55, 181, 215);
	background-color: rgb(38, 42, 51);
	border: none;
}
</style>
