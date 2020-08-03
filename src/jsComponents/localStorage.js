const updateLocal = (arr) => {
    const toJSON = JSON.stringify(arr)
    localStorage.setItem('cities', toJSON)
}

const getFromLocal = () => {
    const citiesJSON = localStorage.getItem('cities')
    const cities = JSON.parse(citiesJSON)
    return cities || []
}

export { updateLocal, getFromLocal }