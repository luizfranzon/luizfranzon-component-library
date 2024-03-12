import React from 'react'
import { InputHTMLAttributes } from 'react'

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  customLabel?: {
    id: string
    fieldTitle: string
    allowDifferentId?: boolean
  }
  id?: string
  type?: 'text'
}

function TextInput({
  className = '',
  customLabel,
  id = customLabel?.id,
  ...rest
}: InputInterface) {
  if (
    customLabel?.id !== undefined &&
    customLabel.id !== id &&
    customLabel.allowDifferentId !== true
  ) {
    throw new Error(
      `Defined ID is different from the input defined ID. 
       Label ID: "${customLabel.id}" | Input ID: "${id}"
       
       If it's on purpose, add allowDifferentId: true to config object.
       `,
    )
  }

  return (
    <div className="relative inline-flex flex-col">
      {customLabel ? (
        <label className="pl-[1px] font-medium" htmlFor={customLabel.id}>
          {customLabel.fieldTitle}
        </label>
      ) : null}
      <input
        {...rest}
        id={id !== undefined ? id : customLabel?.id}
        className={`focus:outline-bg-zinc-900 rounded-lg border bg-[#fafafa] px-3 py-2 text-sm ${className}`}
        type="text"
      />
    </div>
  )
}

export default TextInput
