const validValves = (event) => {
  if (event.key === "ArrowLeft") {
  } else if (event.key === "ArrowRight") {
  } else if (event.key !== "Backspace" && !/^[0-9]+$/.test(event.key)) {
    event.preventDefault();
  }
  if (event.target.value.length === 1) {
    event.target.value = event.target.value + ".";
  }
  if (event.key === "Backspace") {
    event.target.value = event.target.value.substring(
      0,
      event.target.value.length - 1
    );
  }
};

export default validValves;
