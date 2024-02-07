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
    <>
      <Label label={t("form.page.2.field.1")} name={"streetAddress"}>
        <Controller
          name="streetAddress"
          control={control}
          rules={{ required: t("form.page.2.field.1.required") }}
          render={({ field: { ref, name, ...field } }) => (
            <TextArea
              {...field}
              name={name}
              placeholder={t("form.page.2.field.1")}
            />
          )}
        />
        {errors.streetAddress && (
          <ErrorMessage>{`${errors.streetAddress.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.2.field.2")} name={"state"}>
        <Controller
          name="state"
          control={control}
          rules={{ required: t("form.page.2.field.2.required") }}
          render={({ field: { ref, onChange, name, ...field } }) => (
            <Select
              {...field}
              name={name}
              options={Object.keys(STATE_CITY).map((state) => ({
                label: state,
                value: state,
              }))}
              placeholder={t("form.page.2.field.2")}
              onChange={(e) => {
                onChange(e);
                setValue("city", null);
              }}
            />
          )}
        />
        {errors.state && (
          <ErrorMessage>{`${errors.state.message}`}</ErrorMessage>
        )}
      </Label>

      <Label label={t("form.page.2.field.3")} name="city">
        <Controller
          name="city"
          control={control}
          rules={{ required: t("form.page.2.field.3.required") }}
          render={({ field: { ref, name, ...field } }) => (
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
              name={name}
            />
          )}
        />
        {errors.city && <ErrorMessage>{`${errors.city.message}`}</ErrorMessage>}
      </Label>

      <Label label={t("form.page.2.field.4")} name={"zipCode"}>
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
          render={({ field: { ref, name, ...field } }) => (
            <Input
              {...field}
              name={name}
              placeholder={t("form.page.2.field.4")}
            />
          )}
        />
        {errors.zipCode && (
          <ErrorMessage>{`${errors.zipCode.message}`}</ErrorMessage>
        )}
      </Label>
    </>
  );
};

export default AddressInformation;
