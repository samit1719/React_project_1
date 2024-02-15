import styled from "styled-components";
import Layout from "../components/Layout";
import Card from "../components/Card";

const ArticlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

type Article = {
  headerImg: string;
  title: string;
  subTitle: string;
  date: string;
};

const Blog = () => {
  const articles = [
    {
      headerImg:
        "https://www.lobe.ai/assets/blog/use-your-model-in-power-platform/lobe-and-power-platform.png",
      title: "Use your Lobe model in Power Platform",
      subTitle:
        "We're excited to announce a new integration with Microsoft Power Platform",
      date: "15 November 2021",
    },
    {
      headerImg:
        "https://www.lobe.ai/assets/blog/introducing-new-ways-to-use-your-model/March%20Release%20Cards%204.jpg",
      title: "Introducing new ways to use your model",
      subTitle:
        "Lobe 0.9 introduces new ways of using and introducing your model to your app.",
      date: "23 March 2021",
    },
    {
      headerImg:
        "https://www.lobe.ai/assets/blog/exporting-your-model-101/March%20Release%20Bison.jpg",
      title: "Use your model 101",
      subTitle:
        "Learn everything you need to know to export your model and use it in your app.",
      date: "23 March 2021",
    },
    {
      headerImg:
        "https://www.lobe.ai/assets/blog/machine-learning-kit-with-adafruit/Adafruit%20Lobe%20Hero.jpg",
      title: "Machine Learning Kit with Adafruit",
      subTitle:
        "Introducing a brand new machine learning kit from Adafruit and Lobe.",
      date: "31 March 2021",
    },
    {
      headerImg:
        "https://www.lobe.ai/assets/blog/four-new-features-in-lobe/Release%202.jpg",
      title: "Four new features in Lobe",
      subTitle:
        "Select your camera source, export your model to new formats, and more in the new Lobe.",
      date: "10 December 2020",
    },
  ];

  return (
    <Layout>
      <ArticlesContainer>
        {articles.map((article: Article, idx: number) => {
          return (
            <Card
              key={idx}
              imageUrl={article.headerImg}
              cardTitle={article.title}
              cardText={article.subTitle}
              cardDate={article.date}
              altText={article.title}
            />
          );
        })}
      </ArticlesContainer>
    </Layout>
  );
};

export default Blog;
