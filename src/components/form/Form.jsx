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

      <div className="form__wrappData">
        <div className="form__wrappValve">
          <div className="form__wrappValve__numValve">№ клапана полива</div>
          <div className="form__wrappValve__numValve">1</div>
          <div className="form__wrappValve__numValve">2</div>
          <div className="form__wrappValve__numValve">3</div>
          <div className="form__wrappValve__numValve">4</div>
          <div className="form__wrappValve__numValve">5</div>
          <div className="form__wrappValve__numValve">6</div>
        </div>

        <div className="form__wrappInputs">
          <div className="drainage">Дренаж</div>
          <div className="mat">Мат</div>
          <div className="input1"></div>
          <div className="input2"></div>
          <div className="input3"></div>
          <div className="input4"></div>
          <div className="input5"></div>
          <div className="input6"></div>
          <div className="input7"></div>
          <div className="input8"></div>
          <div className="input9"></div>
          <div className="input10"></div>
          <div className="input11"></div>
          <div className="input12"></div>
          <div className="input13"></div>
          <div className="input14"></div>
          <div className="input15"></div>
          <div className="inout16"></div>
          <div className="input17"></div>
          <div className="input18"></div>
          <div className="input19"></div>
          <div className="input20"></div>
          <div className="input21"></div>
          <div className="input22"></div>
          <div className="input23"></div>
          <div className="iuput24"></div>
          <div className="input25"></div>
          <div className="input26"></div>
          <div className="input27"></div>
          <div className="input28"></div>
          <div className="input29"></div>
          <div className="input30"></div>
          <div className="input31"></div>
          <div className="input32"></div>
          <div className="input33"></div>
          <div className="input34"></div>
          <div className="input35"></div>
          <div className="inoput36"></div>
          <div className="inout37"></div>
          <div className="input38"></div>
          <div className="input39"></div>
          <div className="inout40"></div>
          <div className="input41"></div>
          <div className="input42"></div>
          <div className="valve">Капельница</div>
          <div className="valveEC">EC</div>
          <div className="valvePh">ph</div>
          <div className="drainValve">Объем</div>
          <div className="drainEC">EC</div>
          <div className="drainPh">ph</div>
          <div className="matEc">EC</div>
          <div className="matPh">ph</div>
          <div className="valveVolume">Объем</div>
          <div className="volume1"></div>
          <div className="volume2"></div>
          <div className="volume3"></div>
          <div className="volume4"></div>
          <div className="volume5"></div>
          <div className="volume6"></div>
        </div>
      </div>
    </form>
  );
};

export default Form;
