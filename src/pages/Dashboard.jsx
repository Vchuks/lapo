import BarChart from "../components/BarChart";
import CardDist from "../components/CardDist";
import DashboardCardRequest from "../components/DashboardCardRequest";
import LineChart from "../components/LineChart";
import Top from "../components/Top";

const Dashboard = () => {
  return (
    <div className="border border-[#DEDEDF] p-5">
      <Top />
      <div className="flex gap-2">
        <div className="w-full">
          <BarChart />
          <LineChart />
        </div>
        <div className="w-full">
          <DashboardCardRequest />
          <CardDist/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
