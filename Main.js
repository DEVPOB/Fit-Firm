
function changetest(){
    const navliHome = document.getElementById('activeHome')
    const navliInfo = document.getElementById('activeInfo')
    const navlidemo = document.getElementById('activeDemo')
    const navliaboutme = document.getElementById('activeAboutme')
    var nav = document.getElementById("navbar");
    // cring javascript
    if (window.scrollY > 170) {
        nav.classList.add('bg');
    }
    else{
        nav.classList.remove('bg');
    }
    if (window.scrollY >= 0 && window.scrollY <= 500) {
        navliHome.classList.add('activeHomeclass');
    }
    else{
        navliHome.classList.remove('activeHomeclass');
    }

    if (window.scrollY >= 500 && window.scrollY <= 2128) {
        navliInfo.classList.add('activeInfoclass');
    }
    else{
        navliInfo.classList.remove('activeInfoclass');
    }

    if (window.scrollY >= 2129 && window.scrollY <= 3000) {
        navlidemo.classList.add('activeDemoclass');
    }
    else{
        navlidemo.classList.remove('activeDemoclass');
    }

    if (window.scrollY >= 3000) {
        navliaboutme.classList.add('activeAboutmeclass');
    }
    else{
        navliaboutme.classList.remove('activeAboutmeclass');
    }
}
window.addEventListener('scroll', changetest)

