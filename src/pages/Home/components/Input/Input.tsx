import React from "react";
import { Input as CustomInput } from "antd";

type Props = {
  placeholder: string;
};

const Input = ({ placeholder, ...rest }: Props) => {
  return (
    <CustomInput
      style={{
        color: "white",
        borderRadius: "0px",
        borderBottom: "1px solid white",
      }}
      variant="borderless"
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
