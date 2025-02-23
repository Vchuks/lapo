import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { PlusIcon } from "@radix-ui/react-icons";
import { CardData } from "../context/CardContext";
import AddFeeModal from "./AddFeeModal";

const CreateProfile = () => {
  const { feeArray, setCardArray, cardArray, edit } = useContext(CardData);
  const [feeModal, setFeeModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: edit.id || null,
      card_name: edit.card_name || "",

      expire: edit.expire || 0,
      bin: edit.bin || "",
      date: edit.date || "",

      description: edit.description || "",
    },
  });

  const onSubmit = (data) => {
    const getDate = new Date();
    const [year, month, day] = new Date()
      .toISOString()
      .substring(0, 10)
      .split("-");
    const dateFormatted = `${day}/${month}/${year}`;
    const today = `${dateFormatted} ${getDate.getHours()}:${getDate.getMinutes()}:${getDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    const newData = {
      ...data,
      id: `${cardArray.length * 2}`,
      date: today,
      expire: `${data.expire} months`,
    };
    setCardArray((prev) => {
      return [...prev, newData];
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  const handleEdit = (data) => {
    const update = cardArray.map((each) => (each.id === edit.id ? data : each));
    setCardArray(update);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };
  return (
    <div className="py-3 px-3 md:px-5">
      {success && (
        <div className="absolute top-0 left-0 w-full bg-[#101828b3] h-screen z-40 ">
          <p className="rounded-lg w-fit m-auto bg-white p-10 text-green-500 text-2xl text-center mt-20">
            Successful!
          </p>
        </div>
      )}
      <h2 className="font-[satoshiBold] text-[#101828] text-lg">
        Create Profile
      </h2>
      <p className="text-sm pb-2 pt-1 text-[#475467]">
        Fill in profile details and add card fee.
      </p>
      <div className="bg-white rounded-[10px] border border-[#E2E2E2] p-3 py-5 md:p-5">
        <p className="font-[satoshiBold] text-[#101828] text-lg">
          Profile Details
        </p>
        <form
          onSubmit={edit.id ? handleSubmit(handleEdit) : handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <Input
            name="card_name"
            id="card_name"
            label="Card Name"
            placeholder="Enter card name"
            register={register}
            type="text"
            required
            errors={errors.card_name}
          />
          <Input
            name="bin"
            id="bin"
            label="Bin Prefix"
            placeholder="00000000"
            register={register}
            type="text"
            required
            errors={errors.bin}
          />
          <div className="pt-2">
            <label
              className="text-[#344054] text-sm font-[satoshiMedium]"
              htmlFor="scheme"
            >
              Card Scheme<span>*</span>
            </label>
            <select
              className="w-full outline-blue-300 mt-1 rounded-lg py-3 px-4 border border-[#D0D5DD]"
              {...register("scheme", { required: true })}
            >
              <option className="w-full" value="Verve">
                Verve
              </option>
              <option className="w-full" value="master">
                Master
              </option>
              <option className="w-full" value="visa">
                Visa
              </option>
            </select>
            {errors.scheme && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <Input
            name="expire"
            id="expire"
            label="Expiration"
            placeholder="0"
            register={register}
            type="number"
            required
            errors={errors.expire}
          />
          <Input
            name="description"
            id="description"
            label="Description"
            placeholder=""
            register={register}
            type="text"
            show={false}
          />
          <div className="pt-2">
            <label
              className="text-[#344054] text-sm font-[satoshiMedium]"
              htmlFor="currency"
            >
              Currency<span>*</span>
            </label>
            <select
              className="w-full outline-blue-300 mt-1 rounded-lg py-3 px-4 border border-[#D0D5DD]"
              {...register("currency", { required: true })}
            >
              <option className="w-full" value="NGN">
                NGN
              </option>
              <option className="w-full" value="USD">
                USD
              </option>
              <option className="w-full" value="EURO">
                Euro
              </option>
            </select>
            {errors.currency && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="pt-2">
            <label
              className="text-[#344054] text-sm font-[satoshiMedium]"
              htmlFor="branch"
            >
              Branch Blacklist
            </label>
            <select
              className="w-full outline-blue-300 mt-1 rounded-lg py-3 px-4 border border-[#D0D5DD]"
              {...register("branch")}
            >
              <option className="w-full" value="Head Office">
                Head Office
              </option>
              <option className="w-full" value="a data">
                A data
              </option>
              <option className="w-full" value="b data">
                B data
              </option>
            </select>
          </div>
          {edit.id && (
            <button
              type="submit"
              className="col-start-1 col-span-2 mt-8 w-full md:w-72  bg-[#014DAF]  px-2 md:px-4 py-2 rounded text-white"
            >
              Edit Profile
            </button>
          )}
          {/* add fees */}
          <section className="col-start-1 col-span-2 bg-white mt-4 rounded-[10px] border border-[#E2E2E2] p-3 md:p-5 pb-10 md:pb-20">
            <h2 className="font-[satoshiBold] text-[#101828] text-lg">Fees</h2>
            <button
              className="flex mt-5 w-full md:w-fit gap-2 items-center bg-[#014DAF] text-xs px-2 md:px-4 py-2 rounded text-white"
              onClick={() => setFeeModal(true)}
            >
              <PlusIcon className="plus" /> Add Fee
            </button>
            <div className="overflow-x-scroll">
              <table className="w-full mt-4 table-fixed prof border border-[#EAECF0] border-collapse min-w-[30rem]  lg:min-w-0">
                <thead className="bg-[#F9FAFB]">
                  <tr className="">
                    <th>Name</th>
                    <th>Value</th>
                    <th>Frequency</th>
                    <th>Currency</th>
                    <th>Time</th>
                    <th>Account Paid</th>
                    <th>Account</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {feeArray?.map((each) => (
                    <tr key={each.id} className="text-[#475467]">
                      <td>{each.name}</td>
                      <td>{each.value}</td>
                      <td>{each.frequency}</td>
                      <td>{each.currency}</td>
                      <td>{each.time}</td>
                      <td>{each.account_paid}</td>
                      <td>{each.account}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {!edit.id && (
            <button
              type="submit"
              className=" mt-8 w-full md:w-72  bg-[#014DAF]  px-2 md:px-4 py-2 rounded text-white"
            >
              Create Profile
            </button>
          )}
        </form>
        {feeModal && <AddFeeModal close={() => setFeeModal(false)} />}
      </div>
    </div>
  );
};

export default CreateProfile;
