// Base de datos de contenido para el Hero Slider
const slides = [
    {
        badge: "Derecho Familiar",
        titulo: "Protección Institucional para tu Familia",
        descripcion: "Asesoría jurídica integral en divorcios, pensiones alimenticias, custodias y acuerdos patrimoniales diseñados para brindar tranquilidad a tu hogar.",
        imagen: "foto1.jpg"
    },
    {
        badge: "Derecho Patrimonial",
        titulo: "Estrategia Legal para Proteger tu Patrimonio",
        descripcion: "Organización de bienes, redacción de contratos y blindaje sucesorio para garantizar que tus logros estén protegidos por la ley.",
        imagen: "foto2.jpg"
    },
    {
        badge: "Soluciones Civiles",
        titulo: "Confianza y Mediación en Cada Caso",
        descripcion: "Acompañamiento personalizado en cada trámite legal con un enfoque en la resolución clara, ética y eficiente de controversias.",
        imagen: "foto3.jpg"
    }
];

let indiceSlideActual = 0;
const tiempoTransicion = 5000; // 5 segundos por diapositiva
let intervaloTimer;

// Referencias a elementos del DOM
const elBadge = document.getElementById("slide-badge");
const elTitulo = document.getElementById("slide-titulo");
const elDescripcion = document.getElementById("slide-descripcion");
const elImagen = document.getElementById("slide-imagen");
const puntosControles = document.querySelectorAll(".punto");

function actualizarSlide(indice) {
    const slide = slides[indice];

    // Transición suave al cambiar datos
    elBadge.style.opacity = 0;
    elTitulo.style.opacity = 0;
    elDescripcion.style.opacity = 0;
    elImagen.style.opacity = 0;

    setTimeout(() => {
        elBadge.textContent = slide.badge;
        elTitulo.textContent = slide.titulo;
        elDescripcion.textContent = slide.descripcion;
        elImagen.src = slide.imagen;

        elBadge.style.opacity = 1;
        elTitulo.style.opacity = 1;
        elDescripcion.style.opacity = 1;
        elImagen.style.opacity = 1;
    }, 250);

    // Actualizar indicador activo
    puntosControles.forEach((punto, i) => {
        punto.classList.toggle("activo", i === indice);
    });
}

function siguienteSlide() {
    indiceSlideActual = (indiceSlideActual + 1) % slides.length;
    actualizarSlide(indiceSlideActual);
}

function cambiarSlideManual(indice) {
    indiceSlideActual = indice;
    actualizarSlide(indiceSlideActual);
    reiniciarTimer();
}

function reiniciarTimer() {
    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(siguienteSlide, tiempoTransicion);
}

function anteriorSlide() {
    indiceSlideActual = (indiceSlideActual - 1 + slides.length) % slides.length;
    actualizarSlide(indiceSlideActual);
    reiniciarTimer();
}

function siguienteSlideManual() {
    siguienteSlide();
    reiniciarTimer();
}

// Iniciar carrusel automático al cargar la página
reiniciarTimer();
