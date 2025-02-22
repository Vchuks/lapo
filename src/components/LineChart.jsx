import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension: 0.3,
  plugins: {
    legend:{
        display: false
    },
    title: {
      display: true,
      text: "This Week's Income",
      align: "start",
      color: "#121212",
      padding: {
        top: 10,
        bottom: 40,
      },
      font: {
        size: 18,
        weight: 500,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grace: "7%",
      max: 100,
      ticks: {
        maxTicksLimit: 7,

        font: {
          family: "satoshiRegular",
        },
      },
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const data = {
  labels,
  datasets: [
    
    {
      label: "",
      data: [60, 0, 50, 80, 40, 20, 80],
      borderColor: "#4DAF01",
    },
  ],
};
const LineChart = () => {
  return (
    <div className="w-full h-64 bg-white border relative border-[#E2E2E2] my-4 rounded-[12px] py-3 px-5">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
