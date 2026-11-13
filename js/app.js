import { api } from "../services/api.js";
import { change  } from "./ui.js";
import {getData , setData } from "./storage.js"
const loading = document.querySelector('#loading')


const savedData = getData()
if (Array.isArray(savedData)) {
    change(savedData)
    loading.classList.add('hidden')
}
else{
api().then(function (data) {
    if (Array.isArray(data)) {
        setData(data)
        change(data)
        
    }
})
}


