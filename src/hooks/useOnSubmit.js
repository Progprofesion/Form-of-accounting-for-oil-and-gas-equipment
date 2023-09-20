// import axios from "axios";

const useOnSubmit = (reset) => {
  const onSubmit = (data) => {
    localStorage.setItem("reports", JSON.stringify([data]));
    reset();
  };

  return {
    onSubmit,
  };
};

export default useOnSubmit;
