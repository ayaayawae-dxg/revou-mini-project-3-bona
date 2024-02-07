import React from "react";
import { DatePicker as CustomDatePicker } from "antd";

type Props = {
  name: string
  placeholder: string
}

const   DatePicker = ({ name, placeholder, ...rest }: Props) => {
  return (
    <CustomDatePicker
      variant="filled"
      style={{ width: "100%", fontSize: "1.25rem" }}
      id={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default DatePicker;
