import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://1176-66-96-203-254.ngrok-free.app/",
});

instance.interceptors.request.use(
  // first function called automatically when we are about to make a request
  // second function is called automatically if there is an error with the request
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; //returns the modified request object
  },
  (err) => {
    return Promise.reject(err); //returns a rejected promise so that the error is passed to the next .catch block
  }
);

export default instance;
