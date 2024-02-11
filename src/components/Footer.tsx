import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 6em;
  
`;

const CallToActionText = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  width: 70%;
  color: #333333;
  
`;

const Hr = styled.hr`
  width: 70%;
  height: 1px;
  background-color: #767676;
  margin-bottom: 3em;
  
`;
// *************************************************************
const FooterBottom = styled.div`
  display: flex;
  align-items: flex-start;

  justify-content: space-between;
  // gap:5em;
  width: 60%;
  
`;

const FooterColumnHeader = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 0.40em;
  color: #333333;
  
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  
`;

const FooterColumnLink = styled.div`
  text-decoration: none;
  cursor: pointer;
  
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  margin-left: -2em;

  
`;
const SocialMediaLink = styled.a`
  border-radius: 100%;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #04ddb2;
  color: #fff;
  cursor: pointer;
  
`;

const Footer = () => {
  const columnData = [
    { title: "About", links: ["Download", "Overview", "Examples", "Blog"] },
    {
      title: "General",
      links: ["Notice", "Licence", "Press Inquir", "Press Images"],
    },
    {
      title: "Resources",
      links: ["Help", "Tour", "Contact", "Privacy"],
    },
  ];

  const icons = [faComment, faTwitter, faYoutube];

  return (
    <FooterContainer>
      <CallToAction>
        <CallToActionText>Train your app with Lobe</CallToActionText>
        <DownloadBtn />
      </CallToAction>
      <Hr />
      <FooterBottom>
        <FooterColumn>
          <FooterColumnHeader style={{marginBottom: '-0.3em'}}>Lobe </FooterColumnHeader>
          <p>
            A product by Microsoft.
            <br />
            <br />
            All rights reserved.
            <br />
            <br />
            © Microsoft 2021
            <br />
            <br />
            <br />
            <br />
          </p>
          
        </FooterColumn>
        {columnData.map((column, idx: number) => {
          return (
            <FooterColumn key={idx}>
              <FooterColumnHeader>{column.title}</FooterColumnHeader>
              {column.links.map((link, idx: number) => {
                return <FooterColumnLink key={idx}>{link}</FooterColumnLink>;
              })}
            </FooterColumn>
          );
        })}
        <SocialMediaLinks>
          {icons.map((icon, idx: number) => {
            return (
              <SocialMediaLink key={idx}>
                <FontAwesomeIcon icon={icon} size="lg" />
              </SocialMediaLink>
            );
          })}
        </SocialMediaLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
