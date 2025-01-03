document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar-sticky");
    const notificationDot = document.getElementById("notification-dot");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("show");
            const isExpanded = navbar.classList.contains("show");
            menuToggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        });
    }

    function updateNotificationDot() {
        const savedItemsJson = localStorage.getItem("savedItems");
        const savedItems = savedItemsJson ? JSON.parse(savedItemsJson) : [];

        if (notificationDot) {
            if (Array.isArray(savedItems) && savedItems.length > 0) {
                notificationDot.classList.remove("hidden");
            } else {
                notificationDot.classList.add("hidden");
            }
        }
    }

    // Inicializa el punto de notificación
    updateNotificationDot();

    // Agrega event listeners a todos los botones de compra
    const saveImageButtons = document.querySelectorAll("[id^='save-image-']");
    saveImageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const uniqueId = button.id.split("-")[2];

            if (uniqueId && uniqueId.trim() !== "") {
                const savedItemsJson = localStorage.getItem("savedItems") || "[]";
                const savedItems = JSON.parse(savedItemsJson);

                // Obtén la ruta de la imagen y el precio
                const dynamicImage = document.querySelector(`#dynamic-image-${uniqueId}`);
                const priceSpan = button.closest(".flex")?.querySelector("span.price"); // Manejar null

                if (dynamicImage && priceSpan) {
                    const imagePath = dynamicImage.getAttribute("src");
                    const price = priceSpan.textContent?.trim();

                    // Solo agrega si no existe
                    if (!savedItems.some((item: { imagePath: string }) => item.imagePath === imagePath)) {
                        const item = { imagePath, price };
                        savedItems.push(item);
                        localStorage.setItem("savedItems", JSON.stringify(savedItems));
                    }
                } else {
                    console.error("No se encontró la imagen o el precio.");
                }

                // Recargar la página si el punto de notificación se muestra
                location.reload();
                // Actualiza el punto de notificación inmediatamente
                updateNotificationDot();
            } else {
                console.warn("El uniqueId es inválido o está vacío. No se agregará nada.");
            }
        });
    });
});
