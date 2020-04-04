<template>
	<span id="fc">
		<fusioncharts
			:type="type"
			:width="width"
			:height="height"
			:dataFormat="dataFormat"
			:dataSource="dataSource"
		>
		</fusioncharts>
		<div class="row">
			<div class="col-4">Another Graph</div>
			<div class="col-4">Another Graph</div>
			<div class="col-4">Another Graph // maybe move kanye quote here</div>
		</div>
	</span>
</template>

<script>
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
	}
};
</script>

<style>
#fc-9 {
	padding-bottom: 25px;
}
</style>
