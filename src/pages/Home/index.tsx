import React, { useState } from "react";
import { GeneralLayout } from "layouts";
import { Form, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import PersonalInformation from "./components/Form/PersonalInformation";
import AddressInformation from "./components/Form/AddressInformation";
import AccountInformation from "./components/Form/AccountInformation";
import NavButton from "./components/molecules/NavButton";
import ModalResult from "./components/molecules/ModalResult";

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
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const next = () => {
    methods.handleSubmit((data) => {
      setCurrent(current + 1);
    })();
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onSubmit = (data: FormData) => {
    setIsModalOpen(true)
  };

  return (
    <GeneralLayout>
      <FormProvider {...methods}>
        <ModalResult isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />

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
