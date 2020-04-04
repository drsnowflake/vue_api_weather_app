<template>
	<span>
		<div id="header">Current Weather</div>
		<span id="temp">
			{{ weatherData.main.feels_like.toFixed(1) }}
			<span id="degc">°C</span>
		</span>

		<div id="description">{{ weatherData.weather[0].description }}</div>
		<div class="row">
			<div class="col-5 temp-display">
				<minmax-display
					:temp="this.weatherData.main.temp_max.toFixed(1)"
					:title="'High'"
				></minmax-display>
			</div>
			<div class="col-5 temp-display">
				<minmax-display
					:temp="this.weatherData.main.temp_min.toFixed(1)"
					:title="'Low'"
				></minmax-display>
			</div>
		</div>
		<div id="timestamp">
			<i class="fas fa-calendar-alt"></i> {{ timeStamp }}
		</div>
		<div id="location">
			<i class="fas fa-map-marker-alt"></i> {{ weatherData.name }},
			{{ weatherData.sys.country }}
		</div>
		<div id="latlong">
			Lat: {{ weatherData.coord.lat }}
			<p>Long: {{ weatherData.coord.lon }}</p>
		</div>
	</span>
</template>

<script>
import MinMaxDisplay from './MinMaxDisplay';

export default {
	data() {
		return {
			timeStamp: null
		};
	},
	props: ['weatherData', 'timezone'],
	components: {
		'minmax-display': MinMaxDisplay
	},
	mounted() {
		this.getNow();
		setInterval(this.getNow, 2000);
	},
	methods: {
		getNow: function() {
			const weekday = new Array();
			weekday[0] = 'Sun';
			weekday[1] = 'Mon';
			weekday[2] = 'Tues';
			weekday[3] = 'Wed';
			weekday[4] = 'Thur';
			weekday[5] = 'Fri';
			weekday[6] = 'Sat';
			const month = new Array();
			month[0] = 'Jan';
			month[1] = 'Feb';
			month[2] = 'Mar';
			month[3] = 'Apr';
			month[4] = 'May';
			month[5] = 'Jun';
			month[6] = 'Jul';
			month[7] = 'Aug';
			month[7] = 'Sep';
			month[8] = 'Aug';
			month[9] = 'Oct';
			month[10] = 'Nov';
			month[11] = 'Dec';
			const today = new Date();
			const date =
				weekday[today.getDay()] +
				', ' +
				today.getDate() +
				' ' +
				month[today.getMonth()] +
				', ' +
				today.getFullYear();
			// function fixedMinutes() was needed as today.getMinutes() is returned as a single digit if below 10
			const fixedMinutes = function() {
				const minutesNow = today.getMinutes();
				if (minutesNow < 10) {
					return '0' + minutesNow;
				} else {
					return minutesNow;
				}
			};
			const time = today.getHours() + 1 + ':' + fixedMinutes();
			const dateTime = date + ' ' + time;
			this.timeStamp = dateTime;
		}
	}
};
</script>

<style>
.temp-display {
	font-size: 1.2em;
}
#header {
	font-size: 1.5em;
}

#temp {
	font-size: 4em;
	line-height: 225px;
	position: relative;
}

#degc {
	line-height: 230px;
	font-size: 0.5em;
	position: absolute;
}

#description {
	margin: 0px;
	top: 190px;
	position: absolute;
}

#timestamp {
	padding-top: 55px;
}

#triangle {
	opacity: 0.5;
}

#latlong {
	opacity: 0.5;
}
</style>
