import React, { useState } from "react";
import { GeneralLayout } from "layouts";
import { Button, Flex, Form, Input, Steps, message, theme } from "antd";
import { Controller, FormProvider, useForm } from "react-hook-form";
import PersonalInformation from "./components/Form/PersonalInformation";

const steps = [
  {
    title: "Personal Information",
    content: <PersonalInformation />,
  },
  {
    title: "Address Information",
    content: "Second-content",
  },
  {
    title: "Account Information",
    content: "Last-content",
  },
];

type FormData = {
  firstName: string;
  email: string;
  birthDate: Date;
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
        <Form onFinish={methods.handleSubmit(onSubmit)}>
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
              <Button onClick={prev}>Previous</Button>
            ) : (
              <div></div>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
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
