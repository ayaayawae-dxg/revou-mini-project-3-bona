import React from "react";
import { Input as CustomInput } from "antd";

type Props = {
  placeholder: string;
};

const Password = ({ placeholder, ...rest }: Props) => {
  return (
    <CustomInput.Password
      style={{
        color: "white",
        borderRadius: "0px",
        borderBottom: "1px solid white",
        fontSize: "1.25rem"
      }}
      variant="borderless"
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Password;
