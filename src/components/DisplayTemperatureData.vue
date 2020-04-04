<template>
	<span>
		<span v-if="loading"> is fetching from api </span>
		<span v-if="forecastData">
			<div class="jumbotron">
				<div class="row">
					<div class="col-3">
						<side-pane :weatherData="weatherData"></side-pane>
					</div>
					<div class="col-9">
						<weather-graphs :forecastData="forecastData"> </weather-graphs>
					</div>
				</div>
			</div>
		</span>
	</span>
</template>

<script>
import SidePane from './SidePane';
import WeatherGraphs from './WeatherGraphs';

export default {
	data() {
		return {
			weatherData: null,
			forecastData: null,
			loading: true
		};
	},
	props: ['location', 'timezone'],
	mounted() {
		this.fetch1();
		this.fetch2();
	},
	components: {
		'side-pane': SidePane,
		'weather-graphs': WeatherGraphs
	},
	methods: {
		fetch1: function() {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&appid=${process.env.VUE_APP_API_KEY}&units=metric`
			)
				.then(res => res.json())
				.then(json => (this.weatherData = json));
		},
		fetch2: function() {
			fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&appid=${process.env.VUE_APP_API_KEY}&units=metric`
			)
				.then(res => res.json())
				.then(json => (this.forecastData = json))
				.then((this.loading = false));
		}
	}
};
</script>

<style>
.temp-display {
	margin-top: auto;
}

.jumbotron {
	background-color: rgb(38, 42, 51);
	padding: 2em 2em;
	height: 500px;
	color: rgb(246, 246, 246);
}
</style>
