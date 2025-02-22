import cal from "../assets/calendar.png";
import card1 from "../assets/credit-card-shield.png";
import card2 from "../assets/credit-card-02.png";
import card3 from "../assets/credit-card-edit.png";
import card8 from "../assets/credit-card-edit2.png";
import card4 from "../assets/credit-card-plus.png";
import card5 from "../assets/credit-card-check.png";
import card6 from "../assets/hourglass-03.png";
import card7 from "../assets/bank-note-01.png";
import card9 from "../assets/alert-circle.png";
import { ArrowTopRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
const Top = () => {
  const quickData = [
    {
      id: "1",
      title: "Manage a  Card",
      pic: card1,
    },
    {
      id: "2",
      title: "Issue Instant Card",
      pic: card2,
    },
    {
      id: "3",
      title: "Issue Personalized Card",
      pic: card3,
    },
    {
      id: "4",
      title: "Review Card Requests",
      pic: card4,
    },
  ];

  const analytics = [
    {
      id: "1",
      pic: card5,
      title: "Total Active Cards",
      amount: "26,478",
      percent: "+9%",
      period: "this month",
    },
    {
      id: "2",
      pic: card8,
      title: "Total Personalized Cards",
      amount: "15,703",
      percent: "8.5%",
      period: "this month",
    },
    {
      id: "3",
      pic: card7,
      title: "Today’s Revenue",
      amount: "9.3M",
      percent: "+6%",
      period: "vs yesterday",
    },
    {
      id: "4",
      pic: card6,
      title: "Pending Requests",
      amount: "38",
      period: null,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="text-[#121212]">
          <h2 className="font-[satoshiBold] text-lg ">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="text-xs">
            Last login: 26/11/2024 <span className="pl-1">14:39:58</span>
          </p>
        </div>
        <div className="flex gap-2 items-center border h-fit border-[#D0D5DD] px-3 py-[6px] text-[11px] text-[#121212] rounded-sm">
          <div className="border-r h-3 border-[#D0D5DD] pr-2 flex gap-2 items-center">
            {" "}
            <img src={cal} alt="" />
            <span className="">Today</span>
          </div>
          <span>11 Nov 2024</span>
        </div>
      </div>
      {/* quick access */}
      <section className="p-4 my-4 bg-white border border-[#E2E2E2] rounded-[10px]">
        <p className="text-[#121212] font-[satoshiMedium]">Your Quick Access</p>
        <div className="pt-4 flex gap-2">
          {quickData.map((each) => (
            <div
              key={each.id}
              className="w-full bg-[#F1F7FF] rounded-sm py-2 px-4 flex items-center gap-3"
            >
              <div className="h-fit rounded-full p-[6px] flex justify-center items-center  bg-[#014DAF]">
                <img src={each.pic} alt="" className="" />
              </div>
              <p className="text-[#121212] text-sm">{each.title}</p>
              <ChevronRightIcon className="text-[#808080]" />
            </div>
          ))}
        </div>
      </section>

      {/* analytics */}
      <section>
        <div className="flex items-center gap-2">
          <h2 className="font-[satoshiBold] text-lg text-black">Analytics</h2>
          <hr className="w-full border-t border-[#D0D5DD]" />
        </div>

        <div className="flex gap-2 pt-3">
            {analytics.map(each => <div key={each.id} className="w-full p-[10px] rounded-[10px] border border-[#E2E2E2] bg-white">
            <img src={each.pic} alt="" className="" />
            <p className="text-sm font-[satoshiMedium] py-1">{each.title}</p>
            <div className="flex items-center justify-between py-2">
              <p className="text-[#121212] text-2xl font-[satoshiBold]">{each.amount}</p>
              {each.percent ? <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-xs bg-[#EFFAF6] rounded py-[3px] px-2 text-[#29A174]">
                  <ArrowTopRightIcon  className="w-3"/>
                  <p>{each.percent}</p>
                </div>
                <p className="text-xs">{each.period}</p>
              </div>: <div className="flex items-center gap-1">
                <img src={card9} alt=""/>
                <p className="text-[#E78020] text-xs">Requires attention </p>
                </div>}
            </div>
          </div> )}
          
        </div>
      </section>
    </div>
  );
};

export default Top;
