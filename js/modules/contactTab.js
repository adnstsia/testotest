export async function contactTab() {
  const buttons = document.querySelectorAll(".payment-tab_btn");
  const contentItems = document.querySelectorAll(".payment-tab_content-item");

  function setActiveTab(index) {
    buttons.forEach((button, btnIndex) => {
      if (btnIndex === index) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    contentItems.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  setActiveTab(0);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      setActiveTab(index);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  contactTab();
});
