import styled from "styled-components";
import Layout from "../components/Layout";
import Card from "../components/Card";

const ExamplesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

type Example = {
  videoUrl: string;
  title: string;
  subTitle: string;
};

const Examples = () => {
  const examples = [
    {
      videoUrl: "https://www.lobe.ai/assets/examples/Plants.mp4",
      title: "Plant Species",
      subTitle:
        "Train your app to distinguish between different species of plants to help people identify poisonous vegetation.",
    },
    {
      videoUrl: "https://www.lobe.ai/assets/examples/Hand%20Count.mp4",
      title: "Hand Gestures",
      subTitle:
        "Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
    },
    {
      videoUrl: "https://www.lobe.ai/assets/examples/Feel%20the%20Burn.mp4",
      title: "Personal Trainer",
      subTitle:
        "Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.",
    },
    {
      videoUrl: "https://www.lobe.ai/assets/examples/Laughing.mp4",
      title: "Emotional Reactions",
      subTitle:
        "Train your app to react to different expressions allowing people to send emoji reactions using just their face.",
    },
    {
      videoUrl:
        "https://www.lobe.ai/assets/examples/Painting%20with%20Mike.mp4",
      title: "Interactive Painting",
      subTitle:
        "Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.",
    },
    {
      videoUrl: "https://www.lobe.ai/assets/examples/Mask%20Up.mp4",
      title: "Safety Precautions",
      subTitle:
        "Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.",
    },
  ];

  return (
    <Layout>
      <ExamplesContainer>
        {examples.map((example: Example, idx: number) => {
          return (
            <Card
              videoUrl={example.videoUrl}
              cardTitle={example.title}
              cardText={example.subTitle}
              altText={example.title}
              key={idx}
            />
          );
        })}
      </ExamplesContainer>
    </Layout>
  );
};

export default Examples;
