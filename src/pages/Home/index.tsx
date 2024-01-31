import React, { useState } from "react";
import { GeneralLayout } from "layouts";
import { Form, Steps, theme } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import PersonalInformation from "./components/Form/PersonalInformation";
import AddressInformation from "./components/Form/AddressInformation";
import AccountInformation from "./components/Form/AccountInformation";
import NavButton from "./components/molecules/NavButton";

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
      console.log(data);
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
              marginTop: 16,
            }}
          >
            {steps[current].content}
          </div>

          <NavButton current={current} steps={steps} next={next} prev={prev} />
        </Form>
      </FormProvider>
    </GeneralLayout>
  );
};

export default Home;
