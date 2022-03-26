const header = document.querySelector('.header');


window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top < 50) {
        header.classList.remove('small')
        header.classList.remove('active')


    } else if (top >= 50 & top < 1270) {
        header.classList.add('small')
        header.classList.remove('active')

    }
    else if (top >= 1270 & top <= 1800) {

        header.classList.add('active')
    }
    else {
        header.classList.add('small')

    }
}
