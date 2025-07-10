'use client'
import React, { useState } from 'react'

const PreviewField: (props: any) => React.JSX.Element = (props: any) => {
  const { path, label, value, onChange, name } = props
  const [val, setVal] = useState('')
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        defaultValue="Початкове значення"
        onInput={(e) => setVal(e.currentTarget.value.trim())}
      />

      <div className="">
        {val}
      </div>
    </div>
  )
}

export default PreviewField
