const preButton = document.querySelector('.pre')
const nextButton = document.querySelector('.next')
const points = document.querySelectorAll('.point')
const line =document.querySelector('.line')
var mark = 0;

points[mark].classList.add('active')
preButton.classList.add('btnDisabled')
preButton.disabled = true
nextButton.addEventListener('click', function () {
    if (mark == 0) {
        preButton.classList.remove('btnDisabled')
        preButton.disabled=false
    }
    points[++mark].classList.add('active')
    line.style.width = mark * 33.3+'%'
    if (mark >= 3) {
        nextButton.classList.add('btnDisabled')
        nextButton.disabled = true

    }
})
preButton.addEventListener('click', function () {
    if (mark == 3) {
        nextButton.disabled = false
        nextButton.classList.remove('btnDisabled')
    }
    nextButton.disabled = false
    points[mark--].classList.remove('active')
    line.style.width = mark * 33.3 + '%'
    if (mark <= 0) {
        preButton.classList.add('btnDisabled')
        preButton.disabled = true

    }
})