import { Controller, useFormContext } from "react-hook-form";

import { STATE_CITY } from "utils/constant";

import TextArea from "../Input/TextArea";
import Select from "../Input/Select";
import Input from "../Input/Input";
import Label from "../Input/Label";
import ErrorMessage from "../Input/ErrorMessage";

const AddressInformation = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Label label="Street Address">
        <Controller
          name="streetAddress"
          control={control}
          rules={{ required: "Street Address is required" }}
          render={({ field: { ref, ...field } }) => (
            <TextArea {...field} placeholder="Street Address" />
          )}
        />
        {errors.streetAddress && (
          <ErrorMessage>{`${errors.streetAddress.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label="State">
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
          <ErrorMessage>{`${errors.state.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label="City">
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
          <ErrorMessage>{`${errors.city.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label="Zip Code">
        <Controller
          name="zipCode"
          control={control}
          rules={{
            required: "Zip Code is required",
            pattern: {
              value: /^[0-9]{5}-[0-9]{4}$/,
              message: "Zip Code is not valid (Example: 12345-1234)",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder="Zip Code (Example: 12345-1234)" />
          )}
        />
        {errors.zipCode && (
          <ErrorMessage>{`${errors.zipCode.message}`}</ErrorMessage>
        )}
      </Label>
    </div>
  );
};

export default AddressInformation;
