import { burgerMenuToggle } from "./modules/burgerMenuToggle.js";
import { headerTab } from "./modules/headerTab.js";
import { showHiddenContentNews } from "./modules/showHiddenContentNews.js";
import { devRadioBtn } from "./modules/devRadioBtn.js";
import { toggleHiddenParts } from "./modules/toggleHiddenParts.js";
import { contactTab } from "./modules/contactTab.js";
import { carToolsTabToggle } from "./modules/carToolsTabToggle.js";

document.addEventListener("DOMContentLoaded", async () => {
  await burgerMenuToggle();

  await headerTab();

  await showHiddenContentNews();

  await devRadioBtn();

  await toggleHiddenParts();

  await contactTab();

  await carToolsTabToggle();
});
