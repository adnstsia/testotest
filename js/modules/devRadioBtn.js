export async function devRadioBtn() {
  const inputs = [
    document.getElementById("with-dev_input"),
    document.getElementById("without-dev_input"),
  ];

  inputs[0].checked = true;

  function toggleCheckbox(event) {
    inputs.forEach((input) => (input.checked = input === event.target));
  }

  inputs.forEach((input) => input.addEventListener("change", toggleCheckbox));
}
