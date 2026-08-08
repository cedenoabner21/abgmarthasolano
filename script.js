// Objeto con la información recolectada del cliente
let perfilCliente = {
    necesidadLegal: ""
};

// Captura de elementos del DOM
const cajaPrincipal = document.getElementById("pantalla-principal");
const cajaEncuesta = document.getElementById("pantalla-encuesta");
const botonInicio = document.getElementById("boton-iniciar");
const botonRegresar = document.getElementById("boton-regresar");

// Evento: Iniciar encuesta con animación fluida
botonInicio.addEventListener("click", () => {
    cajaPrincipal.classList.add("caja-oculta");

    setTimeout(() => {
        cajaPrincipal.style.display = "none";
        cajaEncuesta.style.display = "block";
        
        // Forzar reflujo para que la animación de entrada se ejecute limpia
        void cajaEncuesta.offsetWidth; 
        
        cajaEncuesta.classList.remove("caja-oculta");
    }, 400);
});

// Evento: Regresar al menú principal
botonRegresar.addEventListener("click", () => {
    cajaEncuesta.classList.add("caja-oculta");

    setTimeout(() => {
        cajaEncuesta.style.display = "none";
        cajaPrincipal.style.display = "block";
        
        void cajaPrincipal.offsetWidth;
        
        cajaPrincipal.classList.remove("caja-oculta");
    }, 400);
});

// Registrar respuesta seleccionada por el cliente
function registrarRespuesta(eleccion) {
    perfilCliente.necesidadLegal = eleccion;
    
    // Aquí puedes redirigirla a WhatsApp o a un formulario de contacto directo
    alert(`Área seleccionada: ${perfilCliente.necesidadLegal}\n\nPronto te redirigiremos con un especialista.`);
}
