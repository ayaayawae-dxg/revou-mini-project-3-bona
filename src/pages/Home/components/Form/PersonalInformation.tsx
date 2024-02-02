import { Controller, useFormContext } from "react-hook-form";
import moment from "moment";

import Input from "../Input/Input";
import DatePicker from "../Input/DatePicker";
import Label from "../Input/Label";
import ErrorMessage from "../Input/ErrorMessage";
import { useTranslation } from "react-i18next";

const PersonalInformation = () => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Label label={t("form.page.1.field.1")}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: t("form.page.1.field.1.required") }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder={t("form.page.1.field.1")} />
          )}
        />
        {errors.firstName && (
          <ErrorMessage>{`${errors.firstName.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.1.field.2")}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: t("form.page.1.field.2.required"),
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: t("form.page.1.field.2.pattern"),
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder={t("form.page.1.field.2")} />
          )}
        />
        {errors.email && (
          <ErrorMessage>{`${errors.email.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.1.field.3")}>
        <Controller
          name="birthDate"
          control={control}
          rules={{
            validate: {
              isBeforeNow: (value) => {
                const now = moment();
                const birthDate = moment(value.toString());
                if (birthDate.isAfter(now)) {
                  return t("form.page.1.field.3.isBeforeNow");
                }
                return true;
              },
            },
            required: t("form.page.1.field.3.required"),
          }}
          render={({ field: { ref, ...field } }) => (
            <DatePicker placeholder={t("form.page.1.field.3")} {...field} />
          )}
        />
        {errors.birthDate && (
          <ErrorMessage>{`${errors.birthDate.message}`}</ErrorMessage>
        )}
      </Label>
    </div>
  );
};

export default PersonalInformation;
