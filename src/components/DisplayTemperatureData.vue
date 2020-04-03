<template>
	<span>
		<span v-if="loading"> is fetching from api </span>
		<span v-if="weatherData">
			<div class="jumbotron">
				<div class="row">
					<div class="col-3">
						<current-weather
							:timezone="timezone"
							:weatherData="weatherData"
						></current-weather>
					</div>
					<div class="col-9">
						{{ weatherData }}
					</div>
				</div>
			</div>
		</span>
	</span>
</template>

<script>
import CurrentWeatherData from './CurrentWeatherData';

export default {
	data() {
		return {
			weatherData: null,
			loading: true
		};
	},
	props: ['location', 'timezone'],
	mounted() {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&appid=${process.env.VUE_APP_API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(json => (this.weatherData = json))
			.then((this.loading = false))
			.then(console.log(this.location));
	},
	components: {
		'current-weather': CurrentWeatherData
	}
};
</script>

<style>
.temp-display {
	margin-top: auto;
}

.jumbotron {
	padding: 2em 2em;
	height: 500px;
}
</style>
