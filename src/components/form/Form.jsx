import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import onSubmit from "../../utils/onSubmit";
import validName from "../../utils/validName";
import validMeasurements from "../../utils/validMeasurements";
import validValves from "../../utils/validValves";
import useOnSubmit from "../../hooks/useOnSubmit";

import {
  useGetDbQuery,
  useGetInputsQuery,
  useGetDescrQuery,
  // useGetReportsQuery,
  // useCreatePostMutationQuery,
} from "../api/apiSlice";

import "./form.scss";

const Form = ({ boolean, countView, slice }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
  });

  const { data: dataReport } = useGetDbQuery(null);
  const { data: getInputs } = useGetInputsQuery(null);
  const { data: descr } = useGetDescrQuery(null);

  const department = useSelector((state) => state.dataSlice.department);
  const { onSubmit } = useOnSubmit(reset);

  let reports = localStorage.getItem("reports");

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
      {dataReport
        ? // slice нужен что-бы убрать первый инициализирующий объект в db.json
          // eslint-disable-next-line
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
                          onKeyDown={(event) => validMeasurements(event)}
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
                          onKeyDown={(event) => validMeasurements(event)}
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
                          onKeyDown={(event) => validMeasurements(event)}
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
                              onKeyDown={(event) => validValves(event)}
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
                  {!isValid ? (
                    <p className="form__error">Вы заполнили не все поля</p>
                  ) : null}
                  <div className="form__buttonWrapp">
                    {/* Ввод для Имени */}
                    {boolean ? (
                      <>
                        <p className="nameDescr">Измерения выполнил:</p>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          placeholder="фамилия имя"
                          className="name"
                          onKeyDown={(event) => validName(event)}
                        />
                      </>
                    ) : (
                      <>
                        <p className="nameDescr">Измерения выполнил:</p>
                        <p className="name">{item.name}</p>
                      </>
                    )}

                    {boolean ? (
                      <Link to="/report">
                        {dataReport ? (
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
                    <button
                      disabled={!isValid}
                      className={boolean ? "form__submit" : "form__submitNone"}
                    >
                      Отправить
                    </button>
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
