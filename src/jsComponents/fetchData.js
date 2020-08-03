import { updateLocal, getFromLocal } from './localStorage.js'
import { renderCities } from './renderCities.js'


const fetchData = (city) => {
    const cities = getFromLocal()
    const exists = cities.find(e => e.city.toLowerCase() === city.toLowerCase())
    if (exists) {
        document.querySelector('.submit').style.display = 'inline-block'
        document.querySelector('img').style.display = 'none'
        return alert('City already exists')
    }
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=10ff4edd20ac8f699392498448a726ae`
    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        const { name } = data
        const {main: {temp, humidity}} = data
        const {wind: {speed}} = data
        const {sys: {country}} = data
        const defaultDescription = data.weather[0].description
        const description = defaultDescription.charAt(0).toUpperCase() + defaultDescription.slice(1)
        const icon = data.weather[0].icon
        const dateNow = new Date()
        const minutes = dateNow.getMinutes().toString().length === 2 ? `${dateNow.getMinutes()}` : `0${dateNow.getMinutes()}`
        const hours = dateNow.getHours().toString().length === 2 ? `${dateNow.getHours()}` : `0${dateNow.getHours()}`
        const date = `${dateNow.getFullYear()} ${dateNow.getMonth() + 1} ${dateNow.getDate()} ${hours}:${minutes}`
        const id = new Date().getTime()
        const info = {
            id: id,
            temp: temp, 
            humidity: humidity, 
            windSpeed: speed, 
            country: country, 
            description: description, 
            icon: `http://openweathermap.org/img/wn/${icon}.png`,
            city: name,
            date: date
        }
        cities.push(info)
        updateLocal(cities)
        renderCities()
        })
    .catch(error => {
        alert('Sorry, cannot find such place')
        document.querySelector('.submit').style.display = 'inline-block'
        document.querySelector('img').style.display = 'none'
    })
    document.querySelector('.submit').style.display = 'inline-block'
    document.querySelector('img').style.display = 'none'
}

export { fetchData }