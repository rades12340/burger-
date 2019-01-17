import axios from "axios";

const instance = axios.create({
  baseURL: "https://friendly-lamp-196417.firebaseio.com/"
});

export default instance;
