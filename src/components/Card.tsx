import styled from "styled-components";

const CardContainer = styled.div`
  width: 600px;
  border-radius: 32px;
  background-color: #fff;
  overflow: hidden;
  margin: 32px;
  box-shadow: 0 100px 140px -50px rgba(0, 0, 0, 0.25),
    0 0 20px 0 rgba(0, 0, 0, 0.03);
  cursor: pointer;
`;

const VideoContainer = styled.video``;
const ImageContainer = styled.img``;
const TextContainer = styled.div``;
const CardTitle = styled.h3``;
const CardText = styled.p``;
const CardDate = styled.p``;

const Card = (props: {
  isExample?: boolean;
  videoUrl?: string;
  imageUrl?: string;
  cardTitle?: string;
  cardText?: string;
  cardDate?: string;
  altText: string;
}) => {
  const {
    isExample = false,
    videoUrl,
    imageUrl,
    cardText,
    cardTitle,
    cardDate,
    altText,
  } = props;

  return (
    <CardContainer>
      {isExample ? (
        <VideoContainer src={videoUrl} />
      ) : (
        <ImageContainer src={imageUrl} alt={altText} />
      )}
      <TextContainer>
        <CardTitle>{cardTitle}</CardTitle>
        <CardText>{cardText}</CardText>
        {!isExample && <CardDate>{cardDate}</CardDate>}
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
