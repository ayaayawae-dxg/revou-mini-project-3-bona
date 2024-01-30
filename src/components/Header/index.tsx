import { Layout } from "antd";

const { Header: CustomHeader } = Layout;

const Header = () => {
  return (
    <CustomHeader
      style={{
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#4096ff",
      }}
    >
      Digicamp
    </CustomHeader>
  );
};

export default Header;
