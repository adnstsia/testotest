export async function toggleHiddenParts() {
  document.querySelectorAll(".PQ_show-hidden_btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const hiddenPart = button.nextElementSibling;
      const svgShow = button.querySelector(".PQ_svg_show");
      const svgClose = button.querySelector(".PQ_svg_close");

      if (hiddenPart.style.display === "block") {
        await collapse(hiddenPart);
        svgShow.style.display = "block";
        svgClose.style.display = "none";
      } else {
        await expand(hiddenPart);
        svgShow.style.display = "none";
        svgClose.style.display = "block";
      }
    });
  });
}

function expand(element) {
  return new Promise((resolve) => {
    element.style.display = "block";
    const height = element.scrollHeight + "px";
    element.style.height = "0px";
    element.style.transition = "height 0.5s ease";
    requestAnimationFrame(() => {
      element.style.height = height;
    });
    setTimeout(() => {
      element.style.height = "auto";
      element.style.transition = "";
      resolve();
    }, 500);
  });
}

function collapse(element) {
  return new Promise((resolve) => {
    const height = element.scrollHeight + "px";
    element.style.height = height;
    requestAnimationFrame(() => {
      element.style.height = "0px";
      element.style.transition = "height 0.5s ease";
    });
    setTimeout(() => {
      element.style.display = "none";
      element.style.transition = "";
      resolve();
    }, 500);
  });
}

toggleHiddenParts();
