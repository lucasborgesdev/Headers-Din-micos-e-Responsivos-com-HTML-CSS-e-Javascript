const $header = document.querySelector("header");
const $logo = document.querySelectorAll('.logo')[0];
const $navbar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
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
        $menu.firstElementChild.classList.remove('max-hamburguer')
        $menu.firstElementChild.classList.add('min-hamburguer')
    } else if(window.pageYOffset <= 60 && $header.classList.contains("min-header")){
        console.log('HEADER MAIOR!');
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.firstElementChild.setAttribute("src", "imgs/omnitech-logo-1.png");
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $navbar.classList.add('max-nav');
        $navbar.classList.remove('min-nav');
        $menu.firstElementChild.classList.add('max-hamburguer')
        $menu.firstElementChild.classList.remove('min-hamburguer')
    }
  }  
  $menu.addEventListener('click', toggleMenu,false);
  var isOpen = false;
  // função que verifica se o menu esta aberto ou não somente em  mobile !!! 
  function toggleMenu(){
      if(!isOpen){
        $navbar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
      } else{
        $navbar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
      }
      
  }
  $navbar.addEventListener('click', navClick, false);
  // evt de evento
  function navClick(evt){
    if (evt.target.tagName == 'A'){
        toggleMenu();
    }
      

  }

  
