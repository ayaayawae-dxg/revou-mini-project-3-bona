import { Controller, useFormContext } from "react-hook-form";

import Input from "../Input/Input";
import Password from "../Input/Password";
import Label from "../Input/Label";
import ErrorMessage from "../Input/ErrorMessage";
import { useTranslation } from "react-i18next";
import NavButton from "../molecules/NavButton";

const AccountInformation = () => {
  const { t } = useTranslation();

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Label label={t("form.page.3.field.1")}>
        <Controller
          name="username"
          control={control}
          rules={{ required: t("form.page.3.field.1.required") }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder={t("form.page.3.field.1")} />
          )}
        />
        {errors.username && (
          <ErrorMessage>{`${errors.username.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.3.field.2")}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: t("form.page.3.field.2.required"),
            minLength: {
              value: 8,
              message: t("form.page.3.field.2.minLength"),
            },
            validate: {
              hasLower: (value) =>
                /[a-z]/.test(value) || t("form.page.3.field.2.hasLower"),
              hasUpper: (value) =>
                /[A-Z]/.test(value) || t("form.page.3.field.2.hasUpper"),
              hasSymbol: (value) =>
                /\W/.test(value) || t("form.page.3.field.2.hasSymbol"),
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Password {...field} placeholder={t("form.page.3.field.2")} />
          )}
        />
        {errors.password && (
          <ErrorMessage>{`${errors.password.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.3.field.3")}>
        <Controller
          name="rePassword"
          control={control}
          rules={{
            required: t("form.page.3.field.3.required"),
            validate: {
              isMatch: (value) =>
                watch("password") === value || t("form.page.3.field.3.isMatch"),
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Password {...field} placeholder={t("form.page.3.field.3")} />
          )}
        />
        {errors.rePassword && (
          <ErrorMessage>{`${errors.rePassword.message}`}</ErrorMessage>
        )}
      </Label>
    </>
  );
};

export default AccountInformation;
