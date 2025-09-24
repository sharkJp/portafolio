 window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleWindowResize);

        const spansSlow = document.querySelectorAll('.spanSlow');
        const spansFast = document.querySelectorAll('.spanFast');

        let width = window.innerWidth;

        function handleMouseMove(e) {
            // Normalizamos la posición del mouse del rango [0, width] a [-1, 1]
            // Para que 0 sea el centro y -1 / 1 los extremos
            let normalizedPosition = (e.pageX / (width / 2)) - 1; 

            // Calculamos la velocidad de desplazamiento
            // Multiplicamos por un valor para controlar la intensidad del efecto
            let speedSlow = 100 * normalizedPosition; 
            let speedFast = 200 * normalizedPosition;

            spansSlow.forEach((span) => {
                span.style.transform = `translate(${speedSlow}px)`;
            });
            spansFast.forEach((span) => {
                span.style.transform = `translate(${speedFast}px)`;
            })
        }

        // Recalculamos el ancho cuando la ventana se redimensiona
        function handleWindowResize() {
            width = window.innerWidth;
        }
function actualizarReloj() {
    // 1. Obtener la hora actual del PC
    const fecha = new Date();
    
    // 2. Extraer horas, minutos y segundos
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // 3. Formato de dos dígitos (ej: 09 en lugar de 9)
    // El método .padStart(2, '0') se encarga de esto: si es un dígito, le pone un '0' delante.
    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    // 4. Construir la cadena de la hora
    const horaActual = `${horas}:${minutos}:${segundos}`;

    // 5. Mostrar la hora en el elemento HTML
    document.getElementById('reloj').textContent = horaActual;
}

// 6. Ejecutar la función inmediatamente para que se muestre al cargar
actualizarReloj();

// 7. Ejecutar la función cada 1000 milisegundos (1 segundo) para que se actualice
setInterval(actualizarReloj, 1000);