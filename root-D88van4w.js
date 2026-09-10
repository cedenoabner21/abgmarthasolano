import { A as e, C as t, M as n, O as r, P as i, a, c as o, d as s, f as c, i as l, j as u, k as d, o as f, t as p } from "./jsx-runtime-CVGhhJ9n.js";
import { a as m, i as h, r as g, t as _ } from "./whatsapp-X8xGeG-u.js";

var v = i(n(), 1);
var y = p();

// Navegación
var b = [
    { label: `Servicios`, href: `#servicios` },
    { label: `Cómo trabajo`, href: `#metodo` },
    { label: `Sobre mí`, href: `#sobre-mi` },
    { label: `Preguntas frecuentes`, href: `#preguntas` },
];

// Componente Header
function x() {
    return (0, y.jsx)(`header`, {
        className: `sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-ink/5`,
        children: (0, y.jsxs)(`div`, {
            className: `mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8`,
            children: [
                // Logo
                (0, y.jsx)(`a`, {
                    href: `#`,
                    className: `flex items-center gap-3 shrink-0`,
                    "aria-label": `Abg. Martha Solano, inicio`,
                    children: (0, y.jsx)(`img`, {
                        src: `https://assets.ls-assets.com/uploads/262ba0d6-6efa-4b1d-bd44-e3e460d371ef/b0643dd8-50e7-4aac-a81b-68e3a475abc4.png?w=240`,
                        alt: `Logotipo de Abg. Martha Solano, Abogada Familiar y Patrimonial`,
                        className: `h-10 w-auto sm:h-12`,
                    }),
                }),

                // Navegación desktop
                (0, y.jsx)(`nav`, {
                    className: `hidden lg:flex items-center gap-8`,
                    children: b.map((e) =>
                        (0, y.jsx)(
                            `a`,
                            {
                                href: e.href,
                                className: `text-sm font-medium text-ink/70 transition-colors hover:text-plum`,
                                children: e.label,
                            },
                            e.href
                        )
                    ),
                }),

                // Botón WhatsApp
                (0, y.jsxs)(`a`, {
                    href: g(_),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30 sm:px-5 sm:text-base`,
                    children: [
                        (0, y.jsx)(m, {
                            className: `h-4 w-4`,
                            "aria-hidden": `true`,
                        }),
                        (0, y.jsx)(`span`, {
                            children: `Cuénteme su caso por WhatsApp`,
                        }),
                    ],
                }),
            ],
        }),
    });
}

// Componente Footer
function S() {
    return (0, y.jsx)(`footer`, {
        className: `border-t border-ink/5 bg-card`,
        children: (0, y.jsxs)(`div`, {
            className: `mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8`,
            children: [
                // Grid footer
                (0, y.jsxs)(`div`, {
                    className: `grid gap-10 lg:grid-cols-3`,
                    children: [
                        // Columna 1: Logo
                        (0, y.jsxs)(`div`, {
                            children: [
                                (0, y.jsx)(`img`, {
                                    src: `https://assets.ls-assets.com/uploads/262ba0d6-6efa-4b1d-bd44-e3e460d371ef/b0643dd8-50e7-4aac-a81b-68e3a475abc4.png?w=240`,
                                    alt: `Logotipo de Abg. Martha Solano`,
                                    className: `h-12 w-auto`,
                                }),
                                (0, y.jsx)(`p`, {
                                    className: `mt-4 text-sm font-medium text-ink/80`,
                                    children: `Abogada Familiar & Patrimonial`,
                                }),
                                (0, y.jsx)(`p`, {
                                    className: `mt-1 font-display text-base italic text-plum`,
                                    children: `Confianza para decidir. Estrategia para proteger.`,
                                }),
                            ],
                        }),

                        // Columna 2: Contacto
                        (0, y.jsxs)(`div`, {
                            children: [
                                (0, y.jsx)(`h3`, {
                                    className: `text-xs font-semibold uppercase tracking-widest text-ink/50`,
                                    children: `Contacto`,
                                }),
                                (0, y.jsxs)(`ul`, {
                                    className: `mt-4 space-y-3 text-sm text-ink/75`,
                                    children: [
                                        // WhatsApp
                                        (0, y.jsx)(`li`, {
                                            children: (0, y.jsxs)(`a`, {
                                                href: g(_),
                                                target: `_blank`,
                                                rel: `noopener noreferrer`,
                                                className: `inline-flex items-center gap-2 transition-colors hover:text-[#128C7E]`,
                                                children: [
                                                    (0, y.jsx)(m, {
                                                        className: `h-4 w-4 text-[#25D366]`,
                                                        "aria-hidden": `true`,
                                                    }),
                                                    `WhatsApp: +593 99 048 5395`,
                                                ],
                                            }),
                                        }),
                                        // Instagram
                                        (0, y.jsx)(`li`, {
                                            children: (0, y.jsxs)(`a`, {
                                                href: `https://instagram.com/abg.marthasolano`,
                                                target: `_blank`,
                                                rel: `noopener noreferrer`,
                                                className: `inline-flex items-center gap-2 transition-colors hover:text-plum`,
                                                children: [
                                                    (0, y.jsx)(h, {
                                                        className: `h-4 w-4 text-plum`,
                                                        "aria-hidden": `true`,
                                                    }),
                                                    `Instagram: @abg.marthasolano`,
                                                ],
                                            }),
                                        }),
                                        // Dirección
                                        (0, y.jsx)(`li`, {
                                            className: `leading-relaxed text-ink/60`,
                                            children: `Oficina: Av. Quito y Tulcán, Edificio Hidalgo Ordóñez, Of. 204, frente al Municipio, altos Notaría 5, Santo Domingo, Ecuador.`,
                                        }),
                                    ],
                                }),
                            ],
                        }),

                        // Columna 3: Legal
                        (0, y.jsxs)(`div`, {
                            children: [
                                (0, y.jsx)(`h3`, {
                                    className: `text-xs font-semibold uppercase tracking-widest text-ink/50`,
                                    children: `Legal`,
                                }),
                                (0, y.jsxs)(`ul`, {
                                    className: `mt-4 space-y-3 text-sm text-ink/75`,
                                    children: [
                                        (0, y.jsx)(`li`, {
                                            children: (0, y.jsx)(l, {
                                                to: `/politica-de-privacidad`,
                                                className: `transition-colors hover:text-plum`,
                                                children: `Política de privacidad`,
                                            }),
                                        }),
                                        (0, y.jsx)(`li`, {
                                            children: (0, y.jsx)(l, {
                                                to: `/aviso-legal`,
                                                className: `transition-colors hover:text-plum`,
                                                children: `Aviso legal`,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                // Copyright
                (0, y.jsxs)(`div`, {
                    className: `mt-12 border-t border-ink/5 pt-6 text-center text-xs text-ink/45`,
                    children: [
                        `© `,
                        new Date().getFullYear(),
                        ` Abg. Martha Solano · Abogada Familiar & Patrimonial · Todos los derechos reservados.`,
                    ],
                }),
            ],
        }),
    });
}

// Botón flotante WhatsApp
function C() {
    return (0, y.jsx)(`a`, {
        href: g(_),
        target: `_blank`,
        rel: `noopener noreferrer`,
        "aria-label": `Cuénteme su caso por WhatsApp`,
        className: `fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:bg-[#1fb858]`,
        children: (0, y.jsx)(m, {
            className: `h-7 w-7`,
            "aria-hidden": `true`,
        }),
    });
}

// Navegación entre ventanas (iframe)
function w() {
    let e = d();
    let t = r();

    return (0, v.useEffect)(() => {
        if (typeof window > `u` || window.parent === window) return;

        let n = e.location;
        let r =
            e.state !== `idle` && n
                ? `${n.pathname}${n.search}${n.hash}`
                : `${t.pathname}${t.search}${t.hash}`;

        window.parent.postMessage(
            {
                type: `navigation`,
                path: r,
                state: e.state,
            },
            `*`
        );
    }, [e.state, e.location, t.pathname, t.search, t.hash]);

    return null;
}

// Links para head
var T = () => [
    { rel: `preconnect`, href: `https://fonts.googleapis.com` },
    {
        rel: `preconnect`,
        href: `https://fonts.gstatic.com`,
        crossOrigin: `anonymous`,
    },
    {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Inter:ital,opsz,wght@0,14..32,300..800;1,14..32,300..800&display=swap`,
    },
    {
        rel: `icon`,
        href: `https://assets.ls-assets.com/uploads/262ba0d6-6efa-4b1d-bd44-e3e460d371ef/b0643dd8-50e7-4aac-a81b-68e3a475abc4.png?w=128`,
    },
];

// Componente Layout
function E({ children: e }) {
    return (0, y.jsxs)(`html`, {
        lang: `es`,
        children: [
            (0, y.jsxs)(`head`, {
                children: [
                    (0, y.jsx)(`meta`, { charSet: `utf-8` }),
                    (0, y.jsx)(`meta`, {
                        name: `viewport`,
                        content: `width=device-width, initial-scale=1`,
                    }),
                    (0, y.jsx)(f, {}),
                    (0, y.jsx)(a, {}),
                ],
            }),
            (0, y.jsxs)(`body`, {
                children: [
                    e,
                    (0, y.jsx)(c, {}),
                    (0, y.jsx)(s, {}),
                ],
            }),
        ],
    });
}

// Componente principal
var D = e(function () {
    return (0, y.jsxs)(`div`, {
        className: `flex min-h-screen flex-col`,
        children: [
            (0, y.jsx)(w, {}),
            (0, y.jsx)(x, {}),
            (0, y.jsx)(`main`, {
                className: `flex-1`,
                children: (0, y.jsx)(o, {}),
            }),
            (0, y.jsx)(S, {}),
            (0, y.jsx)(C, {}),
        ],
    });
});

// Error Boundary
var O = u(function ({ error: e }) {
    let n = `Oops!`;
    let r = `An unexpected error occurred.`;

    if (t(e)) {
        n = e.status === 404 ? `404` : `Error`;
        r = e.status === 404
            ? `The requested page could not be found.`
            : e.statusText || r;
    }

    return (0, y.jsxs)(`main`, {
        className: `container mx-auto p-4 pt-16`,
        children: [
            (0, y.jsx)(`h1`, {
                className: `text-4xl font-bold`,
                children: n,
            }),
            (0, y.jsx)(`p`, {
                className: `mt-4`,
                children: r,
            }),
            void 0,
        ],
    });
});

export { O as ErrorBoundary, E as Layout, D as default, T as links };