const menuIcon = document.getElementById("menuIcon")
const modeIcon = document.getElementById("modeIcon")
const menu = document.getElementById("menu")
const items = document.getElementsByClassName("menu--item")
const projCards = document.getElementsByClassName("card")
const projCardOverlay = document.getElementsByClassName("card--overlay")

const falseBodyEl = document.getElementById("falseB")
const linkToSkill = document.getElementById("skill-link")
const linkToProj = document.getElementById("proj-link")
const linkToCont = document.getElementById("cont-link")
const conForm = document.getElementById("form")
const liIcon = document.getElementById("LI-logo")
const gitIcon = document.getElementById("Git-logo")

for(let i = 0; i<projCards.length; i++){
    projCards[i].addEventListener("click", function () {
        for(let j = 0; j<projCards.length; j++){
            if(projCards[j].classList.contains("card-active")){
                projCardOverlay[j].classList.toggle("card--overlay-active")
                projCards[j].classList.toggle("card-active")
            }
        }
        projCardOverlay[i].classList.toggle("card--overlay-active")
        projCards[i].classList.toggle("card-active")
    })
}


function openMenu() {
    menuIcon.classList.remove("opener")
    menuIcon.classList.add("closer")

    for (i = 0; i < items.length; i++) {
        items[i].classList.remove("item--inactive")
        items[i].classList.add("item--active")
    }
}

function closeMenu() {
    menuIcon.classList.add("opener")
    menuIcon.classList.remove("closer")

    for (i = 0; i < items.length; i++) {
        items[i].classList.remove("item--active")
        items[i].classList.add("item--inactive")
    }
}
function toggleDarkMode() {
    falseBodyEl.classList.toggle("dmode2")
    document.getElementsByClassName("skill--item")[0].classList.toggle("dmode1-1")
    document.getElementsByClassName("projects--item")[0].classList.toggle("dmode3-2")
    document.getElementsByClassName("contact--item")[0].classList.toggle("dmode1-1")
    modeIcon.classList.toggle("dmode3-3")
    menuIcon.classList.toggle("dmode3-3")
    document.getElementById("hero").classList.toggle("dmode3")
    document.getElementById("portrait").classList.toggle("dmode3-1")
    document.getElementById("about-sec").classList.toggle("dmode1")
    document.getElementById("skill-sec").classList.toggle("dmode2-1")
    document.getElementById("skill-card").classList.toggle("dmode3")
    document.getElementById("proj-sec").classList.toggle("dmode2")
    document.getElementById("cont-sec").classList.toggle("dmode2-2")
    document.getElementById("cont-card").classList.toggle("dmode3")
    document.getElementById("foot").classList.toggle("dmode1")
    document.getElementById("con-name").classList.toggle("darkinput")
    document.getElementById("con-email").classList.toggle("darkinput")
    document.getElementById("message").classList.toggle("darkinput")
    document.getElementById("submit").classList.toggle("darkbtn")

    if(liIcon.alt == "LinkedIn l"){
        liIcon.alt = "LinkedIn d"
        liIcon.src = "svg/LogosLinkedinAlt.svg"
        gitIcon.src = "svg/LogoGithubAlt.svg"
    }
    else {
        liIcon.alt = "LinkedIn l"
        liIcon.src = "svg/LogosLinkedin.svg"
        gitIcon.src = "svg/LogoGithub.svg"
    }

}
function toggleDMCards(){
    for(let i = 0; i < projCards.length;i++){
        projCards[i].classList.toggle("darkcard")
    }
    for(let i = 0; i < projCardOverlay.length;i++){
        projCardOverlay[i].classList.toggle("dark-card-overlay")
    }
}

function darkMode() {
    modeIcon.classList.remove("lightmode")
    modeIcon.classList.add("darkmode")

    toggleDarkMode()
    toggleDMCards()
}

function lightMode() {
    modeIcon.classList.remove("darkmode")
    modeIcon.classList.add("lightmode")

    toggleDarkMode()
    toggleDMCards()
}

menuIcon.addEventListener("click", function () {
    if (menuIcon.classList.contains("opener")) {
        openMenu()
    }
    else {
        closeMenu()
    }
})

modeIcon.addEventListener("click", function () {
    if (modeIcon.classList.contains("lightmode")) {
        darkMode()
    }
    else {
        lightMode()
    }
})

linkToSkill.addEventListener("click", function () {
    closeMenu()
})
linkToProj.addEventListener("click", function () {
    closeMenu()
})
linkToCont.addEventListener("click", function () {
    closeMenu()
})
