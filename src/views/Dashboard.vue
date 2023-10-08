<script setup>
import { Bar, Pie, Doughnut, Line } from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    ArcElement, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    ArcElement ,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const barChartData = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    datasets: 
    [
        {
            label: 'Monthly Sales',
            backgroundColor: '#f87979',
            data: [50, 60, 45, 50, 34, 34, 79, 89, 90, 70, 50, 65]
        }
    ]
};

const pieChartData = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
};

</script>
<template>
  
    <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            Total Active Products
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            This Months Sales
        </div>
        <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            This months Waste
        </div>
    </div>
    <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <Bar class="w-full" :data="barChartData" :options="chartOptions" />
    </div>
    <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <Pie :data="pieChartData" :options="chartOptions" />
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <Doughnut :data="pieChartData" :options="chartOptions" />
        </div>
    </div>
    <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <Line :data="barChartData" :options="chartOptions" />
    </div>

</template>
