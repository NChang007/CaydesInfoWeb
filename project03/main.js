const nav = document.getElementById('navbar')
let navPosition = navbar.offsetTop

function navStickTop() {
    if (window.pageYOffset >= navPosition) {
        nav.classList.add("fixed-top")
    } else {
        nav.classList.remove("fixed-top")
    }
}

window.onscroll = () => {
    navStickTop();
}

window.onresize = () => {
    navPosition = navbar.offsetTop
}