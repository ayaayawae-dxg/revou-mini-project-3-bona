import { Controller, useFormContext } from "react-hook-form";

import { STATE_CITY } from "utils/constant";

import TextArea from "../Input/TextArea";
import Select from "../Input/Select";
import Input from "../Input/Input";
import Label from "../Input/Label";
import ErrorMessage from "../Input/ErrorMessage";
import { useTranslation } from "react-i18next";

const AddressInformation = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  return (
    <div>
      <Label label={t("form.page.2.field.1")}>
        <Controller
          name="streetAddress"
          control={control}
          rules={{ required: t("form.page.2.field.1.required") }}
          render={({ field: { ref, ...field } }) => (
            <TextArea {...field} placeholder={t("form.page.2.field.1")} />
          )}
        />
        {errors.streetAddress && (
          <ErrorMessage>{`${errors.streetAddress.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.2.field.2")}>
        <Controller
          name="state"
          control={control}
          rules={{ required: t("form.page.2.field.2.required") }}
          render={({ field: { ref, onChange, ...field } }) => (
            <Select
              {...field}
              options={Object.keys(STATE_CITY).map((state) => ({
                label: state,
                value: state,
              }))}
              placeholder={t("form.page.2.field.2")}
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

      <Label label={t("form.page.2.field.3")}>
        <Controller
          name="city"
          control={control}
          rules={{ required: t("form.page.2.field.3.required") }}
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
              placeholder={t("form.page.2.field.3")}
            />
          )}
        />
        {errors.city && <ErrorMessage>{`${errors.city.message}`}</ErrorMessage>}
      </Label>

      <Label label={t("form.page.2.field.4")}>
        <Controller
          name="zipCode"
          control={control}
          rules={{
            required: t("form.page.2.field.4.required"),
            pattern: {
              value: /^[0-9]{5}-[0-9]{4}$/,
              message: t("form.page.2.field.4.pattern"),
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <Input {...field} placeholder={t("form.page.2.field.4")} />
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
