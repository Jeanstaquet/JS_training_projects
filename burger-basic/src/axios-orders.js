import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-app-ffe1a.firebaseio.com/"
});

export default instance;