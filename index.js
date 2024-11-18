const menu = document.querySelector(".menu")

const nav = document.querySelector(".menu_desplegable")

const iconWasa = document.querySelector(".fixed-span")

menu.addEventListener("click", (event) => {
event.preventDefault()

if (window.innerWidth <= 893) {
if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "block";
    menu.style.backgroundImage = 'url("./img/x.png")';
    iconWasa.style.opacity = "0.5";
  } else {
    nav.style.display = "none";
    menu.style.backgroundImage = 'url("./img/menu.svg")';
    iconWasa.style.opacity = "100%";
  }
}
});

nav.addEventListener ("click", () =>{
  if (window.innerWidth <= 893) {
  nav.style.display = "none";
  menu.style.backgroundImage = 'url("./img/menu.svg")';
  iconWasa.style.opacity = "100%";
  }
})



document.querySelectorAll('.tooltip').forEach(span => {
    span.addEventListener('mouseover', function(event) {
      const tooltip = document.getElementById('tooltip');
      const title = span.getAttribute('data-title');
      const message = span.getAttribute('data-message');
      tooltip.innerHTML = `<span class="title">${title}</span>${message}`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.pageX + 10}px`; 
      tooltip.style.top = `${event.pageY + 5}px`; 
    });
  
    span.addEventListener('mouseout', function() {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.display = 'none';
    });
  });
  
  document.addEventListener('mousemove', function(event) {
    const tooltip = document.getElementById('tooltip');
    if (tooltip.style.display === 'block') {
      tooltip.style.left = `${event.pageX + 5}px`; 
      tooltip.style.top = `${event.pageY + 5}px`; 
    }
  });


  // Crear el elemento del ícono
const icon = document.createElement("img");
icon.src = chrome.runtime.getURL("icon.png");
icon.id = "floating-icon";
icon.title = "Volver a la Página de Inicio";
icon.style.cursor = "pointer";

// Al hacer clic en el ícono, redirige a tu página de inicio de GitHub Pages
icon.addEventListener("click", () => {
  window.location.href = "https://tuusuario.github.io";
});

// Agregar el ícono al body
document.body.appendChild(icon);

  
  