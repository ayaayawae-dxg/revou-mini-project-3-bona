import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PersonalInformation from "./PersonalInformation";
import { act } from "react-dom/test-utils";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ReactNode } from "react";
import { Form } from "antd";

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

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  Controller: ({ children, ...rest }: any) => <>{children}</>,
  useFormContext: jest.fn(() => ({
    control: jest.fn(),
    formState: {
      errors: jest.fn(),
    },
    watch: jest.fn(),
  })),
  useForm: jest.fn(() => ({
    handleSubmit: jest.fn()
  })),
}));

// const WrapperForm = ({ children }: any) => {
//   const methods = useForm()
//   return (
//     <FormProvider {...methods}>
//       <Form>
//         {children}
//       </Form>
//     </FormProvider>
//   )
// }

describe("PersonalInformation", () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
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
      <PersonalInformation />
    );
    expect(screen.getByText("form.page.1.field.1")).toBeInTheDocument();
    expect(screen.getByText("form.page.1.field.2")).toBeInTheDocument();
    expect(screen.getByText("form.page.1.field.3")).toBeInTheDocument();
  });

  it("should validate user input fields", async () => {
    const debug = render(
      <>
        <PersonalInformation />
        <button type="submit">Submit</button>
      </>
    );

    // const usernameInput = screen.getByRole("textbox", { name: /form.page.3.field.1/i });
    const usernameInput = screen.getByText("form.page.3.field.1");
    const passwordInput = screen.getByText("form.page.3.field.2");
    const rePasswordInput = screen.getByText("form.page.3.field.3");

    userEvent.type(usernameInput, "");
    userEvent.type(passwordInput, "");
    userEvent.type(rePasswordInput, "");

    // const { handleSubmit } = useForm()
    // handleSubmit(() => { })()

    // methods.handleSubmit((data) => {
    //   setCurrent(current + 1);
    // })()

    // Ensure error messages are displayed
    await waitFor(() => {
      expect(screen.getByText("form.page.3.field.1.required")).toBeInTheDocument();
    });
    expect(screen.getByText("form.page.3.field.2.required")).toBeInTheDocument();
    expect(screen.getByText("form.page.3.field.3.required")).toBeInTheDocument();

    // Clear inputs
    // userEvent.clear(usernameInput);
    // userEvent.clear(passwordInput);
    // userEvent.clear(rePasswordInput);

    // Enter valid inputs
    // userEvent.type(usernameInput, "validuser");
    // userEvent.type(passwordInput, "Password1!");
    // userEvent.type(rePasswordInput, "Password1!");

    // Ensure no error messages are displayed
    // expect(
    //   screen.queryByText("Username is required")
    // ).not.toBeInTheDocument();
    // expect(
    //   screen.queryByText("Password must be at least 8 characters")
    // ).not.toBeInTheDocument();
    // expect(
    //   screen.queryByText("Password must contain at least one lowercase letter")
    // ).not.toBeInTheDocument();
    // expect(
    //   screen.queryByText("Password must contain at least one uppercase letter")
    // ).not.toBeInTheDocument();
    // expect(
    //   screen.queryByText("Password must contain at least one symbol")
    // ).not.toBeInTheDocument();
    // expect(screen.queryByText("Passwords must match")).not.toBeInTheDocument();
  });
});
