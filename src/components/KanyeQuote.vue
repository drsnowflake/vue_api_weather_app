<template>
	<div>
		<span id="kanyeheader">Kanye Quote</span>
		<span> -- New quote every 30 seconds, you lucky thing you</span>
		<h6 v-if="currentQuote">"{{ currentQuote }}"</h6>
		<button class="btn btn-primary btn-sm" @click="newQuote()">
			Get a new Quote
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentQuote: null
		};
	},
	mounted() {
		this.newQuote();
		setInterval(this.newQuote, 30000);
	},
	methods: {
		newQuote: function() {
			fetch('https://api.kanye.rest')
				.then(res => res.json())
				.then(json => (this.currentQuote = json.quote));
		}
	}
};
</script>

<style>
#kanyeheader {
	font-size: 1.5em;
}
</style>
