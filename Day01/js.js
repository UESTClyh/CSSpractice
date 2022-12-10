const container = document.querySelector(".container")
const imgs = document.querySelectorAll(".imgs")
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function (e) {
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].style.animation != '') {
                imgs[i].style.animation = 'zoomToSmall 0.7s ease-in forwards'
            } else
                imgs[i].style.animation = ''
        }
        e.target.parentNode.style.animation = 'zoomToBig 0.7s ease-in forwards'
    }
}
(function () {
    imgs[0].firstElementChild.click();
})()