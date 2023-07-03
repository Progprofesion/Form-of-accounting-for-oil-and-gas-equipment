const handleInputChange = (event, fn, add, date, name) => {
  const inputValue = event.target.value;
  if (inputValue.length === 2 && inputValue !== "0") {
    fn(inputValue + `${add}`);
  } else if (inputValue.length === 1 && date) {
    fn(inputValue + `${add}`);
  } else if (inputValue.length === 1 && name) {
    fn(inputValue + `${add}`);
  } else {
    fn(inputValue);
  }
};

export default handleInputChange;
