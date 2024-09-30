export async function headerTab() {
  const tabButtons = document.querySelectorAll(".tab_btn");
  const tabContents = document.querySelectorAll(".header__input-tab-cntnt");

  if (!tabButtons.length || !tabContents.length) {
    return;
  }

  const switchTab = (event) => {
    const targetId = event.target.id;
    const targetIndex = Array.from(tabButtons).indexOf(event.target);

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    tabButtons[targetIndex].classList.add("active");
    tabContents[targetIndex].classList.add("active");
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", switchTab);
  });

  tabButtons[0].classList.add("active");
  tabContents[0].classList.add("active");
}
