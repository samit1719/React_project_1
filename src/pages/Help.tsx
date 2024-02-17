import Layout from '../components/Layout'
import styled from 'styled-components'

const InfoHeader = styled.p`
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  width: 70%;
  margin: auto;
`;

const FAQSection = styled.div`
  display: flex;
  gap: 2em;
`;

const TabSectionContainer = styled.div`

`;
const TabSection = styled.div`
  margin-bottom: 2em;
`;

const Tab = styled.button<$active: boolean>`;
  border: none;
  padding: 0.5em 2em 0.5em 0.5em;
  color: ${(props) => (props.$active ? "white" : "inherit")};
  background-color: ${(props) => (props.$active ? "#04DDB2" : "none")};
  border-radius: 2.5px;
`;
const DropdownSectionContainer = styled.div``;


const Help = () => {
  const FAQTags = [
    'Welcome','Label', 'Train','Results','play','Export','Imporoving','Tips'
  ];

  const contactTags = [
    'Comunity','Lobe Tour','Examples','Contact Us'
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
              {
                FAQTags.map
                  (
                    (faqTitle: string, idx: number) =>
                      <Tab key={idx} onClick={ } $active={ }> {faqTitle}</Tab>
                  )
              }
            </TabSection>
            <TabSection>
            </TabSection> 
        </TabSectionContainer>
        <DropdownSectionContainer></DropdownSectionContainer>
      </FAQSection>
    </Layout>
  );
}

export default Help