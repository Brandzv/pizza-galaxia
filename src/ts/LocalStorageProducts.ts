interface SavedItem {
    imagePath: string;
    price: string;
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-id]");

    cards.forEach((card) => {
        const uniqueId = card.getAttribute("data-id");
        const saveImageButton = document.querySelector<HTMLButtonElement>(`#save-image-${uniqueId}`);
        const dynamicImage = document.querySelector<HTMLImageElement>(`#dynamic-image-${uniqueId}`);

        // Busca el <select> y el <span>
        const priceSelect = card.querySelector("select");
        const priceSpan = card.querySelector("span.price"); // Selecciona el span que contenga la clase price

        if (saveImageButton && dynamicImage) {
            saveImageButton.addEventListener("click", () => {
                const imagePath = dynamicImage.getAttribute("src");

                // Verifica si hay un <select> o <span> y obtiene el valor
                let price: string | undefined;
                if (priceSelect) {
                    price = priceSelect.value; // Obtiene el valor del <select>
                    console.log("Precio obtenido del select:", price);
                } else if (priceSpan) {
                    price = priceSpan.textContent?.trim(); // Obtiene el contenido del <span>
                    console.log("Precio obtenido del span:", price);
                } else {
                    console.error("No se encontró el select ni el span para obtener el precio.");
                }

                if (imagePath && price) {
                    let savedItems: SavedItem[] = JSON.parse(localStorage.getItem("savedItems") || "[]");

                    const item: SavedItem = {
                        imagePath,
                        price,
                    };

                    if (!savedItems.find((i: SavedItem) => i.imagePath === imagePath)) {
                        savedItems.push(item);
                    }

                    localStorage.setItem("savedItems", JSON.stringify(savedItems));
                } else {
                    console.error("No se pudo obtener la ruta de la imagen o el precio.");
                }
            });
        } else {
            console.error("No se pudo encontrar la imagen, el botón o el precio correspondiente.");
        }
    });
});