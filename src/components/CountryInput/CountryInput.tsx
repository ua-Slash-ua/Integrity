'use client'
import s from './CountryInput.module.css'
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import { useFormikContext } from 'formik'
import countryList from 'react-select-country-list'

function CountrySelector() {
  const options = useMemo(() => countryList().getData(), [])
  const { setFieldValue, setFieldTouched, touched } = useFormikContext()

  const changeHandler = (value: string) => {
    setFieldValue('country', value)
  }

  return (
    <Select
      className={s.input}
      options={options}
      onBlur={() => setFieldTouched('country', true)}
      onChange={(value) => {
        if (value) {
          changeHandler(value.label)
        }
      }}
      unstyled={true}
      placeholder="Choose your country"
      classNames={{
        control: () => s.control,
        placeholder: () => s.placeholder,
        singleValue: () => s.singleValue,
        menu: () => s.menu,
        option: ({ isSelected, isFocused }) =>
          `${s.option} ${isSelected ? s.selected : ''} ${isFocused ? s.focused : ''}`,
        dropdownIndicator: () => s.dropdownIndicator,
        valueContainer: () => s.valueContainer,
      }}
      isSearchable={true}
    />
  )
}

export default CountrySelector
