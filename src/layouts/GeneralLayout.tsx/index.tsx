import { Layout } from "antd";
import { Footer, Header } from "components";
import React from "react";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const GeneralLayout = ({ children }: Props) => {
  return (
    <Layout
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: "50rem",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      <Header />
      <Content style={{overflow: "auto"}}>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default GeneralLayout;
