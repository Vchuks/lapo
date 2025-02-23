import { Cross1Icon } from "@radix-ui/react-icons";
import feature from "../assets/Featured.png";
import Input from "./Input";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CardData } from "../context/CardContext";

const AddFeeModal = ({close}) => {
    const {setFeeArray} = useContext(CardData)
    const {
        handleSubmit,
        register,
        formState: {errors}
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data)
        setFeeArray((prev)=>[...prev, data])
      };
    
  return (
    <div className="w-full z-30 bg-[#101828b3] flex items-center h-screen absolute top-0 left-0 overflow-y-auto">
      <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] m-auto mt-15 px-5 py-6 rounded-xl">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img src={feature} alt="" />
            <div>
              <h2 className="font-[satoshiBold] text-[#101828] text-lg">
                Add Fee
              </h2>
              <p className="text-sm pb-2 text-[#475467]">
                Fill in fee details.
              </p>
            </div>
          </div>
          <Cross1Icon onClick={close} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="fee_name"
            id="fee_name"
            label="Fee Name"
            placeholder="Maintenance"
            register={register}
            type="text"
            required
            errors={errors.fee_name}
          />
          <Input
            name="fee_value"
            id="fee_value"
            label="Value"
            placeholder="0"
            register={register}
            type="number"
            show={false}
          />
          <div className="py-3">
            <label className="text-[#344054] text-sm font-[satoshiMedium] py-2">
              Currency
            </label>
            <div className="flex gap-8 pt-1">
              <div className="flex gap-1">
                <label className="container">
                  <input
                    id="currency"
                    label="Currency"
                    {...register("currency")}
                    type="radio"
                    value="ngn"
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="">NGN</p>
              </div>
              <div className="flex gap-1">
                <label className="container">
                  <input
                    id="currency"
                    label="Currency"
                    {...register("currency")}
                    type="radio"
                    value="usd"
                  />
                  <span className="checkmark"></span>
                </label>
                <p>USD</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <label className="text-[#344054] text-sm font-[satoshiMedium] py-2">
              Fee Frequency
            </label>
            <div className="flex  gap-8 pt-1">
              <div className="flex gap-1">
                <label className="container">
                  <input
                    
                    {...register("frequency")}
                    type="radio"
                    value="oneoff"
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="">One Off</p>
              </div>
              <div className="flex gap-1">
                <label className="container">
                  <input
                
                    
                    {...register("frequency")}
                    type="radio"
                    value="monthly"
                  />
                  <span className="checkmark"></span>
                </label>
                <p>Monthly</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <label className="text-[#344054] text-sm font-[satoshiMedium] py-2">
              Fee Impact
            </label>
            <div className="flex gap-8 pt-1">
              <div className="flex gap-1">
                <label className="container">
                  <input
                   
                    {...register("fee_impact")}
                    type="radio"
                    value="issuance"
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="">Issuance</p>
              </div>
              <div className="flex gap-1">
                <label className="container">
                  <input
                    
                    {...register("fee_impact")}
                    type="radio"
                    value="pin_reissue"
                  />
                  <span className="checkmark"></span>
                </label>
                <p>Pin Reissue</p>
              </div>
            </div>
          </div>
          <div className="py-3">
            <label className="text-[#344054] text-sm font-[satoshiMedium] py-2">
              Account Paid
            </label>
            <div className="flex  gap-4 pt-1">
              <div className="flex gap-1">
                <label className="container">
                  <input
                    
                    {...register("account_paid")}
                    type="radio"
                    value="none"
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="">None</p>
              </div>
              <div className="flex gap-1">
                <label className="container">
                  <input
                   
                    {...register("account_paid")}
                    type="radio"
                    value="code-prefix"
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="">Branch Code Prefix</p>
              </div>
              <div className="flex gap-1">
                <label className="container">
                  <input
                   
                    {...register("account_paid")}
                    type="radio"
                    value="code-suffix"
                  />
                  <span className="checkmark"></span>
                </label>
                <p className="">Branch Code Suffix</p>
              </div>
            </div>
          </div>
          <Input
            name="account"
            id="account"
            label="Account"
            placeholder=""
            register={register}
            type="type"
            show={false}
          />
          <button type="submit" className=" mt-14 w-full   bg-[#014DAF]  px-2 md:px-4 py-2 rounded text-white">
           Add Fee
        </button>
        </form>
      </div>
    </div>
  );
};

AddFeeModal.propTypes = {
    close: PropTypes.func
}
export default AddFeeModal;
