import { PlusIcon } from "@radix-ui/react-icons";
import search from "../assets/search-md.png";
import trash from "../assets/trash.png";
import edit from "../assets/edit.png";
import { useContext } from "react";
import { CardData } from "../context/CardContext";
import { Link, useNavigate } from "react-router-dom";

const CardProfileTable = () => {
  const { cardArray, editCard, deleteCard, setEdit } = useContext(CardData);
  const navigate = useNavigate();
  const handleCreate = () => {
    setEdit({});
    return navigate("create-profile");
  };
  return (
    <div>
      <h2 className="font-[satoshiBold] text-[#101828] text-lg">
        Card Profile
      </h2>
      <p className="text-sm pb-2 text-[#475467]">
        Create, view and edit card profiles here.
      </p>
      <section>
        <div className="flex justify-between gap-4 md:gap-0 border-y border-[#98A2B3] py-3 my-2">
          <div className="flex bg-white w-fit  md:w-72 border border-[#D0D5DD] rounded-[8px] px-4 py-1 items-center gap-2">
            <img src={search} alt="" className="h-fit" />
            <input
              type="search"
              className="outline-0 placeholder:text-[#808080] placeholder:text-xs"
              placeholder="Search by card name"
            />
          </div>
          <button
            className="flex w-full md:w-fit gap-2 items-center bg-[#014DAF] px-2 md:px-4 py-2 rounded text-white"
            onClick={handleCreate}
          >
            <PlusIcon className="plus" /> Add Profile
          </button>
        </div>
        <table className="w-full table-fixed prof border border-[#EAECF0] border-collapse">
          <thead className="bg-[#F9FAFB]">
            <tr className="">
              <th>Card Name</th>
              <th>Currency</th>
              <th>Expiration</th>
              <th>Bin Prefix</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {cardArray?.map((each) => (
              <tr key={each.id} className="text-[#475467]">
                <td>{each.card_name}</td>
                <td>{each.currency}</td>
                <td>{each.expire}</td>
                <td>{each.bin}</td>
                <td>{each.date}</td>
                <td className="flex gap-2 md:gap-4 justify-center items-center">
                  <img
                    src={trash}
                    className="cursor-pointer"
                    onClick={() => deleteCard(each.id)}
                    alt=""
                  />
                  <Link to="/card-profile/create-profile">
                    <img
                      src={edit}
                      alt=""
                      onClick={() => editCard(each.id)}
                      className="cursor-pointer"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CardProfileTable;
