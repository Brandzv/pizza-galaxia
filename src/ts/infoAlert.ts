const alertElement = document.getElementById("info-alert");
const closeButton = document.getElementById("close-alert");

if (closeButton && alertElement) {
    closeButton.addEventListener("click", () => {
        alertElement.classList.add("hidden");
    });
}
