import { getFromLocal, updateLocal } from './localStorage.js'
import { check } from './show.js'

const renderCities = () => {
    const output = document.querySelector('main')
    output.innerHTML = ``
    let cities = getFromLocal()
    cities.forEach(e => {
        const deleteBtn = document.createElement('div')
        deleteBtn.innerHTML = `<span class='line1'></span><span class='line2'></span>`
        deleteBtn.className += "deleteBtn";
        const newDiv = document.createElement('div')
        newDiv.classList.add("cityCard")
        newDiv.innerHTML = `
        <h3>${e.city}, ${e.country}</h3>
        <img src='${e.icon}'>
        <p>${e.description}</p>
        <p>Wind: ${e.windSpeed} m/s</p>
        <p>Temperature: ${e.temp} °C</p>
        <p>Humidity: ${e.humidity}%</p>
        <p>Date taken: ${e.date}</p>
        `
        newDiv.appendChild(deleteBtn)
        output.appendChild(newDiv)
        deleteBtn.addEventListener('click', function() {
            cities = cities.filter(el => el.id !== e.id)
            updateLocal(cities)
            renderCities()
        })
    });
    check()
}

export { renderCities }