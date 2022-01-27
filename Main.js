
function changetest(){
    var nav = document.getElementById("navbar");
    if (window.scrollY > 100) {
        nav.classList.add('bg');
    }
    else{
        nav.classList.remove('bg');
    }
    
}

window.addEventListener('scroll', changetest)
