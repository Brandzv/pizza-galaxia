interface SavedItem {
    imagePath: string;
    price: string;
}

function clearSavedImages() {
    localStorage.removeItem("savedItems");
    location.reload(); // Recargar la página para reflejar los cambios
}

function deleteSavedItem(index: number) {
    const savedItems: SavedItem[] = JSON.parse(localStorage.getItem("savedItems") || "[]");
    savedItems.splice(index, 1); // Elimina el elemento en el índice proporcionado
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    location.reload(); // Recargar la página para reflejar los cambios
}

document.addEventListener("DOMContentLoaded", () => {
    const savedImagesContainer = document.getElementById("saved-images") as HTMLElement | null;

    if (!savedImagesContainer) {
        console.error("No se encontró el contenedor de imágenes guardadas.");
        return;
    }

    // Obtiene los elementos guardados en localStorage
    const savedItems: SavedItem[] = JSON.parse(localStorage.getItem("savedItems") || "[]");

    if (savedItems.length > 0) {
        savedItems.forEach(({ imagePath, price }: SavedItem, index: number) => {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("bg-[#1F2937]", "rounded-lg", "shadow-lg", "overflow-hidden", "flex", "flex-col", "items-center", "justify-between", "p-4");

            const imgElement = document.createElement("img");
            imgElement.src = imagePath;
            imgElement.alt = "Imagen del producto seleccionado";
            imgElement.classList.add("w-[216px]", "h-52", "object-cover", "rounded-t-lg");

            const infoContainer = document.createElement("div");
            infoContainer.classList.add("flex", "flex-col", "md:flex-row", "items-center", "justify-between", "mt-4", "w-full");

            const priceElement = document.createElement("span");
            priceElement.textContent = price;
            priceElement.classList.add("text-lg", "font-semibold", "mb-2", "md:mb-0"); // Margen inferior para pantallas pequeñas

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.classList.add("px-4", "py-2", "bg-red-500", "text-white", "rounded", "md:ml-4"); // Margen izquierdo para pantallas medianas y mayores
            deleteButton.addEventListener("click", () => deleteSavedItem(index));

            infoContainer.appendChild(priceElement);
            infoContainer.appendChild(deleteButton);

            cardContainer.appendChild(imgElement);
            cardContainer.appendChild(infoContainer); // Añadir infoContainer en lugar de priceElement y deleteButton directamente
            savedImagesContainer.appendChild(cardContainer);
        });
    } else {
        const noImagesMessage = document.createElement("p");
        noImagesMessage.textContent = "No hay productos seleccionados.";
        noImagesMessage.classList.add("text-white", "italic");
        savedImagesContainer.appendChild(noImagesMessage);
    }

    // Añade el evento al botón
    const clearButton = document.getElementById("clear-storage");
    if (clearButton) {
        clearButton.addEventListener("click", clearSavedImages);
    }
});
