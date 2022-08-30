import React from "react";
import InputCss from "./input.module.css";

export const Input = ({ placeholder, color }) => {
  return (
    <>
      {color ? (
        <input
          placeholder={placeholder}
          className={InputCss.input2}
          style={{ borderBottom: `2px solid ${color}` }}
        />
      ) : (
        <input placeholder={placeholder} className={InputCss.input} />
      )}
    </>
  );
};
