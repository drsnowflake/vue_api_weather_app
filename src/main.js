import Vue from 'vue';
import App from './App.vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import VueFusionCharts from 'vue-fusioncharts';

Charts(FusionCharts);
FusionTheme(FusionCharts);

Vue.use(VueFusionCharts, FusionCharts);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');
