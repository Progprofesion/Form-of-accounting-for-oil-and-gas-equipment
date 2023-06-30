import { useState } from "react";
import "./dropdown.scss";
function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown">
      <select
        className="dropdown__wrapp"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Выберите отделение</option>
        <option value="option1">Отделение 1.1</option>
        <option value="option2">Отделение 1.2</option>
        <option value="option4">Отделение 1.4</option>
        <option value="option5">Отделение 1.5</option>
      </select>
    </div>
  );
}

export default Dropdown;
