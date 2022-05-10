window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection (home)
}


function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = home.offsetTop

  // altura da seção
  const sectionHeight = home.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informações dos dados e lógica 
  console.log (sectionTopReachOrPassedTargetLine)

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && 
  !sectionEndPassedTargetline
  
  




}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
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

