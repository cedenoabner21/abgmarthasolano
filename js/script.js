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

function buildFormMessage({ nombre, ubicacion, area, documentos, descripcion }) {
    const safeNombre = (nombre && nombre.trim()) || '[Su nombre]';
    const safeUbicacion = ubicacion || '[su ubicación]';
    const safeArea = area || '[área de la consulta]';
    const safeDocumentos = documentos || '[indique si cuenta con documentos]';
    const safeDescripcion =
        (descripcion && descripcion.trim()) || '[Breve descripción de lo que necesita resolver]';

    return [
        'Hola, Abg. Martha Solano.',
        '',
        `Mi nombre es ${safeNombre}.`,
        `Me encuentro en ${safeUbicacion}.`,
        `Mi consulta se relaciona con ${safeArea}.`,
        `Respecto de los documentos: ${safeDocumentos}.`,
        '',
        'Breve descripción:',
        safeDescripcion,
        '',
        'Quisiera saber qué información necesita revisar para orientarme sobre los siguientes pasos.',
    ].join('\n');
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

            // Cierra todos
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
   FORMULARIO DE CALIFICACIÓN
========================================================= */
function initForm() {
    const form = document.getElementById('form-calificacion');
    if (!form) return;

    // Estado de cada grupo
    const state = {
        ubicacion: '',
        area: '',
        documentos: '',
    };

    // Delegación de clics en chips
    form.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        const group = chip.dataset.group;
        if (!group) return;

        // Quita selección del grupo
        form.querySelectorAll(`.chip[data-group="${group}"]`).forEach((c) => {
            c.classList.remove('is-selected');
            c.setAttribute('aria-pressed', 'false');
        });

        // Selecciona el chip actual
        chip.classList.add('is-selected');
        chip.setAttribute('aria-pressed', 'true');
        state[group] = chip.dataset.value;
    });

    // Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;

        const message = buildFormMessage({
            nombre,
            ubicacion: state.ubicacion,
            area: state.area,
            documentos: state.documentos,
            descripcion,
        });

        window.open(buildWhatsAppURL(message), '_blank', 'noopener,noreferrer');
    });
}

/* =========================================================
   SCROLL REVEAL — Aparecer al desplazar
========================================================= */
function initScrollReveal() {
    // 1. Si el usuario prefiere reducir movimiento, no animamos
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 2. Si el navegador no soporta IntersectionObserver, no hacemos nada
    if (!('IntersectionObserver' in window)) return;

    // 3. Selectores de los elementos que van a animarse
    const selector = [
        'main section h1',
        'main section h2',
        'main section h3',
        'main section blockquote',
        'main section p',
        'main section .grid > *',
        'main section .space-y-10 > *',
        'main section .space-y-14 > *',
        'main section .faq-item',
        'main section form > div',
        'main section form > button',
        'main section form > p',
        'main section a[data-whatsapp="general"]',
        'footer .grid > *',
    ].join(',');

    // 4. Recogemos todos los candidatos y respetamos data-reveal="off"
    const candidates = Array.from(document.querySelectorAll(selector))
        .filter(el => el.dataset.reveal !== 'off' && !el.closest('[data-reveal="off"]'));

    // 5. Filtramos elementos anidados (si un padre ya es target, el hijo no lo es)
    const targetSet = new Set(candidates);
    const finalTargets = candidates.filter(el => {
        let parent = el.parentElement;
        while (parent) {
            if (targetSet.has(parent)) return false;
            parent = parent.parentElement;
        }
        return true;
    });

    // 6. Añadimos la clase .reveal a cada elemento
    finalTargets.forEach(el => el.classList.add('reveal'));

    // 7. Aplicamos stagger (retraso escalonado) a hermanos que comparten padre
    const parentMap = new Map();
    finalTargets.forEach(el => {
        const parent = el.parentElement;
        if (!parentMap.has(parent)) parentMap.set(parent, []);
        parentMap.get(parent).push(el);
    });
    parentMap.forEach(children => {
        if (children.length < 2) return;
        children.forEach((child, i) => {
            child.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
        });
    });

    // 8. Observamos con IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
    });

    finalTargets.forEach(el => observer.observe(el));
}

/* =========================================================
   INICIALIZACIÓN
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFAQ();
    initForm();
    initScrollReveal();

    // Marca todos los enlaces a WhatsApp con mensaje general por defecto
    document.querySelectorAll('a[data-whatsapp="general"]').forEach((link) => {
        link.href = buildWhatsAppURL(GENERAL_MESSAGE);
    });
});
