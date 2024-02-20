import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DropdownListProps {
  list: React.ReactElement[];
}

const DropdownList: React.FC<DropdownListProps> = ({ list }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1em",
        marginBottom: "1em",
        // border: "1px solid #e0e0e0",
      }}
    >
      {list.map((listItem: React.ReactElement, idx: number) => {
        return (
          <div key={idx}>
            <FontAwesomeIcon icon={["fas", "check-circle"]} />
            {listItem}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownList;
