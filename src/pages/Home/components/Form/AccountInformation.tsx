import { Controller, useFormContext } from "react-hook-form";

import Input from "../Input/Input";
import Password from "../Input/Password";
import Label from "../Input/Label";
import ErrorMessage from "../Input/ErrorMessage";

const AccountInformation = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Label label="Username">
        <Controller
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder="Username" />
          )}
        />
        {errors.username && (
          <ErrorMessage>{`${errors.username.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label="Password">
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            validate: {
              hasLower: (value) =>
                /[a-z]/.test(value) ||
                "Password must contain a lower case letter",
              hasUpper: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain an upper case letter",
              hasSymbol: (value) =>
                /\W/.test(value) || "Password must contain a symbol",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Password {...field} placeholder="Password" />
          )}
        />
        {errors.password && (
          <ErrorMessage>{`${errors.password.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label="Re-Password">
        <Controller
          name="rePassword"
          control={control}
          rules={{
            required: "Re-Password is required",
            validate: {
              isMatch: (value) =>
                watch("password") === value ||
                "Password must be match",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Password {...field} placeholder="Re-Password" />
          )}
        />
        {errors.rePassword && (
          <ErrorMessage>{`${errors.rePassword.message}`}</ErrorMessage>
        )}
      </Label>
    </div>
  );
};

export default AccountInformation;
