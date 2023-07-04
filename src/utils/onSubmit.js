import axios from "axios";

const onSubmit = async (event, fn) => {
  await axios.post("http://localhost:3001/db", event);
  fn();
};

export default onSubmit;
