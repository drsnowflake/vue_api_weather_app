<template>
	<span>
		<div>
			<primary-app></primary-app>
		</div>
		<kanye-quote></kanye-quote>
	</span>
</template>

<script>
import KanyeQuote from './components/KanyeQuote';
import PrimaryApp from './components/PrimaryApp';

export default {
	components: {
		'kanye-quote': KanyeQuote,
		'primary-app': PrimaryApp,
	},
};
</script>

<style>
body {
	padding: 2%;
}
</style>
