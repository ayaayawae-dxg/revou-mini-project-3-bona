import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Dashboard from "./index";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

describe("Dashboard", () => {
  it("renders dashboard with registration information", () => {
    const registration = {
      firstName: "John",
    };

    jest
      .spyOn(require("recoil"), "useRecoilValue")
      .mockReturnValue(registration);

    const { getByText } = render(
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    );

    expect(getByText("dashboard.title")).toBeInTheDocument();
    expect(getByText(`dashboard.subTitle John`)).toBeInTheDocument();
  });
});

