import Footer from "./footer/Footer";
import Header from "./header/Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const MainWrap = styled.main`
  padding-top: 50px;
`;

export default Layout;
