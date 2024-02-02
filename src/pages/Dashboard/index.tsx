import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { registrationState } from "store";

const Dashboard = () => {
  const registration = useRecoilValue(registrationState);

  return (
    <Result
      icon={<SmileOutlined />}
      title="Registration Completed!"
      subTitle={`Hello, ${registration.firstName}`}
    />
  );
};

export default Dashboard;
