import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  useGetDbQuery,
  useGetInputsQuery,
  useGetDescrQuery,
} from "../api/apiSlice";

import "./form.scss";

const Form = ({ boolean, countView, slice }) => {
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
  const { data: descr } = useGetDescrQuery(null);

  const department = useSelector((state) => state.dataSlice.department);

  const onSubmit = async (event) => {
    await axios.post("http://localhost:3001/db", event);
    reset();
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
      {dataReport
        ? // slice нужен что-бы убрать первый инициализирующий объект в db.json
          dataReport.db.slice(slice, dataReport.db.length).map((item) => {
            // item.id <= countView нужно для переключения отображения количества элементов
            // eslint-disable-next-line
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
                      {/* Ввод для Даты */}
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
                          onKeyDown={(event) => {
                            if (
                              event.key === "ArrowLeft" ||
                              event.key === "."
                            ) {
                            } else if (event.key === "ArrowRight") {
                            } else if (
                              event.key !== "Backspace" &&
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
                      {/* Ввод для времени */}
                      Время замеров: <p>от</p>
                      {boolean ? (
                        <input
                          {...register("timeFrom", { required: true })}
                          className="timeFrom"
                          placeholder="от"
                          type="text"
                          maxLength={5}
                          onKeyDown={(event) => {
                            if (
                              event.key === "ArrowLeft" ||
                              event.key === ":"
                            ) {
                            } else if (event.key === "ArrowRight") {
                            } else if (
                              event.key !== "Backspace" &&
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
                          onKeyDown={(event) => {
                            if (
                              event.key === "ArrowLeft" ||
                              event.key === ":"
                            ) {
                            } else if (event.key === "ArrowRight") {
                            } else if (
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
                    {/* Ввод для данных по клапану*/}
                    {descr
                      ? descr.map((item) => {
                          return Object.entries(item).map(([key, value]) => {
                            return (
                              <p
                                style={{
                                  border: "1px solid aliceblue",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                className={key}
                                key={key}
                              >
                                {value}
                              </p>
                            );
                          });
                        })
                      : null}
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
                                if (event.key === "ArrowLeft") {
                                } else if (event.key === "ArrowRight") {
                                } else if (
                                  event.key !== "Backspace" &&
                                  !/^[0-9]+$/.test(event.key)
                                ) {
                                  event.preventDefault();
                                }
                                if (event.target.value.length === 1) {
                                  event.target.value = event.target.value + ".";
                                }
                                if (event.key === "Backspace") {
                                  event.target.value =
                                    event.target.value.substring(
                                      0,
                                      event.target.value.length - 1
                                    );
                                }
                              }}
                            />
                          );
                        })
                      : getInputs
                      ? Object.entries(item)
                          .filter(([key, value]) => key.startsWith("inValve"))
                          .map(([key, value]) => {
                            return (
                              <p
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  border: "1px solid aliceblue",
                                }}
                                className={key}
                                key={key}
                              >
                                {value}
                              </p>
                            );
                          })
                      : null}
                  </div>
                  {boolean ? (
                    <p className="form__error">Заполните все поля</p>
                  ) : null}
                  <div className="form__buttonWrapp">
                    {/* Ввод для Имени */}
                    {boolean ? (
                      <>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          placeholder="фамилия имя"
                          className="name"
                          onKeyDown={(event) => {
                            if (
                              event.key === "ArrowLeft" ||
                              event.key === ":"
                            ) {
                            } else if (event.key === "ArrowRight") {
                            } else if (
                              event.key !== "Backspace" &&
                              /^[0-9]+$/.test(event.key)
                            ) {
                              event.preventDefault();
                            }
                          }}
                        />
                        <p className="nameDescr">Измерения выполнил:</p>
                      </>
                    ) : (
                      <>
                        <p className="name">{item.name}</p>
                        <p className="nameDescr">Измерения выполнил:</p>
                      </>
                    )}
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
