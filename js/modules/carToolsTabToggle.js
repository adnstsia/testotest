export async function carToolsTabToggle() {
  // Получаем все кнопки табов и элементы табов
  const tabButtons = document.querySelectorAll(".CT_btn-tab");
  const tabItems = document.querySelectorAll(".CT_tab-item");

  // Функция для переключения табов
  function switchTab(event) {
    // Удаляем класс active у всех кнопок табов и скрываем все табы
    tabButtons.forEach((button) => button.classList.remove("active"));
    tabItems.forEach((item) => item.classList.remove("current-tab"));

    // Добавляем класс active к нажатой кнопке таба
    event.currentTarget.classList.add("active");

    // Получаем значение data-tab нажатой кнопки
    const tabId = event.currentTarget.getAttribute("data-tab");

    // Показываем соответствующий таб
    document
      .querySelector(`.CT_tab-item[data-tab="${tabId}"]`)
      .classList.add("current-tab");
  }

  // Добавляем обработчики событий для всех кнопок табов
  tabButtons.forEach((button) => {
    button.addEventListener("click", switchTab);
  });

  // Инициализируем первый таб как активный
  tabButtons[0].classList.add("active");
  tabItems[0].classList.add("current-tab");
}

// Вызов функции для инициализации
carToolsTabToggle();
