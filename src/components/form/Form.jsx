import { useForm } from "react-hook-form";
import "./form.scss";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <form action="" className="form">
      <div className="form__wrappData">
        <div className="form__wrappData__data">
          Дата измерений:
          <input type="text" />
        </div>
        <div className="form__wrappData__time">
          {" "}
          Время замеров: <input type="text" placeholder="от" />{" "}
          <input type="text" placeholder="до" />
        </div>
      </div>
      <div className="form__department">Отделение:</div>
    </form>
  );
};

export default Form;
