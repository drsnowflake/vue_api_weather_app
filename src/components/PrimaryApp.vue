<template>
	<span>
		<span v-if="loading"> .... waiting for user location </span>
		<span v-if="errorMessage"> {{ errorMessage }}</span>
		<display-temp-data
			v-if="finishedLoading"
			:location="location"
			:key="componentKey"
		></display-temp-data>
	</span>
</template>

<script>
import DisplayTemperatureData from './DisplayTemperatureData';

export default {
	data() {
		return {
			location: null,
			errorMessage: null,
			loading: true,
			finishedLoading: false,
			componentKey: 0
		};
	},
	mounted() {
		this.getLocation();
		setInterval(this.checkLocation, 2000);
	},
	components: {
		'display-temp-data': DisplayTemperatureData
	},
	methods: {
		checkLocation: function() {
			navigator.geolocation.getCurrentPosition(this.testLoc);
		},
		getLocation: function() {
			navigator.geolocation.getCurrentPosition(this.success, this.error);
		},
		success: function(pos) {
			this.location = pos;
			this.loading = false;
			this.finishedLoading = true;
		},
		error: function(err) {
			this.loading = false;
			this.errorMessage = err.message;
		},
		testLoc: function(pos) {
			if (pos.coords.latitude != this.location.coords.latitude) {
				console.log('Change detected');
				console.log('Old Lat:', this.location.coords.latitude);
				console.log('New Lat:', pos.coords.latitude);
				this.location = pos;
				this.componentKey += 1;
				console.log('Forcing Refresh');
			}
		}
	}
};
</script>

<style></style>
