
function changetest(){
    var nav = document.getElementById("navbar");
    if (window.scrollY > 100) {
        console.log(window.scrollY)
        nav.classList.add('bg');
    }
    else{
        console.log(window.scrollY)
        nav.classList.remove('bg');
    }
}

window.addEventListener('scroll', changetest)
