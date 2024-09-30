export async function showHiddenContentNews() {
  const descriptions = document.querySelectorAll(".LN_DUC-descr");

  descriptions.forEach((descr) => {
    const showMoreBtn = descr.nextElementSibling;

    showMoreBtn.addEventListener("click", () => {
      const isExpanded = showMoreBtn.textContent === "Скрыть";

      if (isExpanded) {
        descr.style.maxHeight = "100px";
        showMoreBtn.textContent = "Подробнее...";
      } else {
        descr.style.maxHeight = descr.scrollHeight + "px";
        showMoreBtn.textContent = "Скрыть";
      }
    });
  });
}
