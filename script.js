document.addEventListener("DOMContentLoaded", () => {
  const optionContainers = document.querySelectorAll(".options");

  optionContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const radioId = container.getAttribute("data-for");
      const radioButton = document.getElementById(radioId);
      if (radioButton) {
        radioButton.checked = true;
      }
    });
  });
});
