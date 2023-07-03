import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartment } from "../../store/reducer/dataSlice";

import "./dropdown.scss";
function Dropdown() {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const department = useSelector((state) => state.dataSlice.department);

  return (
    <div className="dropdown">
      <select
        className="dropdown__wrapp"
        value={department}
        onChange={(e) => {
          dispatch(setDepartment(e.target.value));
          setDisable(true);
        }}
      >
        <option disabled={disable} value="">
          Выберите отделение
        </option>
        <option value="1.1">Отделение 1.1</option>
        <option value="1.2">Отделение 1.2</option>
        <option value="1.4">Отделение 1.4</option>
        <option value="1.5">Отделение 1.5</option>
      </select>
    </div>
  );
}

export default Dropdown;
