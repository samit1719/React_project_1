import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
	border-bottom: '1px solid rgba(0, 0, 0, 0.4);
	padding-bottom: 2em;
`;

const DropDownButton = styled.button`
	border: none;
	background-color: inherit;
	width: 100%:
	display: flex;
	alignItems: center;
	justifyContent: space-between;
`;

const TitleText = styled.p`
  font-weight: bold;
`;

const Dropdown = ({
  titleText,
  content,
}: {
  titleText: string;
  content: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <DropDownContainer>
      <DropDownButton onClick={() => setVisible(!visible)}>
        <TitleText>{titleText}</TitleText>
        <FontAwesomeIcon icon={!visible ? faChevronDown : faChevronUp} />
      </DropDownButton>
      {visible && <div>{content}</div>}
    </DropDownContainer>
  );
};

export default Dropdown;
