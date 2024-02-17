import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  position: relative;
`;

const InnerLayoutContainer = styled.div`
  max-width: 100%;
`;
function Layout(props: { children: React.ReactNode }) {
  const location = useLocation();
  const currentRoute: any = location.pathname;
  const { children } = props;
  return (
    <LayoutContainer>
      <Navbar />
      {(currentRoute !== "/" &&
        currentRoute !== "/overview") && <Hero />}
      <InnerLayoutContainer>
        {children}
        <Footer />
      </InnerLayoutContainer>
    </LayoutContainer>
  );
}

export default Layout;
