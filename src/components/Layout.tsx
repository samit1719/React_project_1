import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  outline: 1px solid blue;
  position: relative;
`;

const InnerLayoutContainer = styled.div`
  max-width: 70%;
  outline: 1px solid blue;
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
