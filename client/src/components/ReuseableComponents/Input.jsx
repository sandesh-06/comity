import React from 'react'
import { useId } from 'react'
const Input = ({label, type, className="", ...props }, ref) => {
    const id = useId()
  return (
    <div className="w-full flex justify-center items-center">
      {label && (
        <label className="inline-block mb-1 pl-1 mx-4" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`px-3 py-2 rounded-md text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        ref = {ref} //this will give refernce of this input field to the parent contianer
      />
    </div>
  )
}

export default React.forwardRef(Input)