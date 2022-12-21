import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 3000,
});

export const register = async (data) => {
  try {
    var sendData = await apiClient.post("/layout1", data);
    return sendData;
  } catch (error) {
    return {
      err: true,
      error
    };
  }
};

export const showTabledata = async () => {
    try {
      var sendData = await apiClient.post("/layout2");
      return sendData;
    } catch (error) {
      return {
        err: true,
        error
      };
    }
  };
