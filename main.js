function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
} else {
    navigation.classList.remove('scroll')
}
}

function openMenu() {
  document.body.classList.add('menu-expended')
}

function closeMenu() {
  document.body.classList.remove('menu-expended')
}


ScrollReveal({
  origin: 'top', 
  distance: '30px',
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about img`);