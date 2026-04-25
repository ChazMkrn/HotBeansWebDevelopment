document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === document.body.dataset.page) {
    link.classList.add("active");
  }
});

const modal = document.getElementById("application-modal");
const openButton = document.querySelector("[data-open-modal]");

if (modal && openButton) {
  const form = modal.querySelector(".application-form");
  const message = modal.querySelector("[data-form-message]");

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  openButton.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });

  modal.querySelector("[data-close-modal]")?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = new FormData(form).get("firstName");
    message.textContent = `Thank you. Your application has been submitted. We will get back to you shortly about the outcome of your application - Alex Ononye`;
    form.reset();
  });
}
