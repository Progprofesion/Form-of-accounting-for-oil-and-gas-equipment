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
      <div className="form__wrappTime">
        <div className="form__wrappTime__data">
          Дата измерений:
          <input type="text" />
        </div>
        <div className="form__wrappTime__time">
          {" "}
          Время замеров: <input type="text" placeholder="от" />{" "}
          <input type="text" placeholder="до" />
        </div>
      </div>
      <div className="form__wrappInputs">
        <div className="numValve1">1</div>
        <div className="numValve2">2</div>
        <div className="numValve3">3</div>
        <div className="numValve4">4</div>
        <div className="numValve5">5</div>
        <div className="numValve6">6</div>
        <div className="dropper"></div>
        <div className="drainage"></div>
        <div className="Mat"></div>
        <div className="dropperVolume"></div>
        <div className="dropperEC"></div>
        <div className="dropperPh"></div>
        <div className="drainVolume"></div>
        <div className="drainEC"></div>
        <div className="drainPh"></div>
        <div className="matEC"></div>
        <div className="matPh"></div>
        <div className="inValve1"></div>
        <div className="inValve2"></div>
        <div className="inValve3"></div>
        <div className="inValve4"></div>
        <div className="inValve5"></div>
        <div className="inValve6"></div>
        <div className="inValve7"></div>
        <div className="inValve8"></div>
        <div className="inValve9"></div>
        <div className="inValve10"></div>
        <div className="inValve11"></div>
        <div className="inValve12"></div>
        <div className="inValve13"></div>
        <div className="inValve14"></div>
        <div className="inValve15"></div>
        <div className="inValve16"></div>
        <div className="inValve17"></div>
        <div className="inValve18"></div>
        <div className="inValve19"></div>
        <div className="inValve20"></div>
        <div className="inValve21"></div>
        <div className="inValve22"></div>
        <div className="inValve23"></div>
        <div className="inValve24"></div>
        <div className="inValve25"></div>
        <div className="inValve26"></div>
        <div className="inValve27"></div>
        <div className="inValve28"></div>
        <div className="inValve29"></div>
        <div className="inValve30"></div>
        <div className="inValve31"></div>
        <div className="inValve32"></div>
        <div className="inValve33"></div>
        <div className="inValve34"></div>
        <div className="inValve35"></div>
        <div className="inValve36"></div>
        <div className="inValve37"></div>
        <div className="inValve38"></div>
        <div className="inValve39"></div>
        <div className="inValve40"></div>
        <div className="inValve41"></div>
        <div className="inValve42"></div>
        <div className="inValve43"></div>
        <div className="inValve44"></div>
        <div className="inValve45"></div>
        <div className="inValve46"></div>
        <div className="inValve47"></div>
        <div className="inValve48"></div>
        <div className="numValve0">№ клапана полива</div>
      </div>
    </form>
  );
};

export default Form;
