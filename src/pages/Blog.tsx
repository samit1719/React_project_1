import Layout from '../components/Layout'
import styled from 'styled-components'

const ArticlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Blog = () => {
  return (
    <Layout>
      <ArticlesContainer>
        {/* Insert your code here */}
      </ArticlesContainer>
    </Layout>
  )
}

export default Blog