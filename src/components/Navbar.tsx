
import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  // margin-left: 9em;
  
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3em;
  margin-left: 5em;
  
`;
const NavLink = styled.a<{ active: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.active ? "#333333" : "#767676")};
  font-weight: 500;
  cursor: pointer;
  
`;

const Logo = styled.h2`
  font-size: 24px;
  color: #333333;
  
`;

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeLink = location.pathname.slice(1);
  const linkTitles = ["Overview", "Examples", "Tour", "Blog", "Help"];
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>

        {linkTitles.map((title: string, idx: number) => {
          return (
            <NavLink
              key={idx}
              active={title.toLowerCase() === activeLink}
              onClick={() => navigate(`/${title.toLowerCase()}`)}
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
