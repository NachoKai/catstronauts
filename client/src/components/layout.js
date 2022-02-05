import React from "react";
import { Header, Footer } from "../components";
import styled from "@emotion/styled";
import { widths, unit } from "../styles";

const Layout = ({ fullWidth, children, grid }) => (
  <>
    <Header />
    <PageContainer fullWidth={fullWidth} grid={grid}>
      {children}
    </PageContainer>
    <Footer />
  </>
);

export default Layout;

const PageContainer = styled.div(props => ({
  display: "flex",
  justifyContent: props.grid ? "center" : "top",
  flexDirection: props.grid ? "row" : "column",
  flexWrap: "wrap",
  alignSelf: "center",
  flexGrow: 1,
  maxWidth: props.fullWidth ? null : `${widths.regularPageWidth}px`,
  width: "100%",
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));
