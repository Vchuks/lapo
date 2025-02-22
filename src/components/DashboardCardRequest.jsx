import { Fragment } from "react";

const DashboardCardRequest = () => {
  const data = [
    {
      id: "1",
      branch: "Coporate",
      card_type: "Instant",
      quantity: "10",
      status: "Ready",
      action: "View",
    },
    {
      id: "2",
      branch: "Coporate",
      card_type: "Personalized",
      quantity: "10",
      status: "In Progress",
      action: "View",
    },
    {
      id: "3",
      branch: "Coporate",
      card_type: "Personalized",
      quantity: "10",
      status: "Acknowledged",
      action: "View",
    },

    {
      id: "4",
      branch: "Coporate",
      card_type: "Instant",
      quantity: "10",
      status: "Pending",
      action: "View",
    },
  ];

  const statusStyle = {
    Ready: "bg-[#ECFDF3] text-[#067647] border-[#ABEFC6]",
    InProgress: "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
    Acknowledged: "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]",
    Pending: "bg-[#F9FAFB] text-[#344054] border-[#EAECF0]",
  };

  const renderStatusCell = (status) => {
    const statusClass =
      statusStyle[status] || "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]"; // Fallback class for unknown status
    return (
      <span className={`rounded-[16px] border px-4 py-2 ${statusClass}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="w-full bg-white rounded-[12px] border border-[#E2E2E2] py-3 px-5 my-4 h-fit">
      <p className="text-[#121212] pb-4 text-lg font-[satoshiMedium]">
        Recent Card Requests
      </p>
      <table className="table-fixed w-full card">
        <thead>
          <tr className="bg-[#F1F7FF] border-y border-[#E2E2E2] ">
            <th>Branch</th>
            <th>Card Type</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Fragment key={item.id}>
              <tr key={item.id}>
                <td>{item.branch}</td>
                <td>{item.card_type}</td>
                <td>{item.quantity}</td>
                <td className="">{renderStatusCell(item.status)}</td>
                <td className="font-[satoshiBold] text-[#014DAF]">
                  {item.action}
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCardRequest;
