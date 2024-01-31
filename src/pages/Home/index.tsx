import React, { useState } from "react";
import { GeneralLayout } from "layouts";
import { Button, Flex, Form, Steps, theme } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import PersonalInformation from "./components/Form/PersonalInformation";
import AddressInformation from "./components/Form/AddressInformation";
import AccountInformation from "./components/Form/AccountInformation";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const steps = [
  {
    title: "Personal Information",
    content: <PersonalInformation />,
  },
  {
    title: "Address Information",
    content: <AddressInformation />,
  },
  {
    title: "Account Information",
    content: <AccountInformation />,
  },
];

type FormData = {
  firstName: string;
  email: string;
  birthDate: Date;
  streetAddress: string;
  state: string;
  city: string;
  zipCode: string;
  username: string;
  password: string;
  rePassword: string;
};

const Home = () => {
  const methods = useForm<FormData>();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    methods.handleSubmit((data) => {
      setCurrent(current + 1);
    })();
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <GeneralLayout>
      <FormProvider {...methods}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: "100%" }}
          onFinish={methods.handleSubmit(onSubmit)}
        >
          <Steps current={current} items={items} />

          <div
            style={{
              color: token.colorTextBase,
              backgroundColor: token.colorFillAlter,
              borderRadius: token.borderRadiusLG,
              marginTop: 16,
            }}
          >
            {steps[current].content}
          </div>

          <Flex justify="space-between" style={{ marginTop: "1rem" }}>
            {current > 0 ? (
              <Button size="large" icon={<ArrowLeftOutlined />} type="primary" onClick={prev} />
            ) : (
              <div></div>
            )}
            {current < steps.length - 1 && (
              <Button size="large" icon={<ArrowRightOutlined />} type="primary" onClick={next} />
            )}
            {current === steps.length - 1 && (
              <Button size="large" type="primary" htmlType="submit">
                Done
              </Button>
            )}
          </Flex>
        </Form>
      </FormProvider>
    </GeneralLayout>
  );
};

export default Home;
