import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PersonalInformation from "./PersonalInformation";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "antd";
import dayjs from "dayjs";
import { DRegistration } from "database";
import { act } from "react-dom/test-utils";
import { t } from "i18next";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => { }),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => { },
  },
}));

// jest.mock("react-hook-form", () => ({
//   ...jest.requireActual("react-hook-form"),
//   Controller: () => [],
//   useFormContext: jest.fn(() => ({
//     control: jest.fn(),
//     formState: {
//       errors: jest.fn(),
//     },
//     watch: jest.fn(),
//   })),
//   useForm: jest.fn(() => ({
//     handleSubmit: jest.fn(),
//   })),
// }));

const WrapperForm = ({ children }: any) => {
  const methods = useForm<DRegistration>();
  return (
    <FormProvider {...methods}>
      <Form>{children}</Form>
    </FormProvider>
  );
};

describe("PersonalInformation", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should render all fields", async () => {
    render(
      <WrapperForm>
        <PersonalInformation />
      </WrapperForm>
    );
    expect(screen.getByText("form.page.1.field.1")).toBeInTheDocument();
    expect(screen.getByText("form.page.1.field.2")).toBeInTheDocument();
    expect(screen.getByText("form.page.1.field.3")).toBeInTheDocument();
  });

  it("should validate user input fields", async () => {
    render(
      <WrapperForm>
        <PersonalInformation />
        <button type="submit">Submit</button>
      </WrapperForm>
    )

    const firstNameInput = screen.getByLabelText("form.page.1.field.1");
    const emailInput = screen.getByLabelText("form.page.1.field.2");
    const dateBirthInput = screen.getByLabelText("form.page.1.field.3");
    const buttonSubmit = screen.getByRole("button", { name: /submit/i });

    fireEvent.input(firstNameInput, { target: { value: "" } });
    fireEvent.input(emailInput, { target: { value: "" } });
    fireEvent.input(dateBirthInput, { target: { value: "" } });

    fireEvent.submit(buttonSubmit)

    await waitFor(() => {
      setTimeout(() => {
        expect(
          screen.findByText("form.page.1.field.1.required")
        ).toBeInTheDocument();
        expect(
          screen.findByText("form.page.1.field.2.required")
        ).toBeInTheDocument();
        expect(
          screen.findByText("form.page.1.field.3.required")
        ).toBeInTheDocument();
      }, 1000)
    })
  });
});
