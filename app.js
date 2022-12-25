const bar = document.getElementById("bar");
const closes = document.getElementById("close")
const nav = document.getElementById("navbar");

if(bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}

if(closes) {
    closes.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}

const loginOpen = document.querySelector(".login");
const loginform = document.querySelector(".loginform")
const loginClose = document.querySelector(".close");
const popup = document.querySelector(".overlay");

loginOpen.addEventListener("click", () => {
    popup.classList.add("showoverlay");
})

loginOpen.addEventListener("click", () => {
    loginform.classList.add("showloginform");
})

loginClose.addEventListener("click", () => {
    popup.classList.remove("showoverlay");
})

loginClose.addEventListener("click", () => {
    loginform.classList.remove("showloginform");
})