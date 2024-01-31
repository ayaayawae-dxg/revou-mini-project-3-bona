import React from "react";
import { Select as CustomSelect } from "antd";

type Props = {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[]
  onChange: (e: any) => void;
};

const Select = ({ placeholder, options, onChange, ...rest }: Props) => {
  return (
    <CustomSelect
      style={{
        color: "white",
        borderRadius: "0px",
        borderBottom: "1px solid white",
        fontSize: "1.25rem",
      }}
      variant="borderless"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Select;
