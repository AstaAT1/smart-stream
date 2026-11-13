export function setData(data) {
    localStorage.setItem('mydata' , JSON.stringify(data))
}
export function getData() {
    const saveData = localStorage.getItem('mydata')

    if (!saveData) {
        return null
    }
       try {
        return JSON.parse(savedData)
    } catch {
        return null
    }
}


