import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Dropdown = ({
  titleText,
  content,
}: {
  titleText: string;
  content: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div onClick={() => setVisible(!visible)}>
        <p>{titleText}</p>
        <FontAwesomeIcon icon={!visible ? faChevronDown : faChevronUp} />
      </div>
      {visible && <div>{content}</div>}
    </div>
  );
};

export default Dropdown;
