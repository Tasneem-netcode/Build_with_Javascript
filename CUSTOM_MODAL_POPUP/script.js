let openBtn = document.getElementById("openModalBtn");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("closeModalBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = ""; // show modal
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // hide modal
});

// Close modal if user clicks outside modal-content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
