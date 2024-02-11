import styled from "styled-components";

const Button = styled.button`
  border-radius: 100px;
  background-color: #04ddb2;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border: none;
  height: 3em;
  padding: 0 1.5em;
  cursor: pointer;
  font-size: 1.2em;
`;
const DownloadBtn = () => {
  return (
    <Button
      onClick={() => {
        // redirect to rickroll
      }}
    >
      Download
    </Button>
  );
};

export default DownloadBtn;
