import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { useSelector } from "react-redux";
import axios from "axios";
import "./form.scss";
import { useGetDbQuery } from "../api/apiSlice";
import Input from "../input/Input";

const Form = ({ boolean, countView, slice }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const { data: dataReport, isLoading, isError } = useGetDbQuery(null);

  const department = useSelector((state) => state.dataSlice.department);

  const onSubmit = async (event) => {
    await axios.post("http://localhost:3001/db", event);
  };
  // if (dataReport) {
  //   console.log(dataReport.db.length);
  // }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
      {dataReport
        ? // Нужно для скрытия стартового объекта.
          dataReport.db.slice(`${slice}`, dataReport.db.length).map((item) => {
            // Для переключения отображения количества элементов
            if (item.id <= countView) {
              return (
                <div className="form__wrapp" key={item.id}>
                  <div className="form__wrappTime">
                    <input
                      {...register("department", {})}
                      className="department"
                      value={department}
                      style={{ display: "none" }}
                    />
                    <div className="form__wrappTime__data">
                      <p> Дата измерений:</p>
                      {boolean ? (
                        <input
                          {...register("dataMeasur", {})}
                          placeholder="00.00.0000"
                          className="dataMeasur"
                          type="text"
                        />
                      ) : (
                        item.dataMeasur
                      )}
                    </div>
                    <div className="form__wrappTime__time">
                      Время замеров: <p>от</p>
                      {boolean ? (
                        <input
                          {...register("timeFrom", {})}
                          placeholder="от"
                          className="timeFrom"
                          type="text"
                        />
                      ) : (
                        <p>{item.timeFrom}</p>
                      )}
                      <p>до</p>
                      {boolean ? (
                        <input
                          {...register("timeBefore", {})}
                          className="timeBefore"
                          placeholder="до"
                          type="text"
                        />
                      ) : (
                        item.timeBefore
                      )}
                    </div>
                  </div>
                  <div className="form__wrappInputs">
                    <div className="numValve1">1</div>
                    <div className="numValve2">2</div>
                    <div className="numValve3">3</div>
                    <div className="numValve4">4</div>
                    <div className="numValve5">5</div>
                    <div className="numValve6">6</div>
                    <div className="dropper">Капельница</div>
                    <div className="drainage">Дренаж</div>
                    <div className="Mat">Мат</div>
                    <div className="dropperVolume">Объем</div>
                    <div className="dropperEC">EC</div>
                    <div className="dropperPh">ph</div>
                    <div className="drainVolume">Объем</div>
                    <div className="drainEC">EC</div>
                    <div className="drainPh">ph</div>
                    <div className="matEC">EC</div>
                    <div className="matPh">ph</div>
                    {boolean ? (
                      <input
                        {...register("inValve1", {})}
                        type="text"
                        className="inValve1"
                      />
                    ) : (
                      <div className="inValve1">{item.inValve1}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve2", {})}
                        type="text"
                        className="inValve2"
                      />
                    ) : (
                      <div className="inValve2">{item.inValve2}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve3", {})}
                        type="text"
                        className="inValve3"
                      />
                    ) : (
                      <div className="inValve3">{item.inValve3}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve4", {})}
                        type="text"
                        className="inValve4"
                      />
                    ) : (
                      <div className="inValve4">{item.inValve4}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve5", {})}
                        type="text"
                        className="inValve5"
                      />
                    ) : (
                      <div className="inValve5">{item.inValve5}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve6", {})}
                        type="text"
                        className="inValve6"
                      />
                    ) : (
                      <div className="inValve6">{item.inValve6}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve7", {})}
                        type="text"
                        className="inValve7"
                      />
                    ) : (
                      <div className="inValve7">{item.inValve7}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve8", {})}
                        type="text"
                        className="inValve8"
                      />
                    ) : (
                      <div className="inValve8">{item.inValve8}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve9", {})}
                        type="text"
                        className="inValve9"
                      />
                    ) : (
                      <div className="inValve9">{item.inValve9}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve10", {})}
                        type="text"
                        className="inValve10"
                      />
                    ) : (
                      <div className="inValve10">{item.inValve10}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve11", {})}
                        type="text"
                        className="inValve11"
                      />
                    ) : (
                      <div className="inValve11">{item.inValve11}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve12", {})}
                        type="text"
                        className="inValve12"
                      />
                    ) : (
                      <div className="inValve12">{item.inValve12}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve13", {})}
                        type="text"
                        className="inValve13"
                      />
                    ) : (
                      <div className="inValve13">{item.inValve13}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve14", {})}
                        type="text"
                        className="inValve14"
                      />
                    ) : (
                      <div className="inValve14">{item.inValve14}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve15", {})}
                        type="text"
                        className="inValve15"
                      />
                    ) : (
                      <div className="inValve15">{item.inValve15}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve16", {})}
                        type="text"
                        className="inValve16"
                      />
                    ) : (
                      <div className="inValve16">{item.inValve16}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve17", {})}
                        type="text"
                        className="inValve17"
                      />
                    ) : (
                      <div className="inValve17">{item.inValve17}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve18", {})}
                        type="text"
                        className="inValve18"
                      />
                    ) : (
                      <div className="inValve18">{item.inValve18}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve19", {})}
                        type="text"
                        className="inValve19"
                      />
                    ) : (
                      <div className="inValve19">{item.inValve19}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve20", {})}
                        type="text"
                        className="inValve20"
                      />
                    ) : (
                      <div className="inValve20">{item.inValve20}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve21", {})}
                        type="text"
                        className="inValve21"
                      />
                    ) : (
                      <div className="inValve21">{item.inValve21}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve22", {})}
                        type="text"
                        className="inValve22"
                      />
                    ) : (
                      <div className="inValve22">{item.inValve22}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve23", {})}
                        type="text"
                        className="inValve23"
                      />
                    ) : (
                      <div className="inValve23">{item.inValve23}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve24", {})}
                        type="text"
                        className="inValve24"
                      />
                    ) : (
                      <div className="inValve24">{item.inValve24}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve25", {})}
                        type="text"
                        className="inValve25"
                      />
                    ) : (
                      <div className="inValve25">{item.inValve25}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve26", {})}
                        type="text"
                        className="inValve26"
                      />
                    ) : (
                      <div className="inValve26">{item.inValve26}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve27", {})}
                        type="text"
                        className="inValve27"
                      />
                    ) : (
                      <div className="inValve27">{item.inValve27}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve28", {})}
                        type="text"
                        className="inValve28"
                      />
                    ) : (
                      <div className="inValve28">{item.inValve28}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve29", {})}
                        type="text"
                        className="inValve29"
                      />
                    ) : (
                      <div className="inValve29">{item.inValve29}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve30", {})}
                        type="text"
                        className="inValve30"
                      />
                    ) : (
                      <div className="inValve30">{item.inValve30}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve31", {})}
                        type="text"
                        className="inValve31"
                      />
                    ) : (
                      <div className="inValve31">{item.inValve31}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve32", {})}
                        type="text"
                        className="inValve32"
                      />
                    ) : (
                      <div className="inValve32">{item.inValve32}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve33", {})}
                        type="text"
                        className="inValve33"
                      />
                    ) : (
                      <div className="inValve33">{item.inValve33}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve34", {})}
                        type="text"
                        className="inValve34"
                      />
                    ) : (
                      <div className="inValve34">{item.inValve34}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve35", {})}
                        type="text"
                        className="inValve35"
                      />
                    ) : (
                      <div className="inValve35">{item.inValve35}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve36", {})}
                        type="text"
                        className="inValve36"
                      />
                    ) : (
                      <div className="inValve36">{item.inValve36}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve37", {})}
                        type="text"
                        className="inValve37"
                      />
                    ) : (
                      <div className="inValve37">{item.inValve37}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve38", {})}
                        type="text"
                        className="inValve38"
                      />
                    ) : (
                      <div className="inValve38">{item.inValve38}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve39", {})}
                        type="text"
                        className="inValve39"
                      />
                    ) : (
                      <div className="inValve39">{item.inValve39}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve40", {})}
                        type="text"
                        className="inValve40"
                      />
                    ) : (
                      <div className="inValve40">{item.inValve40}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve41", {})}
                        type="text"
                        className="inValve41"
                      />
                    ) : (
                      <div className="inValve41">{item.inValve41}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve42", {})}
                        type="text"
                        className="inValve42"
                      />
                    ) : (
                      <div className="inValve42">{item.inValve42}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve43", {})}
                        type="text"
                        className="inValve43"
                      />
                    ) : (
                      <div className="inValve43">{item.inValve43}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve44", {})}
                        type="text"
                        className="inValve44"
                      />
                    ) : (
                      <div className="inValve44">{item.inValve44}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve45", {})}
                        type="text"
                        className="inValve45"
                      />
                    ) : (
                      <div className="inValve45">{item.inValve45}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve46", {})}
                        type="text"
                        className="inValve46"
                      />
                    ) : (
                      <div className="inValve46">{item.inValve46}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve47", {})}
                        type="text"
                        className="inValve47"
                      />
                    ) : (
                      <div className="inValve47">{item.inValve47}</div>
                    )}
                    {boolean ? (
                      <input
                        {...register("inValve48", {})}
                        type="text"
                        className="inValve48"
                      />
                    ) : (
                      <div className="inValve48">{item.inValve48}</div>
                    )}
                    <div className="numValve0">№ клапана полива</div>
                  </div>
                  <div className="form__buttonWrapp">
                    <button className="form__submith">Отправить</button>
                    {boolean ? (
                      <Link to="/report">
                        <button className="form__receiveReport">
                          Получить
                        </button>
                      </Link>
                    ) : (
                      <Link to="/">
                        <button className="form__receiveReport">
                          Вернуться
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              );
            }
          })
        : null}
    </form>
  );
};

export default Form;
