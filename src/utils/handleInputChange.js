const handleInputChange = (event, fn, add) => {
  const inputValue = event.target.value;
  if (inputValue.length === 2 && inputValue !== "0") {
    fn(inputValue + `${add}`);
  } else {
    fn(inputValue);
  }
};

export default handleInputChange;
