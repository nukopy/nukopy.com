import { styled } from "@mui/material";

import { routes } from "@/routes";
import Header from "./Header";

const LayoutWrapper = styled("div")({
  minHeight: "100vh",
});

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header routes={routes} />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
