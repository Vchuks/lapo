import { Cross1Icon } from "@radix-ui/react-icons";
import tick from "../assets/tick.png";
// import Input from "./Input";
// import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
// import { useContext } from "react";
// import { CardData } from "../context/CardContext";
// import Swal from "sweetalert2";

const ActionModal = ({ close }) => {
//   const { setFeeArray, feeArray } = useContext(CardData);
//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data)
      
//   };

  return (
    <div className="w-full z-30 bg-[#0f1829b3] flex items-center h-screen absolute top-0 left-0 overflow-y-auto">
      <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] m-auto mt-15 px-5 py-6 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <img src={tick} alt="" />
            <div>
              <h2 className="font-[satoshiBold] text-[#101828] text-lg">
                Successful
              </h2>
              <p className="text-sm pb-2 text-[#475467]">
                Production file has been downloaded.
              </p>
            </div>
          </div>
          <Cross1Icon onClick={close} />
        </div>
        <button className="rounded p-4 bg-[#014DAF]">Continue</button>
      </div>
    </div>
  );
};

ActionModal.propTypes = {
  close: PropTypes.func,
};
export default ActionModal;
