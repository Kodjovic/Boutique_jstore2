console.log("Kodjo tu as bien commencé");
const iconToggleMobileNav = document.getElementById("toggleMobileNav");
const iconToggleCart = document.getElementById("openCart");

const closeMobileNavs = [].slice.call(
  document.getElementsByClassName("mobile-close")
);

const toggleNav = (event) => {
  const element = event.target;
  const classeName = element.dataset.mobile;
  // console.log(element);
  const mobileNav = document.getElementsByClassName(classeName)[0];

  if (!mobileNav.classList.contains("none")) {
    // Ce ajout a pour but de démarer l'animation crée
    // add none
    mobileNav.classList.toggle("close");
    window.setTimeout(() => {
      mobileNav.classList.toggle("none");
      // apres fermeture close n'a plus raison d'etre
      // donc on l'enlève
      mobileNav.classList.toggle("close");
      document.body.style.overflow = "";
    }, 2000);
  } else {
    // remove none
    mobileNav.classList.toggle("none");
    document.body.style.overflow = "hidden";
  }
};

iconToggleMobileNav.addEventListener("click", toggleNav);
iconToggleCart.addEventListener("click", toggleNav);

closeMobileNavs.forEach((item) => {
  item.addEventListener("click", toggleNav);
});
