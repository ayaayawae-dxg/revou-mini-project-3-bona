import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { registrationState } from "store";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const registration = useRecoilValue(registrationState);

  return (
    <Result
      icon={<SmileOutlined />}
      title={t("dashboard.title")}
      subTitle={`${t("dashboard.subTitle")} ${registration.firstName}`}
    />
  );
};

export default Dashboard;
