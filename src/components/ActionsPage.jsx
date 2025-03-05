import { useContext, useState } from "react";

import Input from "./Input";
import ActionModal from "./ActionModal";
import { useForm } from "react-hook-form";
import { CardData } from "../context/CardContext";
import download from "../assets/download.png";
import load from "../assets/loading.png";
import cube from "../assets/cube.png";
import packageicon from "../assets/package.png";
import tick2 from "../assets/package.png";

const ActionsPage = () => {
  const { register } = useForm();
  const [actionModal, setActionModal] = useState(false);
  const { view, state } = useContext(CardData);
  
 
  const btnArray = [
    {
      id: "1",
      pic: download,
      text: "Download for Production",
      bg: "bg-[#344054]",
     
    },
    {
      id: "2",
      pic: load,
      text: `Mark as In Progress`,
      bg: "bg-[#B54708]",
     

    },
    {
      id: "3",
      pic: cube,
      text: "Mark as Ready",
      bg: "bg-[#067647]",
     
    },
    {
      id: "4",
      pic: packageicon,
      text: "Send to Dispatch",
      bg: "bg-[#8020E7]",
      
    },
    {
      id: "5",
      pic: tick2,
      text: "Mark as Acknowledged",
      bg: "bg-[#014DAF]",
      
    },
  ];

  const statusStyle = {
    Ready: "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]",
    InProgress: "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
    Acknowledged: "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]",
    Pending: "bg-[#F9FAFB] text-[#344054] border-[#EAECF0]",
  };

  const renderStatusCell = (status) => {
    console.log(status);
    const statusClass =
      statusStyle[status] || "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]"; // Fallback class for unknown status
    return (
      <span
        className={`rounded-[16px] w-fit border px-6 py-[8px]  ${statusClass}`}
      >
        {status}
      </span>
    );
  };

  console.log(state.isActive)

  return (
    <div className="py-3 px-3 md:px-5">
      <h2 className="font-[satoshiBold] text-[#101828] text-lg">
        Request Details
      </h2>
      <p className="text-sm pb-2 pt-1 text-[#475467]">
        Perform predetermined actions on card requests here.
      </p>
      <div className="bg-white rounded-[10px] border border-[#E2E2E2] p-3 py-5 md:p-5">
        <p className="font-[satoshiBold] text-[#101828] text-lg">
          Card Request Details
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Branch Name"
            value={view.branch}
            type="text"
            show={false}
            register={register}
            name="branch"
            className="text-[#101828]"
          />
          <Input
            label="Initiator"
            value={view.initiator}
            type="text"
            show={false}
            register={register}
            name="initiator"
            className="text-[#101828]"
          />
          <Input
            label="Card Type"
            value={view.type}
            type="text"
            show={false}
            register={register}
            name="type"
            className="text-[#101828]"
          />
          <Input
            label="Card Charges"
            value={`#${new Intl.NumberFormat().format(view.charges || 0)}`}
            type="text"
            show={false}
            register={register}
            name="charges"
            className="text-[#101828]"
          />
          <Input
            label="Quantity"
            value={view.quantity}
            type="text"
            show={false}
            register={register}
            name="quantity"
            className="text-[#101828]"
          />
          <Input
            label="Batch"
            value={view.batch}
            type="text"
            show={false}
            register={register}
            name="batch"
            className="text-[#101828]"
          />
          <Input
            label="Date Requested"
            value={view.date}
            type="text"
            show={false}
            register={register}
            name="date"
            className="border-0 pl-0 text-[#101828]"
          />

          <div>
            <p className="text-[#344054] text-sm font-[satoshiMedium] py-2 pb-4">
              Status
            </p>
            
            {renderStatusCell(view.status)}
          </div>
          <div className="col-start-1 col-span-2">
            <p className="text-[#344054] pb-3 pt-4 font-[satoshiBold] text-sm">
              Actions
            </p>
            <div className="w-full flex flex-wrap xl:flex-nowrap xl:justify-between gap-2 py-2">
              {btnArray.map((each) => (
                <button
                  key={each.id}
                  className={`flex ${each.bg} text-white rounded text-xs  items-center  py-3 px-3 disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled ={state.isActive}
                >
                    
                  <img src={each.pic} alt="" className="h-fit" />
                  <div className="text-sm whitespace-nowrap w-full pl-2 pr-4">
                    {each.text}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </form>
        {actionModal && <ActionModal close={() => setActionModal(false)} />}
      </div>
    </div>
  );
};

export default ActionsPage;
