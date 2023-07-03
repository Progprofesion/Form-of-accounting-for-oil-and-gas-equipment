const handleInputChange = (event, fn, add, date) => {
  const inputValue = event.target.value;
  if (inputValue.length === 2 && inputValue !== "0") {
    fn(inputValue + `${add}`);
  } else if (inputValue.length === 5 && date) {
    fn(inputValue + `${add}`);
  } else {
    fn(inputValue);
  }
};

export default handleInputChange;
