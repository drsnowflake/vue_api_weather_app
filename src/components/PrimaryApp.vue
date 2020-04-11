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
			newLocation: null,
			oldLocation: null,
			loading: true,
			finishedLoading: false,
			componentKey: 0
		};
	},
	mounted() {
		this.getLocation();
		setInterval(this.checkLocation, 5000);
	},
	components: {
		'display-temp-data': DisplayTemperatureData
	},
	methods: {
		checkLocation: function() {
			navigator.geolocation.getCurrentPosition(this.testLoc);
		},
		getLocation: function() {
			navigator.geolocation.getCurrentPosition(
				this.getLocationSuccess,
				this.getLocationError
			);
		},
		getLocationSuccess: function(pos) {
			this.updateTown(pos);
			this.location = pos;
			this.loading = false;
			this.finishedLoading = true;
		},
		getLocationError: function(err) {
			this.loading = false;
			this.errorMessage = err.message;
		},
		testLoc: function(pos) {
			console.log('checking');
			this.getTown(pos);
			if (this.newLocation == null || this.oldLocation == null) {
				return;
			} else {
				if (this.newLocation != this.oldLocation) {
					console.log('Change detected');
					console.log('Old Location:', this.oldLocation);
					console.log('New Location:', this.newLocation);
					this.location = pos;
					this.oldLocation = this.newLocation;
					this.componentKey += 1;
					console.log('Forcing Refresh');
				}
			}
		},
		getTown: function(pos) {
			fetch(
				`https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
			)
				.then(res => res.json())
				.then(json => (this.newLocation = json.city));
		},
		updateTown: function(pos) {
			fetch(
				`https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
			)
				.then(res => res.json())
				.then(json => (this.oldLocation = json.city));
		}
	}
};
</script>

<style></style>
