(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[m-data-modal-open]"),
    closeModalBtn: document.querySelector("[m-data-modal-close]"),
    modal: document.querySelector("[m-data-modal]"),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  //* Закривання по кліку на бекдроп

  refs.modal.addEventListener("click", removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add("m-is-hidden");
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle("m-is-hidden");
    document.body.classList.toggle("m-no-scroll");
  }
})();
