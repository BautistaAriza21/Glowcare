document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-option");
    const images = document.querySelectorAll(".option-image");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedOption = button.getAttribute("data-option");
  
        // Ocultar todas las imágenes
        images.forEach((image) => {
          image.classList.add("hidden"); // Asegurarse de ocultarlas
        });
  
        // Mostrar la imagen correspondiente
        const selectedImage = document.querySelector(
          `.option-image[data-option="${selectedOption}"]`
        );
        if (selectedImage) {
          selectedImage.classList.remove("hidden"); // Mostrar la imagen
        }
      });
    });
  });
  