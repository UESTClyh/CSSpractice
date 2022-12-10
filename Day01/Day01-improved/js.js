const imgs = document.querySelectorAll(".imgs")
imgs.forEach(image => {
    image.addEventListener('click', function () {
        imgs.forEach(ima => {
            ima.classList.remove('change')
        })
        image.classList.add('change')
    })
});
(function () {
    imgs[0].click();
})()
