const $header = document.querySelector("header");
const $logo = document.querySelectorAll('.logo')[0];
const $navbar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll', toggleHeader, false);
function toggleHeader(){
    if (window.pageYOffset > 60 && $header.classList.contains("max-header")){
        console.log('header menor');
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute("src", "imgs/omnitech-logo-2.png");
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navbar.classList.remove('max-nav');
        $navbar.classList.add('min-nav');
    } else if(window.pageYOffset <= 60 && $header.classList.contains("min-header")){
        console.log('HEADER MAIOR!');
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.firstElementChild.setAttribute("src", "imgs/omnitech-logo-1.png");
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navbar.classList.add('max-nav');
        $navbar.classList.remove('min-nav');
    }
  }
