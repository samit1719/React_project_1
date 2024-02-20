import { Link } from "react-router-dom";
import DropdownList from "../components/DropdownList";

const dropdownData = {
  welcome: [
    {
      titleText: "What is Lobe?",
      content: (
        <>
          <p>
            Lobe is a free, private desktop application that has everything you
            need to take your machine learning ideas from prototype to
            production.
          </p>
          <DropdownList
            list={[
              <p>
                <Link to={"/label"}>Label</Link> your examples
              </p>,
              <p>
                <Link to={"/train"}>Train</Link> a model
              </p>,
              <p>
                Evaluate training <Link to={"/train"}>results</Link>
              </p>,
              <p>
                <Link to={"/train"}>Play</Link> with your model
              </p>,
              <p>
                <Link to={"/train"}>Export</Link> and use your model in an app
              </p>,
            ]}
          />
        </>
      ),
    },
  ],
  label: [],
  train: [],
  results: [],
  play: [],
  export: [],
  improving: [],
  tips: [],
};

export { dropdownData };
