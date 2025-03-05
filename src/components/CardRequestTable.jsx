import search from "../assets/search-md.png";
import { useContext } from "react";
import { CardData } from "../context/CardContext";

const CardRequestTable = () => {
  const { requestArray, handleView, handleDispatch } = useContext(CardData);
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
    <div className="px-3 py-4 md:p-5">
      <h2 className="font-[satoshiBold] text-[#101828] text-lg">
        Card Request
      </h2>
      <p className="text-sm pb-2 text-[#475467]">
        View and attend to card requests here.
      </p>
      <section>
        <div className="flex justify-between gap-4 md:gap-0 border-y border-[#98A2B3] py-3 my-2">
          <div className="flex bg-white w-fit  md:w-72 border border-[#D0D5DD] rounded-[8px] px-4 py-1 items-center gap-2">
            <img src={search} alt="" className="h-fit" />
            <input
              type="search"
              className="outline-0 placeholder:text-[#808080] placeholder:text-xs"
              placeholder="Search by branch"
            />
          </div>
        </div>
        <table className="w-full table-fixed prof border border-[#EAECF0] border-collapse">
          <thead className="bg-[#F9FAFB]">
            <tr className="">
              <th>Branch</th>
              <th>Initiator</th>
              <th>Quantity</th>
              <th>Batch</th>
              <th>Date Requested</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {requestArray?.map((each) => (
              <tr key={each.id} className="text-[#475467]">
                <td>{each.branch}</td>
                <td>{each.initiator}</td>
                <td>{each.quantity}</td>
                <td>{each.batch}</td>
                <td>{each.date}</td>
                <td>{renderStatusCell(each.status)}</td>
                <td
                  className="font-[satoshiBold] cursor-pointer text-[#014DAF]"
                  onClick={() => handleDispatch(each.slug, each.id)}
                >
                  <span className="" onClick={() => handleView(each.id)}>
                    View
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CardRequestTable;
