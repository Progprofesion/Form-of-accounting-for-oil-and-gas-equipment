// import axios from "axios";

const onSubmit = async (e, reset) => {
  e.preventDefault();
  //   axios
  //     .post("https://server-vercel-mocha.vercel.app/posts")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   let arr = JSON.stringify(e);
  localStorage.setItem("reports", e);
  console.log(e);
  reset();
};

export default onSubmit;
