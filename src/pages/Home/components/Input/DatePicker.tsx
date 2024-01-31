import React from "react";
import { DatePicker as CustomDatePicker } from "antd";

const DatePicker = ({ ...rest }: any) => {
  return (
    <CustomDatePicker
      variant="filled"
      style={{ width: "100%", fontSize: "1.25rem" }}
      {...rest}
    />
  );
};

export default DatePicker;
