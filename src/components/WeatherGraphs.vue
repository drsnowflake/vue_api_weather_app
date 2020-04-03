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
		caption: 'Weather coming up',
		yaxisname: 'Temperature',
		numbersuffix: ' C',
		rotatelabels: '1',
		setadaptiveymin: '1',
		theme: 'fusion'
	},
	data: []
};

export default {
	data() {
		return {
			type: 'line',
			width: '100%',
			height: '100%',
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
			this.forecastData.list.forEach(d =>
				this.dataSource.data.push({
					label: d.dt_txt,
					value: d.main.temp
				})
			);
		}
	}
};
</script>

<style></style>
