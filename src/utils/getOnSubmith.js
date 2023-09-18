import axios from "axios";
const onSubmit = async (event, reset) => {
  await axios.post("http://localhost:3001/db", event);
  reset();
};

export default onSubmit;
