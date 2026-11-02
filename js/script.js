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

            items.forEach((other) => {
                other.classList.remove('is-open');
                const btn = other.querySelector('.faq-button');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

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

    const state = {
        ubicacion: '',
        area: '',
        documentos: '',
    };

    form.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;

        const group = chip.dataset.group;
        if (!group) return;

        form.querySelectorAll(`.chip[data-group="${group}"]`).forEach((c) => {
            c.classList.remove('is-selected');
            c.setAttribute('aria-pressed', 'false');
        });

        chip.classList.add('is-selected');
        chip.setAttribute('aria-pressed', 'true');
        state[group] = chip.dataset.value;
    });

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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const selectors = [
        'main section h1',
        'main section h2',
        'main section h3',
        'main section p',
        'main section blockquote',
        'main section img',
        'main section .grid > *',
        'main section .space-y-10 > *',
        'main section .space-y-14 > *',
        'main section .faq-item',
        'main section form > div',
        'main section form > button',
        'main section form > p',
        'main section a[data-whatsapp="general"]',
        'footer .grid > *',
    ];

    const elements = new Set();
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => elements.add(el));
    });

    const allElements = Array.from(elements);
    const targetSet = new Set(allElements);
    const finalTargets = allElements.filter(el => {
        let parent = el.parentElement;
        while (parent) {
            if (targetSet.has(parent)) return false;
            parent = parent.parentElement;
        }
        return true;
    });

    finalTargets.forEach(el => el.classList.add('reveal'));

    const parentMap = new Map();
    finalTargets.forEach(el => {
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
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
    });

    finalTargets.forEach(el => observer.observe(el));
}

/* =========================================================
   SMOOTH SCROLL — Sin Lenis, usa scroll nativo
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

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

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

    document.querySelectorAll('a[data-whatsapp="general"]').forEach((link) => {
        link.href = buildWhatsAppURL(GENERAL_MESSAGE);
    });
});
