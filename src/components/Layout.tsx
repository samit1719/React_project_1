import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  
  position: relative;
`;

const InnerLayoutContainer = styled.div`
  max-width: 70%;
  
`;
function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <LayoutContainer>
      <Navbar />
      <InnerLayoutContainer>
        {children}
        <Footer />
      </InnerLayoutContainer>
    </LayoutContainer>
  );
}

export default Layout;
