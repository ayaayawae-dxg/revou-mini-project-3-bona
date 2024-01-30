import { Layout } from "antd";

const { Footer: CustomFooter } = Layout;

const Footer = () => {
  return (
    <CustomFooter
      style={{
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#4096ff",
      }}
    >
      Footer
    </CustomFooter>
  );
};

export default Footer;
