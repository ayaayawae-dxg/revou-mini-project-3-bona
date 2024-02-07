import React from "react";
import { Input as CustomInput } from "antd";

type Props = {
  placeholder: string;
  name: string;
};

const TextArea = ({ placeholder, name, ...rest }: Props) => {
  return (
    <CustomInput.TextArea
      style={{
        color: "white",
        borderRadius: "0px",
        borderBottom: "1px solid white",
        fontSize: "1.25rem"
      }}
      variant="borderless"
      placeholder={placeholder}
      id="name"
      {...rest}
    />
  );
};

export default TextArea;
