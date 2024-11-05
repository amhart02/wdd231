const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector("#modal");


function openModal () {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", false)
}

function closeModal () {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", true)
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
})