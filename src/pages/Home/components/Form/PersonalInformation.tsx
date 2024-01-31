import { Controller, useFormContext } from "react-hook-form";
import moment from "moment";

import Input from "../Input/Input";
import DatePicker from "../Input/DatePicker";
import Label from "../Input/Label";
import ErrorMessage from "../Input/ErrorMessage";

const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Label label="First Name">
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First name is required" }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder="First Name" />
          )}
        />
        {errors.firstName && (
          <ErrorMessage>{`${errors.firstName.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label="Email">
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
        {errors.email && <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>}
      </Label>

      <Label label="Date of Birth">
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
        {errors.birthDate && <ErrorMessage>{`${errors.birthDate.message}`}</ErrorMessage>}
      </Label>
    </div>
  );
};

export default PersonalInformation;
