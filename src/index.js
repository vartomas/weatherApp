import './cssComponents/body.scss'
import './cssComponents/header.scss'
import './cssComponents/form.scss'
import './cssComponents/cards.scss'
import './cssComponents/footer.scss'

import { fetchData } from './jsComponents/fetchData.js'
import { renderCities } from './jsComponents/renderCities.js'
import { showMore, showLess } from './jsComponents/show.js'

renderCities()

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    const {target: { elements: { input: { value: input } }}} = event
    if(!input) return alert('Please enter city name')
    document.querySelector('.submit').style.display = 'none'
    document.querySelector('img').style.display = 'block'
    setTimeout(function(){ fetchData(input) }, 1000) // cia kad pamatyti loading spineri
    document.querySelector('input').value = ''
})

document.querySelector('.showMore').addEventListener('click', showMore)
document.querySelector('.showLess').addEventListener('click', showLess)

window.addEventListener('scroll', function() {
    if (window.scrollY > 20) document.querySelector('header').style.height = '56px'
    if (window.scrollY < 20) document.querySelector('header').style.height = '64px'
})