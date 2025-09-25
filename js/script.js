// script.js

// 1. Registrar el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

// --- ANIMACIÓN SCROLL INMERSIVA (GSAP) ---

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        // La animación dura el doble de la altura de la vista
        end: "+=200%", 
        scrub: true, // Vincula la animación al movimiento del scroll
        pin: true    // Mantiene la sección visible mientras la animación ocurre
    }
});

// 1. Escalar la letra "Bienvenidos"
tl.to(".title", {
    scale: 8,
    duration: 1,
    ease: "power2.out"
});

// 2. Mostrar contenido "Oop!" y ocultar "Bienvenidos" simultáneamente
tl.to(".inside-content", {
    opacity: 1,
    duration: 0.7, 
    ease: "power2.inOut"
}, "-=0.5"); // Comienza 0.5s antes del final de la animación anterior (efecto de solapamiento)

tl.to(".title-container", {
    opacity: 0,
    duration: 0.4
}, "<"); // Inicia al mismo tiempo que la animación anterior ("inside-content")

// 3. Animación de entrada para el texto y el reloj (efecto de aparición sutil)
tl.from(".inside-content h2", {
    y: 50,
    opacity: 0,
    duration: 0.5
}, "<0.1") // Comienza un poco después de que 'inside-content' se hace visible.
.from(".inside-content p", {
    y: 50,
    opacity: 0,
    duration: 0.5
}, "-=0.3") // El párrafo entra justo después del h2
.from(".contenedor-reloj", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)" // Usa un efecto de rebote para que el reloj sea más llamativo
}, "-=0.3"); // El reloj entra después del párrafo


// --- FUNCIONALIDAD RELOJ EN TIEMPO REAL ---

function actualizarReloj() {
    const reloj = document.getElementById("reloj");
    if (!reloj) return; // Salir si el elemento no existe

    const ahora = new Date();

    // Obtengo horas, minutos y segundos y aseguro que tengan dos dígitos (padStart(2, "0"))
    let horas = ahora.getHours().toString().padStart(2, "0");
    let minutos = ahora.getMinutes().toString().padStart(2, "0");
    let segundos = ahora.getSeconds().toString().padStart(2, "0");

    // Formato final
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

// Ejecuta la función cada 1000 milisegundos (1 segundo)
setInterval(actualizarReloj, 1000);
// Llamada inicial para que el reloj aparezca inmediatamente
actualizarReloj();