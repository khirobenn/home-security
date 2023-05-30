let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let icon = document.querySelector('.ri-menu-line');

menu.onclick = () => {
  navbar.classList.toggle('show');
  if(icon.classList.contains('ri-menu-line'))
  {
    icon.classList.replace("ri-menu-line","ri-close-line");
  }
  else
  {
    icon.classList.replace("ri-close-line","ri-menu-line");
  }
}