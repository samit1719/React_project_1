import Layout from '../components/Layout'
import TourContent from '../components/TourContent';
import styled from 'styled-components';


const TourContentContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 940px;
    height: 573px;
`;

const Tour = () => {
    return (
      <Layout>
        <TourContentContainer>
          <TourContent />
        </TourContentContainer>
      </Layout>
    );
  
}

export default Tour;