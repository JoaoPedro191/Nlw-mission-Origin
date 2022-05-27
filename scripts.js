window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavonScroll();
  showBackToTopButtonOnScroll();

  activeMenuCurrentSection(home);
  activeMenuCurrentSection(services);
  activeMenuCurrentSection(about);
  activeMenuCurrentSection(contact);
}

function activeMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavonScroll() {
  if (scrollY > 0) {
    document.querySelector("#navigation").classList.add("scroll");
  } else if (scrollY <= 0) {
    document.querySelector("#navigation").classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    document.querySelector("#backToTopButton").classList.add("show");
  } else if (scrollY <= 0) {
    document.querySelector("#backToTopButton").classList.remove("show");
  }
}

function OpenMenu() {
  document.querySelector("body").classList.add("menu-expanded");
}

function CloseMenu() {
  document.querySelector("body").classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  `#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`
);
