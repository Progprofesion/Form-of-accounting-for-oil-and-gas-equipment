import React from "react";

const Report = () => {
  return (
    <form action="" className="form">
      <div className="form__wrappTime">
        <div className="form__wrappTime__data">Дата измерений: 15 55</div>
        <div className="form__wrappTime__time">Время замеров: 55 55 </div>
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
        <div className="numValve0">№ клапана полива</div>
      </div>
    </form>
  );
};

export default Report;
