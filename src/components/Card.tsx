import styled from "styled-components";

const CardContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 32px;
  background-color: #fff;
  overflow: hidden;
  margin: 32px;
  box-shadow: 0 100px 140px -50px rgba(0, 0, 0, 0.25),
    0 0 20px 0 rgba(0, 0, 0, 0.03);
  cursor: default;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05, 1.05);
    cursor: pointer;
  }
`;

const CardHero = styled.div`
  width: 100%;
  height: 50%;
`;
const VideoContainer = styled.video`
  height: auto;
  width: 100%;
  object-fit: cover;
`;
const ImageContainer = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  height: 50%;
  padding: 1em 2em 2em 2em;
  font-size: 1.1em;
`;
const CardTitle = styled.h3<{ $cardDate: boolean }>`
  margin-top: ${(prop) => (prop.$cardDate ? "2em" : "4em")};
`;
const CardText = styled.p``;
const CardDateContainer = styled.div``;
const CardDate = styled.p`
  font-size: 0.75em;
  color: #989898;
`;

const Card = (props: {
  videoUrl?: string;
  imageUrl?: string;
  cardTitle: string;
  cardText: string;
  cardDate?: string;
  altText: string;
}) => {
  const { videoUrl, imageUrl, cardText, cardTitle, cardDate, altText } = props;

  return (
    <CardContainer>
      <CardHero>
        {videoUrl ? (
          <VideoContainer src={videoUrl} autoPlay loop />
        ) : (
          <ImageContainer src={imageUrl} alt={altText} />
        )}
      </CardHero>

      <TextContainer>
        <CardTitle $cardDate={!!cardDate}>{cardTitle}</CardTitle>
        <CardText>{cardText}</CardText>
        {cardDate && (
          <CardDateContainer>
            <CardDate>Release&nbsp;&nbsp;·&nbsp;&nbsp;{cardDate}</CardDate>
          </CardDateContainer>
        )}
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
