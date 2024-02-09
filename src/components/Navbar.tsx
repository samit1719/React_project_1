import { useState } from "react";
import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  outline: 1px solid blue;
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3em;
  outline: 1px solid blue;
`;
const NavLink = styled.a<{ active: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.active ? "#333333" : "#767676")};
  font-weight: 500;
  cursor: pointer;
  outline: 1px solid blue;
`;

const Logo = styled.h2`
  font-size: 24px;
  color: #333333;
  outline: 1px solid blue;
`;

function Navbar() {
  const [activeLink, setActiveLink] = useState("Tour");
  const linkTitles = ["Overview", "Examples", "Tour", "Blog", "Help"];
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>
        {linkTitles.map((title: string, idx: number) => {
          return (
            <NavLink
              key={idx}
              active={title === activeLink}
              onClick={() => setActiveLink(title)}
            >
              {title}
            </NavLink>
          );
        })}
      </NavLinks>
      <DownloadBtn />
    </Nav>
  );
}
export default Navbar;
