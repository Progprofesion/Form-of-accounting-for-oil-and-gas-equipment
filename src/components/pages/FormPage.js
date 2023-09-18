import Dropdown from "../dropdown/Dropdown";
import Form from "../form/Form";

import "./formPage.scss";

const FormPage = () => {
  return (
    <section className="formPage">
      <div className="container">
        <Dropdown />
        <Form boolean={true} countView={1} slice={0} />
      </div>
    </section>
  );
};

export default FormPage;
