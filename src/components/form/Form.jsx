import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx/xlsx.mjs";
import "./form.scss";
import { useGetDbQuery } from "../api/apiSlice";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const { data: products, isLoading, isError } = useGetDbQuery(null);

  const convertJsonToExcel = () => {
    if (products) {
      console.log(products.db.slice(0, 1));
      const workSheet = XLSX.utils.json_to_sheet(products.db);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, "db");
      // // Generate buffer

      XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

      // Binary string

      XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

      XLSX.writeFile(workBook, "currDb.xlsx");
    }
  };

  // convertJsonToExcel();

  const onSubmit = async (event) => {
    await axios.post("http://localhost:3001/db", event);
    // console.log(event);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__wrappTime">
          <div className="form__wrappTime__data">
            Дата измерений:
            <input
              {...register("dateMeasur", {})}
              placeholder="00.00.0000"
              className="dateMeasur"
              type="text"
            />
          </div>
          <div className="form__wrappTime__time">
            Время замеров:
            <input
              {...register("timeFrom", {})}
              placeholder="от"
              className="timeFrom"
              type="text"
            />
            <input
              {...register("timeBefore", {})}
              className="timeBefore"
              placeholder="до"
              type="text"
            />
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
          <input
            {...register("inValve1", {})}
            type="text"
            className="inValve1"
          />
          <input
            {...register("inValve2", {})}
            type="text"
            className="inValve2"
          />
          <input
            {...register("inValve3", {})}
            type="text"
            className="inValve3"
          />
          <input
            {...register("inValve4", {})}
            type="text"
            className="inValve4"
          />
          <input
            {...register("inValve5", {})}
            type="text"
            className="inValve5"
          />
          <input
            {...register("inValve6", {})}
            type="text"
            className="inValve6"
          />
          <input
            {...register("inValve7", {})}
            type="text"
            className="inValve7"
          />
          <input
            {...register("inValve8", {})}
            type="text"
            className="inValve8"
          />
          <input
            {...register("inValve9", {})}
            type="text"
            className="inValve9"
          />
          <input
            {...register("inValve10", {})}
            type="text"
            className="inValve10"
          />
          <input
            {...register("inValve11", {})}
            type="text"
            className="inValve11"
          />
          <input
            {...register("inValve12", {})}
            type="text"
            className="inValve12"
          />
          <input
            {...register("inValve13", {})}
            type="text"
            className="inValve13"
          />
          <input
            {...register("inValve14", {})}
            type="text"
            className="inValve14"
          />
          <input
            {...register("inValve15", {})}
            type="text"
            className="inValve15"
          />
          <input
            {...register("inValve16", {})}
            type="text"
            className="inValve16"
          />
          <input
            {...register("inValve17", {})}
            type="text"
            className="inValve17"
          />
          <input
            {...register("inValve18", {})}
            type="text"
            className="inValve18"
          />
          <input
            {...register("inValve19", {})}
            type="text"
            className="inValve19"
          />
          <input
            {...register("inValve20", {})}
            type="text"
            className="inValve20"
          />
          <input
            {...register("inValve21", {})}
            type="text"
            className="inValve21"
          />
          <input
            {...register("inValve22", {})}
            type="text"
            className="inValve22"
          />
          <input
            {...register("inValve23", {})}
            type="text"
            className="inValve23"
          />
          <input
            {...register("inValve24", {})}
            type="text"
            className="inValve24"
          />
          <input
            {...register("inValve25", {})}
            type="text"
            className="inValve25"
          />
          <input
            {...register("inValve26", {})}
            type="text"
            className="inValve26"
          />
          <input
            {...register("inValve27", {})}
            type="text"
            className="inValve27"
          />
          <input
            {...register("inValve28", {})}
            type="text"
            className="inValve28"
          />
          <input
            {...register("inValve29", {})}
            type="text"
            className="inValve29"
          />
          <input
            {...register("inValve30", {})}
            type="text"
            className="inValve30"
          />
          <input
            {...register("inValve30", {})}
            type="text"
            className="inValve31"
          />
          <input
            {...register("inValve31", {})}
            type="text"
            className="inValve32"
          />
          <input
            {...register("inValve32", {})}
            type="text"
            className="inValve33"
          />
          <input
            {...register("inValve33", {})}
            type="text"
            className="inValve34"
          />
          <input
            {...register("inValve34", {})}
            type="text"
            className="inValve35"
          />
          <input
            {...register("inValve35", {})}
            type="text"
            className="inValve36"
          />
          <input
            {...register("inValve36", {})}
            type="text"
            className="inValve37"
          />
          <input
            {...register("inValve37", {})}
            type="text"
            className="inValve38"
          />
          <input
            {...register("inValve38", {})}
            type="text"
            className="inValve39"
          />
          <input
            {...register("inValve39", {})}
            type="text"
            className="inValve40"
          />
          <input
            {...register("inValve40", {})}
            type="text"
            className="inValve41"
          />
          <input
            {...register("inValve41", {})}
            type="text"
            className="inValve42"
          />
          <input
            {...register("inValve42", {})}
            type="text"
            className="inValve43"
          />
          <input
            {...register("inValve43", {})}
            type="text"
            className="inValve44"
          />
          <input
            {...register("inValve44", {})}
            type="text"
            className="inValve45"
          />
          <input
            {...register("inValve45", {})}
            type="text"
            className="inValve46"
          />
          <input
            {...register("inValve47", {})}
            type="text"
            className="inValve47"
          />
          <input
            {...register("inValve48", {})}
            type="text"
            className="inValve48"
          />

          <div className="numValve0">№ клапана полива</div>
        </div>
        <div className="form__buttonWrapp">
          <button
            onClick={(e) => {
              // onSubmit(e);
              // reset();
            }}
            className="form__submith"
          >
            Отправить
          </button>
        </div>
      </form>

      <Link className="form__download" to="/report">
        <button className="form__download">Получить</button>
      </Link>
    </>
  );
};

export default Form;
