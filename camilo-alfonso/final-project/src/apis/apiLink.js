import axios from "axios";

export default axios.create({
  baseURL: "https://api.spacexdata.com/v4/",
});
