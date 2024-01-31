import React from "react";
import { Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import TextArea from "../Input/TextArea";
import Select from "../Input/Select";
import { STATE_CITY } from "utils/constant";
import Input from "../Input/Input";

const AddressInformation = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Form.Item label="Street Address">
        <Controller
          name="streetAddress"
          control={control}
          rules={{ required: "Street Address is required" }}
          render={({ field: { ref, ...field } }) => (
            <TextArea {...field} placeholder="Street Address" />
          )}
        />
        {errors.streetAddress && (
          <span
            role="alert"
            className="error-message"
          >{`${errors.streetAddress.message}`}</span>
        )}
      </Form.Item>

      <Form.Item label="State">
        <Controller
          name="state"
          control={control}
          rules={{ required: "State is required" }}
          render={({ field: { ref, onChange, ...field } }) => (
            <Select
              {...field}
              options={Object.keys(STATE_CITY).map((state) => ({
                label: state,
                value: state,
              }))}
              placeholder="State"
              onChange={(e) => {
                onChange(e);
                setValue("city", "");
              }}
            />
          )}
        />
        {errors.state && (
          <span
            role="alert"
            className="error-message"
          >{`${errors.state.message}`}</span>
        )}
      </Form.Item>

      <Form.Item label="City">
        <Controller
          name="city"
          control={control}
          rules={{ required: "City is required" }}
          render={({ field: { ref, ...field } }) => (
            <Select
              {...field}
              options={
                watch("state")
                  ? STATE_CITY[watch("state") as keyof typeof STATE_CITY].map(
                      (city) => ({
                        label: city,
                        value: city,
                      })
                    )
                  : []
              }
              placeholder="City"
            />
          )}
        />
        {errors.city && (
          <span
            role="alert"
            className="error-message"
          >{`${errors.city.message}`}</span>
        )}
      </Form.Item>

      <Form.Item label="Zip Code">
        <Controller
          name="zipCode"
          control={control}
          rules={{ required: "Zip Code is required", pattern: { value: /^[0-9]{5}-[0-9]{4}$/, message: "Zip Code is not valid" } }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder="Zip Code (Example: xxxxx-xxxx)" />
          )}
        />
        {errors.zipCode && (
          <span
            role="alert"
            className="error-message"
          >{`${errors.zipCode.message}`}</span>
        )}
      </Form.Item>
    </div>
  );
};

export default AddressInformation;
