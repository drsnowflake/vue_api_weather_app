<template>
	<fusioncharts
		:type="type"
		:width="width"
		:height="height"
		:dataFormat="dataFormat"
		:dataSource="dataSource"
	>
	</fusioncharts>
</template>

<script>
const dataSource = {
	chart: {
		caption: 'Weather for next 48 hours',
		yaxisname: 'Temperature',
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
	}
};
</script>

<style></style>
