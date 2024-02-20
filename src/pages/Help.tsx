import styled from "styled-components";
import Layout from "../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dropdownData } from "../utils/dropdown";
import Dropdown from "../components/Dropdown";

const InfoHeader = styled.p`
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  width: 70%;
  margin: auto;
`;

const FAQSection = styled.div`
  margin-top: 4em;
  display: flex;
  gap: 2em;
`;

const TabSectionContainer = styled.div``;
const TabSection = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  width: auto;
`;
const Tab = styled.button<{ $active: boolean }>`
  background: none;
  cursor: pointer;
  border: none;
  padding: 0.5em 4em 0.5em 1em;
  color: ${(props) => (props.$active ? "white" : "inherit")};
  background-color: ${(props) => (props.$active ? "#04DDB2" : "white")};
  border-radius: 5px;
  width: 100%;
  font-size: 1em;
  text-align: left;
`;

const StyledLink = styled(Link)`
  padding: 0.5em 4em 0.5em 1em;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
const DropdownSectionContainer = styled.div``;

const Help = () => {
  const [activeTab, setActiveTab] = useState("Welcome");

  const FAQTags = [
    "Welcome",
    "Label",
    "Train",
    "Results",
    "Play",
    "Export",
    "Improving",
    "Tips",
  ];

  const contactTags = [
    { title: "Community", url: "https://aka.ms/LobeCommunity" },
    { title: "Lobe Tour", url: "/tour" },
    { title: "Examples", url: "/examples" },
    { title: "Contact Us", url: "mailto:angumbao@sandtech.com" },
  ];

  return (
    <Layout>
      <InfoHeader>
        Everything you need to know to train great machine learning models with
        Lobe.
      </InfoHeader>
      <FAQSection>
        <TabSectionContainer>
          <TabSection>
            {FAQTags.map((faqTitle: string, idx: number) => (
              <Tab
                key={idx}
                onClick={() => setActiveTab(faqTitle)}
                $active={activeTab === faqTitle}
              >
                {faqTitle}
              </Tab>
            ))}
          </TabSection>
          <TabSection>
            {contactTags.map(
              (
                contact: {
                  title: string;
                  url: string;
                },
                idx: number
              ) => (
                <StyledLink key={idx} to={contact.url}>
                  {contact.title}
                </StyledLink>
              )
            )}
          </TabSection>
        </TabSectionContainer>
        <DropdownSectionContainer>
          {
            //@ts-ignore
            dropdownData[activeTab.toLowerCase()].map(
              (
                dropdown: {
                  titleText: string;
                  content: React.ReactNode;
                },
                idx: number
              ) => {
                return (
                  <Dropdown
                    key={idx}
                    titleText={dropdown.titleText}
                    content={dropdown.content}
                  />
                );
              }
            )
          }
        </DropdownSectionContainer>
      </FAQSection>
    </Layout>
  );
};

export default Help;
