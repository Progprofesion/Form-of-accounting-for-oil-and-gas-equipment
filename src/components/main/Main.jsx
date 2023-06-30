import Dropdown from "../dropdown/Dropdown";
import Form from "../form/Form";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Dropdown />
        <Form />
      </div>
    </div>
  );
};

export default Main;
