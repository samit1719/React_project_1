import styled from "styled-components";
import Video from "../assets/video.jpg";

const ImageContainer = styled.button`
  position: absolute;
  width: 840px;
  height: 473px;
  border: none;
  cursor: pointer;
  background: none;
  transition: width 1s, height 1s;
  transition-timing-function: ease-in-out;

  &:hover {
    width: 850px;
    height: 483px;
`;

const VideoImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    transition: box-shadow 0.35s;
    transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 1px 45px 100px 5px rgba(51, 51, 51, 0.2);
`;

const TourContent = () => {
  return (
    <ImageContainer
      onClick={() => {
        //open overlay model
      }}
    >
      <VideoImage
        src={Video}
        alt="Learn more about Lobe by watching our tour video ."
        loading="lazy"
      />
    </ImageContainer>
  );
};

export default TourContent;
