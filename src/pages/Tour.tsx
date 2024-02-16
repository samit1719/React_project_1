import ReactModal from "react-modal";
import Layout from "../components/Layout";
import TourContent from "../components/TourContent";
import styled from "styled-components";
import { useState } from "react";
import "./css/Tour.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const TourContentContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 940px;
  height: 573px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  height: 5em;
  width: 5em;
  cursor: pointer;
`;

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

`;
const Tour = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Layout>
      <TourContentContainer>
        <TourContent modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <ReactModal
          className={"ReactModal__Overlay"}
          isOpen={modalOpen}
          contentLabel="Embedded YouTube video"
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          preventScroll
          shouldFocusAfterRender
          shouldReturnFocusAfterClose
          onRequestClose={() => setModalOpen(false)}
        >
          <ModalContentContainer>
            <CloseButton onClick={() => setModalOpen(false)}>
              <FontAwesomeIcon icon={faXmark}  size="2xl" color="white"/>
            </CloseButton>
            <iframe
              width="1480"
              height="924"
              src="https://www.youtube.com/embed/Mdcw3Sb98DA"
              title="Introducing Lobe  |  Build your first machine learning model in ten minutes."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </ModalContentContainer>  
        </ReactModal>
      </TourContentContainer>
    </Layout>
  );
};

export default Tour;
