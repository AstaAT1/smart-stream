import { api } from "../services/api.js";
import { change  } from "./ui.js";

api().then(function (data) {
    localStorage.setItem('mydata' , JSON.stringify(data))
    change(data)
})
