import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./form.scss";
import { useGetDbQuery, useGetInputsQuery } from "../api/apiSlice";
import Input from "../input/Input";

const Form = ({ boolean, countView, slice }) => {
  // const [timeFrom, setTiemFrom] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
  });

  const { data: dataReport, isLoading, isError } = useGetDbQuery(null);
  const { data: getInputs } = useGetInputsQuery(null);

  const department = useSelector((state) => state.dataSlice.department);

  const onSubmit = async (event) => {
    await axios.post("http://localhost:3001/db", event);
    reset();
  };

  const [timeFrom, setTimeFrom] = useState("");
  const [timeBefore, setTimeBefore] = useState("");
  const [date, setDate] = useState("");

  function timeHandleInputChange(event, fn) {
    const inputValue = event.target.value;
    if (inputValue.length === 2 && inputValue !== "0") {
      fn(inputValue + ":");
    } else {
      fn(inputValue);
    }
  }

  function dateHandleInputChange(event, fn) {
    const inputValue = event.target.value;
    if (inputValue.length === 2 && inputValue !== "0") {
      fn(inputValue + ".");
    } else if (inputValue.length === 5) {
      fn(inputValue + ".");
    } else {
      fn(inputValue);
    }
  }

  const test = (dataReport) => {
    if (dataReport && getInputs) {
      return dataReport.db.map((item) => (
        <div className="item" key={item.id}>
          {Object.entries(item)
            .filter(([key, value]) => key.startsWith("inValve"))
            .map(([key, value]) => (
              <p key={key}>{value}</p>
            ))}
        </div>
      ));
    }
  };

  let elements = test(dataReport);

  // {dataReport
  //   ? dataReport.db.map((data) => {
  //       <div className="" key={data.id}>
  //         {Object.entries(data)
  //           .filter(([key, value]) =>
  //             key.startsWith("inValve")
  //           )
  //           .map(([key, value]) => (
  //             <p className={item.className} key={key}>
  //               {value}
  //             </p>
  //           ))}
  //       </div>;
  //     })
  //   : null}

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
      {dataReport
        ? dataReport.db.slice(slice, dataReport.db.length).map((item) => {
            // Для переключения отображения количества элементов
            if (item.id <= countView) {
              return (
                <div className="form__wrapp" key={item.id}>
                  <div className="form__wrappTime">
                    {boolean ? (
                      <input
                        {...register("department", {
                          value: department,
                        })}
                        className="department"
                        style={{ display: "none" }}
                        readOnly
                      />
                    ) : (
                      <p className="form__department">{`Отдел: ${item.department}`}</p>
                    )}
                    <div className="form__wrappTime__data">
                      <p> Дата измерений:</p>
                      {boolean ? (
                        <input
                          key={item.id}
                          type="text"
                          {...register("dataMeasur", {
                            required: true,
                          })}
                          placeholder="00.00.0000"
                          className="dataMeasur"
                          maxLength={10}
                          onChange={(e) => dateHandleInputChange(e, setDate)}
                          value={date}
                          onKeyDown={(event) => {
                            if (
                              event.key !== "Backspace" &&
                              event.key !== "." &&
                              !/^[0-9]+$/.test(event.key)
                            ) {
                              event.preventDefault();
                            }
                          }}
                        />
                      ) : (
                        item.dataMeasur
                      )}
                    </div>
                    <div className="form__wrappTime__time">
                      Время замеров: <p>от</p>
                      {boolean ? (
                        <input
                          {...register("timeFrom", { required: true })}
                          className="timeFrom"
                          placeholder="от"
                          type="text"
                          maxLength={5}
                          onChange={(e) =>
                            timeHandleInputChange(e, setTimeFrom)
                          }
                          value={timeFrom}
                          onKeyDown={(event) => {
                            if (
                              event.key !== "Backspace" &&
                              event.key !== "." &&
                              !/^[0-9]+$/.test(event.key)
                            ) {
                              event.preventDefault();
                            }
                          }}
                        />
                      ) : (
                        <p>{item.timeFrom}</p>
                      )}
                      <p>до</p>
                      {boolean ? (
                        <input
                          {...register("timeBefore", { required: true })}
                          className="timeBefore"
                          placeholder="до"
                          type="text"
                          maxLength={5}
                          onChange={(e) =>
                            timeHandleInputChange(e, setTimeBefore)
                          }
                          value={timeBefore}
                          onKeyDown={(event) => {
                            if (
                              event.key !== "Backspace" &&
                              !/^[0-9]+$/.test(event.key)
                            ) {
                              event.preventDefault();
                            }
                          }}
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
                    {/* {getInputs
                      ? getInputs.map((input) => {
                          return (
                            <input
                              {...register(`${input.className}`, {
                                required: true,
                              })}
                              key={input.className}
                              type="text"
                              className={`${input.className}`}
                              maxLength={3}
                              onKeyDown={(event) => {
                                if (
                                  event.key !== "Backspace" &&
                                  event.key !== "." &&
                                  !/^[0-9]+$/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          );
                        })
                      : null} */}
                    {boolean && getInputs
                      ? getInputs.map((input) => {
                          return (
                            <input
                              {...register(`${input.className}`, {
                                required: true,
                              })}
                              key={input.className}
                              type="text"
                              className={`${input.className}`}
                              maxLength={3}
                              onKeyDown={(event) => {
                                if (
                                  event.key !== "Backspace" &&
                                  event.key !== "." &&
                                  !/^[0-9]+$/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                              }}
                            />
                          );
                        })
                      : dataReport.db.map((report) => {
                          return Object.entries(report)
                            .filter(([key, value]) => key.startsWith("inValve"))
                            .map(([key, value]) => {
                              return (
                                <p className={key} key={key}>
                                  {value}
                                </p>
                              );
                            });

                          console.log(report);
                        })}

                    <div className="numValve0">№ клапана полива</div>
                  </div>
                  {boolean ? (
                    <p className="form__error">Заполните все поля</p>
                  ) : null}
                  <div className="form__buttonWrapp">
                    <input
                      {...register("inValve1", { required: true })}
                      type="text"
                      placeholder="фамилия имя"
                      className="form__name"
                    />
                    {boolean ? (
                      <button disabled={!isValid} className="form__submith">
                        Отправить
                      </button>
                    ) : null}
                    {boolean ? (
                      <Link to="/report">
                        {dataReport.db.length > 1 ? (
                          <button className="form__receiveReport">Отчет</button>
                        ) : (
                          <button
                            disabled={true}
                            className="form__receiveReport"
                          >
                            Отчет
                          </button>
                        )}
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
