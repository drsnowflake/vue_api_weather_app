<template>
	<span>
		<span v-if="!location"> .... waiting for user location </span>
		<display-temp-data
			v-if="location"
			:timezone="timezone"
			:location="location"
		></display-temp-data>
	</span>
</template>

<script>
import DisplayTemperatureData from './DisplayTemperatureData';

export default {
	data() {
		return {
			location: null,
			timezone: null
		};
	},
	mounted() {
		navigator.geolocation.getCurrentPosition(pos => {
			this.location = pos;
		});
	},
	components: {
		'display-temp-data': DisplayTemperatureData
	}
};
</script>

<style></style>
