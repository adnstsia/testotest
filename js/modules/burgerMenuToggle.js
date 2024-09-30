export async function burgerMenuToggle() {
  const header = document.querySelector(".header");
  const burgerButton = document.querySelector(".burger-menu__button");
  const overlay = document.querySelector(".brg-menu_overlay");

  if (!header || !burgerButton || !overlay) {
    return;
  }

  burgerButton.addEventListener("click", () => {
    header.classList.toggle("open-brg");
  });

  overlay.addEventListener("click", () => {
    header.classList.remove("open-brg");
  });
}
