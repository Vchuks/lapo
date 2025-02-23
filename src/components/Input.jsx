import PropTypes from "prop-types"

const Input = ({label, show = true, register, name, required, id, type, placeholder, className, value, errors}) => {
  return (
    <div className="flex flex-col">
      <label className="text-[#344054] text-sm font-[satoshiMedium] py-2" htmlFor={id}>{label}{show&&<span>*</span>}</label>
      <input type={type} id={id} placeholder={placeholder} className={`rounded-lg py-3 px-4 border border-[#D0D5DD] outline-blue-300 ${className}`} value={value} {...register( name, {required})}/>
      {errors && <span className="text-red-600">This field is required</span>}
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    show: PropTypes.boolean,
    register: PropTypes.object.isRequired,
    name: PropTypes.string,
    required: PropTypes.object,
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    errors: PropTypes.func
}

export default Input
