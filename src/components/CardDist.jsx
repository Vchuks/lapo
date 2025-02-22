import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    cutout: "92%",
    rotation: 90,
    maintainAspectRatio: false,
    plugins:{
        title: {
            display: true,
            text: "Card Status Distribution",
            align: "start",
            color: "#121212",
            padding: {
              top: 10,
              bottom: 10,
            },
            font: {
              size: 18,
              weight: 500,
            },
          },
        legend: {
            position: "bottom",
            align: "center",
            labels: {
              boxWidth: 5,
              boxHeight: 5,
              padding: 20,
              usePointStyle: true,
              pointStyle: "circle",
              textAlign: "center",
              
            },
          },
    }
}
 const data = {
  labels: ['Active', 'Expired' , 'Inactive','Blocked', 'Lost' ],
  datasets: [
    {
      label: '',
      data: [ 40, 5, 3, 2, 2],
      backgroundColor: [
        '#01A4AF','#FFBA24','#014DAF',  '#8020E7', '#FF4457'
      ],
      borderColor: [
        '#01A4AF','#FFBA24','#014DAF',  '#8020E7', '#FF4457'
      ],
      borderWidth: 1,
      borderRadius: 10,
    spacing: 2
    },
  ],
};


const CardDist = () => {
  return (
    <div className="w-full h-[19rem]   bg-white border relative border-[#E2E2E2] my-4 rounded-[12px] py-3 px-5">
      <Doughnut data={data} options={options} />
      <div className='text-center absolute left-[40%] md:left-[45%] lg:left-[40%] xl:left-[42%] top-[40%] xl:top-[45%]'>
        <p className=' text-[12px]'>Total Cards</p>
        <p className='text-[#121212] text-2xl font-[satoshiMedium]'>2,450</p>
      </div>
    </div>
  )
}

export default CardDist
