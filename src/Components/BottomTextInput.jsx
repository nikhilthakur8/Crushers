/* eslint-disable react/prop-types */
import React from "react"
const BottomTextInput =  React.forwardRef(function BottomTextInput({
	label,
	type ="text",
  name,
  errors,
	...props
},ref) {
  return (
    <div className="w-full my-6">
      <label
        className="text-lg py-5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 mt-2 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
        type={type}
        placeholder="Enter your name"
        id={label}
        ref={ref}
        name={name}
		{...props}
      />
      {errors[name] && <p className="text-red-600 mt-1 text-base">* {errors[name].message}</p>}
    </div>
  )
})

export default BottomTextInput;