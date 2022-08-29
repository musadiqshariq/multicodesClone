import React from 'react';
import InputCss from "./input.module.css"

export const Input = ({placeholder}) => {
  return (
    <input placeholder={placeholder} className={InputCss.input} />
  )
}
