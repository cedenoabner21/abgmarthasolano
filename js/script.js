/* =========================================================
   CONFIGURACIÓN
========================================================= */
const WHATSAPP_NUMBER = '593990485395';

const GENERAL_MESSAGE =
    'Hola, Abg. Martha Solano. Mi nombre es __________. Quisiera contarle brevemente mi situación para saber qué información o documentos necesita revisar. Mi asunto está relacionado con __________ y me encuentro en __________.';

/* =========================================================
   UTILIDADES
========================================================= */
function buildWhatsAppURL(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =========================================================
   MENÚ MÓVIL
========================================================= */
function initMobileMenu() {
    const trigger = document.getElementById('mobile-menu-trigger');
    const menu = document.getElementById('mobile-menu');
    if (!trigger || !menu) return;

    function closeMenu() {
        menu.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        const isOpen = menu.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('is-open')) return;
        if (menu.contains(e.target) || trigger.contains(e.target)) return;
        closeMenu();
    });
}

/* =========================================================
   ACORDEÓN FAQ
========================================================= */
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach((item) => {
        const button = item.querySelector('.faq-button');
        if (!button) return;

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Cierra todos los demás
            items.forEach((other) => {
                other.classList.remove('is-open');
                const btn = other.querySelector('.faq-button');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Abre el actual si estaba cerrado
            if (!isOpen) {
                item.classList.add('is-open');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* =========================================================
   FORMULARIO DE CALIFICACIÓN (Nuevo diseño)
========================================================= */
function initForm() {
    const form = document.getElementById('form-calificacion');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capturamos los valores del nuevo formulario
        const nombre = document.getElementById('nombre').value.trim();
        const ubicacion = document.getElementById('ubicacion').value.trim();
        const area = document.getElementById('area').value;
        const descripcion = document.getElementById('descripcion').value.trim();

        // Validación súper básica
        if (!nombre) {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        // Construimos el mensaje con formato limpio
        const message = [
            'Hola, Abg. Martha Solano.',
            '',
            `Mi nombre es ${nombre}.`,
            `Me encuentro en ${ubicacion}.`,
            `Mi consulta se relaciona con: ${area}.`,
            '',
            'Breve descripción:',
            descripcion || '(Sin descripción adicional)',
            '',
            'Quisiera saber qué información necesita revisar para orientarme.'
        ].join('\n');

        window.open(buildWhatsAppURL(message), '_blank', 'noopener,noreferrer');
    });
}

/* =========================================================
   SCROLL REVEAL — Aparecer al desplazar
========================================================= */
function initScrollReveal() {
    // (Sin bloqueo de prefers-reduced-motion para garantizar que se vea)
    if (!('IntersectionObserver' in window)) return;

    // En el nuevo HTML ya pusimos la clase .reveal directamente a los contenedores, 
    // así que solo necesitamos el observer.
    const targets = document.querySelectorAll('.reveal');

    if (targets.length === 0) return;

    // Stagger (retraso) para elementos hermanos
    const parentMap = new Map();
    targets.forEach(el => {
        const parent = el.parentElement;
        if (!parentMap.has(parent)) parentMap.set(parent, []);
        parentMap.get(parent).push(el);
    });
    parentMap.forEach(children => {
        if (children.length < 2) return;
        children.forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * 100, 500)}ms`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(el => observer.observe(el));
}

/* =========================================================
   SMOOTH SCROLL — Desplazamiento suave
========================================================= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const startPosition = window.pageYOffset;
            
            // Ajuste: Restamos 60px (antes eran 20px) para que el título quede bien abajo del header
            const targetPosition = targetElement.getBoundingClientRect().top + startPosition - headerHeight - 60;
            
            const distance = targetPosition - startPosition;
            const duration = 800;
            let startTime = null;

            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                
                window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);

            // Cierra el menú móvil
            const mobileMenu = document.getElementById('mobile-menu');
            const trigger = document.getElementById('mobile-menu-trigger');
            if (mobileMenu && mobileMenu.classList.contains('is-open')) {
                mobileMenu.classList.remove('is-open');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFAQ();
    initForm();
    initScrollReveal();
    initSmoothScroll();

    // Actualiza los links estáticos de WhatsApp
    document.querySelectorAll('a[data-whatsapp="general"]').forEach((link) => {
        link.href = buildWhatsAppURL(GENERAL_MESSAGE);
    });
});
