<template>
	<span>
		<span v-if="forecastData">
			<div class="jumbotron">
				<div class="row">
					<div class="col-3">
						<side-pane
							v-if="weatherData"
							:weatherData="weatherData"
						></side-pane>
					</div>
					<div class="col-9">
						<main-pane v-if="forecastData" :forecastData="forecastData">
						</main-pane>
					</div>
				</div>
			</div>
		</span>
	</span>
</template>

<script>
import SidePane from './SidePane';
import MainPane from './MainPane';

export default {
	data() {
		return {
			weatherData: null,
			forecastData: null
		};
	},
	props: ['location', 'timezone'],
	mounted() {
		this.locationCall();
		this.forecastCall();
	},
	components: {
		'side-pane': SidePane,
		'main-pane': MainPane
	},
	methods: {
		locationCall: function() {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&appid=${process.env.VUE_APP_API_KEY_WEATHER}&units=metric`
			)
				.then(res => res.json())
				.then(json => (this.weatherData = json));
		},
		forecastCall: function() {
			fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${this.location.coords.latitude}&lon=${this.location.coords.longitude}&appid=${process.env.VUE_APP_API_KEY_WEATHER}&units=metric`
			)
				.then(res => res.json())
				.then(json => (this.forecastData = json));
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
	width: 1000px;
	color: rgb(246, 246, 246);
}
</style>
