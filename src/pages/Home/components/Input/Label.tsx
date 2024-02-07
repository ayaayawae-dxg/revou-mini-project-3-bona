import { Form } from "antd";
import React from "react";

type Props = {
  label: string;
  name: string;
  children: React.ReactNode;
};

const Label = ({ label, name, children }: Props) => {
  const LabelText = (
    <span style={{ fontSize: "1.25rem" }}>{label}</span>
  );

  return <Form.Item label={label} name={name}>{children}</Form.Item>;
};

export default Label;
