let slideCount = 0

const showMore = () => {
    const heightString = document.querySelector('main').offsetHeight
    document.querySelector('main').style.height = `${heightString + 340}px`
    slideCount += 1
    document.querySelector('.showMore').style.display = 'none'
    check()
}

const showLess = () => {
    const heightString = document.querySelector('main').offsetHeight
    document.querySelector('main').style.height = `${heightString - 340}px`
    slideCount -= 1
    check()
}

const check = () => {
    const elementCount = document.querySelectorAll('.cityCard').length
    if (slideCount === 0) {
        document.querySelector('.showLess').style.display = 'none'
    }
    if (slideCount > 0) {
        document.querySelector('.showLess').style.display = 'block'
    }
    elementCount > (slideCount * 3) + 3 ? document.querySelector('.showMore').style.display = 'block' : document.querySelector('.showMore').style.display = 'none'
}

export { showMore, showLess, check }