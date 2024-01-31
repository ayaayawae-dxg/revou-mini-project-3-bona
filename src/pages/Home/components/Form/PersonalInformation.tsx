import React from "react";
import { Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import Input from "../Input/Input";
import DatePicker from "../Input/DatePicker";
import moment from "moment";

const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Form.Item label="First Name">
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder="First Name" />
          )}
        />
        {errors.firstName && (
          <span role="alert" className="error-message">{`${errors.firstName.message}`}</span>
        )}
      </Form.Item>

      <Form.Item label="Email">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email is not valid",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder="Email" />
          )}
        />
        {errors.email && <span role="alert" className="error-message">{`${errors.email.message}`}</span>}
      </Form.Item>

      <Form.Item label="Date of Birth">
        <Controller
          name="birthDate"
          control={control}
          rules={{
            validate: {
              isBeforeNow: (value) => moment(value).isBefore(moment()) || "Date of Birth is not valid",
            },
            required: "Date of Birth is required",
          }}
          render={({ field: { ref, ...field } }) => (
            <DatePicker {...field} />
          )}
        />
        {errors.birthDate && <span role="alert" className="error-message">{`${errors.birthDate.message}`}</span>}
      </Form.Item>
    </div>
  );
};

export default PersonalInformation;
