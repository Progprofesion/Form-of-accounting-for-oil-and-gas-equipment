import Dropdown from "../dropdown/Dropdown";
import Form from "../form/Form";

const FormPage = () => {
  return (
    <section className="formPage">
      <div className="container">
        <Dropdown />
        <Form />
      </div>
    </section>
  );
};

export default FormPage;
