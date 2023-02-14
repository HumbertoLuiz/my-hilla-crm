import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:8080/api",
    baseURL: "https://my-hilla-crm.herokuapp.com/login",
    headers: {
        "Content-type": "application/json"
    }
})