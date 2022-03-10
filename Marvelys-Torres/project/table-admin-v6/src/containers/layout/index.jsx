import React from "react";
import { Layout as AntdLayout } from "antd";
import { Header } from "../../components/header";
import "./index.css";

const { Content } = AntdLayout;

export const Layout = ({ children }) => {
  return (
    <AntdLayout
      style={{ backgroundColor: "rgb(150, 186, 255)" }}
      className="layout"
    >
      <Header />
      <Content>{children} </Content>
    </AntdLayout>
  );
};
