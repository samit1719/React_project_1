import { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InfoHeader = styled.p`
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  width: 70%;
  margin: auto;
`;

const FAQSection = styled.div`
  margin-top: 2em;
  display: flex;
  gap:2em;
`;

const TabSectionContainer = styled.div``;
const TabSection = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  width: auto;
`;

const Tab = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5em 4em 0.5em 1em;
  color: ${(props) => (props.$active ? "white" : "inherit")};
  background-color: ${(props) => (props.$active ? "#04DDB2" : "none")};
  border-radius: 2.5px;
  width: 100%;
  font-size: 1em;
  text-align: left;
`;

const StyledLink = styled(Link)`
  padding: 0.5em 4em 0.5em 1em;
  color: inherit;
  text-decoration: none;
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
    "play",
    "Export",
    "Imporoving",
    "Tips",
  ];

  const contactTags = [
    { title: "Comunity", url: "https://aka.ms/LobeCommunity" },
    { title: "Lobe Tour", url: "/tour" },
    { title: "Examples", url: "/examples" },
    { title: "Contact Us", url: "mailto:samuelteshome1719@gmail.com" },
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
            {contactTags.map((contact: { title: string; url: string }, idx: number) => <StyledLink key={idx} to={contact.url}>{contact.title}</StyledLink>)}
          </TabSection>
        </TabSectionContainer>
        <DropdownSectionContainer></DropdownSectionContainer>
      </FAQSection>
    </Layout>
  );
};

export default Help;
