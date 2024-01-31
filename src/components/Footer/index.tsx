import { Layout } from "antd";

const { Footer: CustomFooter } = Layout;

const Footer = () => {
  return (
    <CustomFooter
      style={{
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#00011e",
        height: "auto",
        fontSize: "3rem",
        lineHeight: "normal",
        padding: "1rem 1rem"
      }}
    >
      Footer
    </CustomFooter>
  );
};

export default Footer;
