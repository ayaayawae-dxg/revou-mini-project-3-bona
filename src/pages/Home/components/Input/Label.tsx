import { Form } from "antd";
import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

const Label = ({ label, children }: Props) => {
  const LabelText = (
    <span style={{ fontSize: "1.25rem" }}>{label}</span>
  );

  return <Form.Item label={LabelText}>{children}</Form.Item>;
};

export default Label;
