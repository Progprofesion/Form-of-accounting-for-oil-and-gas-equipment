import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartment } from "../../store/reducer/dataSlice";
import axios from "axios";
import "./dropdown.scss";
function Dropdown() {
  const dispatch = useDispatch();
  const department = useSelector((state) => state.dataSlice.department);
  // const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = async (event) => {
    // setSelectedOption(event.target.value);
    dispatch(setDepartment(event.target.value));
  };

  return (
    <div className="dropdown">
      <select
        className="dropdown__wrapp"
        value={department}
        onChange={handleOptionChange}
      >
        <option value="">Выберите отделение</option>
        <option value="1.1">Отделение 1.1</option>
        <option value="1.2">Отделение 1.2</option>
        <option value="1.4">Отделение 1.4</option>
        <option value="1.5">Отделение 1.5</option>
      </select>
    </div>
  );
}

export default Dropdown;
