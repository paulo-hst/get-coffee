const bodyElement = document.querySelector('body')
const headerWrapper = document.querySelector('.header-wrapper')
const logoImg = document.querySelector('.logo img')
const headerAnchor = document.querySelectorAll('header ul li a')
const welcome = document.querySelector('.welcome')
const social = document.querySelector('.social')

const checkbox = document.querySelector('.dark-mode')

if(checkbox.checked){
    darkMode()
}

function darkMode(){
    bodyElement.classList.toggle('dark-body')
    headerWrapper.classList.toggle('dark-header-wrapper')
    logoImg.classList.toggle('dark-logo-img')
    
    headerAnchor.forEach(element => {
        element.classList.toggle('dark-link')
    });
    
    welcome.classList.toggle('dark-welcome')
    social.classList.toggle('dark-social')
}