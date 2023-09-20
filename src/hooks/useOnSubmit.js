// import axios from "axios";

const useOnSubmit = (reset) => {
  const onSubmit = (data) => {
    reset();
  };

  return {
    onSubmit,
  };
};

export default useOnSubmit;
