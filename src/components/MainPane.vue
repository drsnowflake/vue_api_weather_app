<template>
	<span>
		<fusioncharts
			:type="type"
			:width="width"
			:height="height"
			:dataFormat="dataFormat"
			:dataSource="dataSource"
		>
		</fusioncharts>
		<div class="row">
			<div class="col-9 bottom-panel">
				<news-pane :userLocation="forecastData.city.country.toLowerCase()">
				</news-pane>
			</div>
			<div id="jank-logo" class="col-3 bottom-panel">
				<a href="https://jank.website" target="_blank"
					><img src="../assets/jank_ind.png" alt="Jank Industries Logo"
				/></a>
			</div>
		</div>
	</span>
</template>

<script>
import NewsPane from './NewsPane';

const dataSource = {
	chart: {
		caption: 'Temperature for next 48 hours',
		yaxisname: 'Temp',
		numbersuffix: '°C',
		rotatelabels: '1',
		setadaptiveymin: '1',
		theme: 'candy'
	},
	data: []
};

export default {
	data() {
		return {
			type: 'line',
			width: '90%',
			height: '50%',
			dataFormat: 'json',
			dataSource
		};
	},
	props: ['forecastData'],
	mounted() {
		this.convertData();
	},
	methods: {
		convertData: function() {
			let counter = 1;
			this.forecastData.list.forEach(d => {
				if (counter <= 16) {
					this.dataSource.data.push({
						label: this.formatDate(d.dt_txt),
						value: d.main.temp
					});
				}
				counter++;
			});
		},
		formatDate: function(date) {
			let tempDate = date.substring(5).slice(0, -3);
			let newDate =
				tempDate[3] +
				tempDate[4] +
				'-' +
				tempDate[0] +
				tempDate[1] +
				tempDate.slice(5);
			return newDate;
		}
	},
	components: {
		'news-pane': NewsPane
	}
};
</script>

<style>
.bottom-panel {
	padding-top: 25px;
}

#jank-logo {
	padding-top: 100px;
	padding-left: 5px;
}
</style>
