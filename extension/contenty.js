// Crear el primer ícono flotante (casa)
const icone1 = document.createElement("img");
icone1.src = chrome.runtime.getURL("casa.png"); // Asegúrate de que esta ruta sea correcta
icone1.id = "floating-icon1";
icone1.title = "Volver a la Página de Inicio";
icone1.style.cursor = "pointer";
icone1.style.width = "70px"; // Ajusta el tamaño a 50x50 píxeles
icone1.style.height = "70px"; // Ajusta el tamaño a 50x50 píxeles

// Al hacer clic en el ícono, redirige a tu página de inicio de GitHub Pages
icone1.addEventListener("click", () => {
  window.location.href = "https://ivanaristi.github.io/aplicaciones-sur/";
});

// Agregar el primer ícono al body
document.body.appendChild(icone1);

// Crear el segundo ícono flotante (nuevo botón)
const icone2 = document.createElement("img");
icone2.src = chrome.runtime.getURL("icon.png"); // Asegúrate de que esta ruta sea correcta
icone2.id = "floating-icon2";
icone2.title = "Abrir otra página";
icone2.style.cursor = "pointer";
icone2.style.width = "70px"; // Ajusta el tamaño a 50x50 píxeles
icone2.style.height = "70px"; // Ajusta el tamaño a 50x50 píxeles

// Al hacer clic en el ícono, abre una nueva URL
icone2.addEventListener("click", () => {
    window.open("https://ivanaristi.github.io/aplicaciones-sur/", "_blank");  // URL de la otra página
});

// Agregar el segundo ícono al body
document.body.appendChild(icone2);

  
    
    