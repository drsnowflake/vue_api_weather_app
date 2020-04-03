<template>
	<span>
		<div>
			<weather-pane></weather-pane>
		</div>
		<kanye-quote></kanye-quote>
	</span>
</template>

<script>
import KanyeQuote from './components/KanyeQuote';
import WeatherPane from './components/WeatherPane';

export default {
	components: {
		'kanye-quote': KanyeQuote,
		'weather-pane': WeatherPane
	}
};
</script>

<style>
body {
	width: 95%;
	padding: 2%;
}
</style>
