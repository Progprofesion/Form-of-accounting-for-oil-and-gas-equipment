const validName = (event) => {
  if (event.key === "ArrowLeft" || event.key === ":") {
  } else if (event.key === "ArrowRight") {
  } else if (event.key !== "Backspace" && /^[0-9+=]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export default validName;
