import { A as e, M as t, P as n, t as r } from "./jsx-runtime-CVGhhJ9n.js";
import { a as i, n as a, r as o, t as s } from "./whatsapp-X8xGeG-u.js";

// Utilidades
var c = (...e) =>
    e
        .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
        .join(` `)
        .trim();

var l = (e) =>
    e
        .replace(/([a-z0-9])([A-Z])/g, `$1-$2`)
        .toLowerCase();

var u = (e) =>
    e
        .replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
            n ? n.toUpperCase() : t.toLowerCase()
        );

var d = (e) => {
    let t = u(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
};

// Configuración SVG
var f = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
};

var p = (e) => {
    for (let t in e) {
        if (t.startsWith(`aria-`) || t === `role` || t === `title`) {
            return !0;
        }
    }
    return !1;
};

// Contexto y componentes
var m = n(t(), 1);
var h = (0, m.createContext)({});
var g = () => (0, m.useContext)(h);

var _ = (0, m.forwardRef)(
    (
        {
            color: e,
            size: t,
            strokeWidth: n,
            absoluteStrokeWidth: r,
            className: i = ``,
            children: a,
            iconNode: o,
            ...s
        },
        l
    ) => {
        let {
            size: u = 24,
            strokeWidth: d = 2,
            absoluteStrokeWidth: h = !1,
            color: _ = `currentColor`,
            className: v = ``,
        } = g() ?? {};

        let y = r ?? h ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;

        return (0, m.createElement)(
            `svg`,
            {
                ref: l,
                ...f,
                width: t ?? u ?? f.width,
                height: t ?? u ?? f.height,
                stroke: e ?? _,
                strokeWidth: y,
                className: c(`lucide`, v, i),
                ...(!a && !p(s) && { "aria-hidden": `true` }),
                ...s,
            },
            [
                ...o.map(([e, t]) => (0, m.createElement)(e, t)),
                ...Array.isArray(a) ? a : [a],
            ]
        );
    }
);

var v = (e, t) => {
    let n = (0, m.forwardRef)(
        ({ className: n, ...r }, i) =>
            (0, m.createElement)(_, {
                ref: i,
                iconNode: t,
                className: c(`lucide-${l(d(e))}`, `lucide-${e}`, n),
                ...r,
            })
    );
    n.displayName = d(e);
    return n;
};

// Iconos
var y = v(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]);

var b = v(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]);

var x = v(`file-check`, [
    [`path`, {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
    }],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `m9 15 2 2 4-4`, key: `1grp1n` }],
]);

var S = v(`heart-handshake`, [
    [`path`, {
        d: `M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,
        key: `17lmqv`,
    }],
]);

var C = v(`scale`, [
    [`path`, { d: `M12 3v18`, key: `108xh3` }],
    [`path`, { d: `m19 8 3 8a5 5 0 0 1-6 0zV7`, key: `zcdpyk` }],
    [`path`, { d: `M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`, key: `1yorad` }],
    [`path`, { d: `m5 8 3 8a5 5 0 0 1-6 0zV7`, key: `eua70x` }],
    [`path`, { d: `M7 21h10`, key: `1b0cd5` }],
]);

var w = v(`shield-check`, [
    [`path`, {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
    }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
]);

var T = v(`sparkles`, [
    [`path`, {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
    }],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
]);

var E = v(`user-cog`, [
    [`path`, { d: `M10 15H6a4 4 0 0 0-4 4v2`, key: `1nfge6` }],
    [`path`, { d: `m14.305 16.53.923-.382`, key: `1itpsq` }],
    [`path`, { d: `m15.228 13.852-.923-.383`, key: `eplpkm` }],
    [`path`, { d: `m16.852 12.228-.383-.923`, key: `13v3q0` }],
    [`path`, { d: `m16.852 17.772-.383.924`, key: `1i8mnm` }],
    [`path`, { d: `m19.148 12.228.383-.923`, key: `1q8j1v` }],
    [`path`, { d: `m19.53 18.696-.382-.924`, key: `vk1qj3` }],
    [`path`, { d: `m20.772 13.852.924-.383`, key: `n880s0` }],
    [`path`, { d: `m20.772 16.148.924.383`, key: `1g6xey` }],
    [`circle`, { cx: `18`, cy: `15`, r: `3`, key: `gjjjvw` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
]);

var D = v(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
]);

// Configuración de imágenes
var O = r();
var k = `/assets`;
var A = [480, 768, 1200, 1920];
var j = [`assets.ls-assets.com`, `assets.ls-assetsdev.com`];
var M = [`uploads/`, `provider/`, `logos/`];

function N(e) {
    if (!e.startsWith(`http`)) return e;
    try {
        let t = new URL(e);
        if (!j.includes(t.hostname)) return null;
        let n = t.pathname.slice(1);
        return M.some(e => n.startsWith(e)) ? n : null;
    } catch {
        return null;
    }
}

function P({ r2Key: e, alt: t, width: n, height: r, priority: i = !1, className: a, ...o }) {
    let s = N(e);
    let c = i ? `eager` : `lazy`;
    let l = i ? `sync` : `async`;

    return s === null
        ? (0, O.jsx)(`img`, {
            src: e,
            alt: t,
            width: n,
            height: r,
            loading: c,
            decoding: l,
            className: a,
            ...o,
        })
        : (0, O.jsx)(`img`, {
            src: `${k}/${s}?w=1200`,
            srcSet: A.map(e => `${k}/${s}?w=${e} ${e}w`).join(`, `),
            sizes: `(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px`,
            alt: t,
            width: n,
            height: r,
            loading: c,
            decoding: l,
            className: a,
            ...o,
        });
}

// Datos
var F = {
    numero: `593990485395`,
    general: o(s),
};

var I = [
    {
        icon: D,
        titulo: `Decisiones de familia`,
        descripcion: `Divorcios, alimentos, tenencia, régimen de visitas, uniones de hecho, acuerdos, conflictos familiares y mediación.`,
        cta: `Consultar un asunto de familia`,
        link: o(
            `Hola, Abg. Martha Solano. Necesito orientación sobre un asunto de familia. Mi situación está relacionada con __________.`
        ),
    },
    {
        icon: C,
        titulo: `Herencias, escrituras y decisiones patrimoniales`,
        descripcion: `Herencias, posesiones efectivas, donaciones, usufructos, particiones, adjudicaciones, compraventas, poderes y gestiones necesarias para formalizar decisiones sobre bienes.`,
        cta: `Consultar un asunto patrimonial`,
        link: o(
            `Hola, Abg. Martha Solano. Necesito organizar una herencia, escritura o decisión patrimonial relacionada con __________.`
        ),
    },
    {
        icon: x,
        titulo: `Organización y regularización de propiedades`,
        descripcion: `Revisión documental, aclaratorias, cambios de nombre, certificaciones de linderos, obligaciones municipales, propiedad horizontal y preparación de inmuebles antes de vender, donar, dividir, heredar o administrar.`,
        cta: `Consultar sobre una propiedad`,
        link: o(
            `Hola, Abg. Martha Solano. Necesito revisar u organizar la documentación de una propiedad ubicada en __________.`
        ),
    },
    {
        icon: w,
        titulo: `Arrendamientos y gestión inmobiliaria estratégica`,
        descripcion: `Contratos, negociación, selección de arrendatarios, administración y acompañamiento legal para conservar, organizar y aprovechar mejor una propiedad destinada a arriendo.`,
        cta: `Consultar sobre un arrendamiento`,
        link: o(
            `Hola, Abg. Martha Solano. Necesito asesoría o gestión relacionada con el arrendamiento de una propiedad ubicada en __________.`
        ),
    },
];

var L = [
    `Necesita vender una propiedad, pero antes debe revisar escrituras, linderos, cambios de nombre u obligaciones municipales.`,
    `Ha recibido una herencia o comparte un inmueble con familiares y necesita organizar jurídicamente la propiedad.`,
    `Vive en otra ciudad o en el exterior y no puede dedicar sus vacaciones o jornadas laborales a realizar trámites presenciales.`,
    `Necesita coordinar gestiones con notaría, municipio, contador, arquitecto u otros profesionales, según lo que requiera el caso.`,
];

var R = [
    {
        icon: C,
        titulo: `Criterio jurídico y práctico`,
        texto: `Analizo tanto el documento legal como las consecuencias reales que la decisión puede producir sobre la familia, el patrimonio o el inmueble.`,
    },
    {
        icon: w,
        titulo: `Prevención antes del conflicto`,
        texto: `Identifico pendientes, inconsistencias y riesgos antes de que puedan retrasar una venta, una partición, una escritura, un acuerdo o una gestión familiar.`,
    },
    {
        icon: x,
        titulo: `Organización documental`,
        texto: `Ordeno la información y los requisitos para que cada actuación tenga una finalidad clara y se realice en la etapa correspondiente.`,
    },
    {
        icon: E,
        titulo: `Coordinación y seguimiento`,
        texto: `Cuando el asunto lo requiere, coordino las gestiones jurídicas, notariales, municipales y técnicas necesarias para cumplir el encargo.`,
    },
    {
        icon: S,
        titulo: `Comunicación clara y humana`,
        texto: `Explico las alternativas con honestidad, sin tecnicismos innecesarios, falsas expectativas ni promesas de resultados.`,
    },
];

var z = [`Santo Domingo`, `Otra ciudad de Ecuador`, `En el exterior`];
var B = [`Familia`, `Herencias o escrituras`, `Organización o regularización de una propiedad`, `Arrendamientos o gestión inmobiliaria`, `Otro asunto`];
var V = [`Sí`, `No`, `Tengo algunos documentos`];
var H = [
    `Abg. Martha Solano`,
    `Abogada Familiar & Patrimonial`,
    `Mediadora acreditada por el Consejo de la Judicatura`,
    `Corredora de bienes raíces`,
    `Experiencia en administración de propiedades desde 2012`,
];

var U = [
    {
        pregunta: `No sé exactamente qué trámite necesito. ¿Puedo escribirle?`,
        respuesta: `Sí. Describa brevemente la situación y los documentos que tiene. A partir de esa información se podrá identificar qué aspectos deben revisarse y cuál podría ser la ruta correspondiente.`,
    },
    {
        pregunta: `¿Puede ayudarme si vivo fuera de Santo Domingo o en el exterior?`,
        respuesta: `Muchas gestiones pueden revisarse, organizarse y coordinarse a distancia. Primero será necesario determinar si el caso requiere comparecencias, firmas, poderes, documentos originales o actuaciones presenciales.`,
    },
    {
        pregunta: `¿Puede revisar una propiedad antes de que se la venda?`,
        respuesta: `Sí. Según el caso, la revisión puede comprender escrituras, antecedentes, titularidad, cambios de nombre, linderos, obligaciones municipales, propiedad horizontal y otros aspectos que podrían afectar la negociación o transferencia.`,
    },
    {
        pregunta: `¿La gestión inmobiliaria es independiente del servicio jurídico?`,
        respuesta: `La gestión inmobiliaria se maneja como una extensión del acompañamiento patrimonial. Esto permite revisar contratos, arriendos, administración y decisiones sobre inmuebles con una visión jurídica y práctica.`,
    },
    {
        pregunta: `¿Cuánto cuestan los servicios?`,
        respuesta: `Los honorarios dependen del alcance, la complejidad y las etapas necesarias. Después de revisar la información inicial se comunicará una propuesta clara, diferenciando los honorarios profesionales y los costos externos que pudieran corresponder.`,
    },
    {
        pregunta: `¿Puede garantizar el resultado de un trámite o proceso?`,
        respuesta: `No se ofrecen resultados absolutos ni promesas que dependan de autoridades, terceros o circunstancias ajenas. El compromiso consiste en analizar el asunto con responsabilidad, explicar los riesgos, plantear una estrategia y gestionar con diligencia las actuaciones encomendadas.`,
    },
];

var W = [
    {
        numero: `1`,
        titulo: `Cuénteme su situación`,
        texto: `Envíeme por WhatsApp una explicación breve de lo que necesita, dónde se encuentra el bien o el asunto y si cuenta con documentos.`,
    },
    {
        numero: `2`,
        titulo: `Revisión inicial y definición del alcance`,
        texto: `Identifico qué información debe revisarse y qué documentos son necesarios para comprender correctamente la situación.`,
    },
    {
        numero: `3`,
        titulo: `Ruta de acción y propuesta`,
        texto: `Le explico las etapas que podrían requerirse, el alcance del servicio, los honorarios profesionales y, cuando corresponda, los costos externos relacionados con la gestión.`,
    },
    {
        numero: `4`,
        titulo: `Gestión y seguimiento`,
        texto: `Una vez autorizado el servicio, ejecuto las actuaciones encomendadas y comunico los avances relevantes de cada etapa.`,
    },
];

// Meta
function G() {
    return [
        { title: `Abg. Martha Solano | Abogada Familiar y Patrimonial en Santo Domingo` },
        {
            name: `description`,
            content: `Asesoría jurídica en familia, herencias, escrituras, mediación, regularización de propiedades y arrendamientos. Atención en Santo Domingo y coordinación para clientes fuera de la ciudad.`,
        },
        {
            property: `og:title`,
            content: `Decisiones legales claras para proteger su familia y su patrimonio`,
        },
        {
            property: `og:description`,
            content: `Dirección jurídica en asuntos familiares, patrimoniales, escrituras, herencias, propiedades y arrendamientos.`,
        },
        {
            property: `og:type`,
            content: `website`,
        },
    ];
}

// Componente principal
var K = e(function () {
    let [e, t] = (0, m.useState)(``);
    let [n, r] = (0, m.useState)(``);
    let [s, c] = (0, m.useState)(``);
    let [l, u] = (0, m.useState)(``);
    let [d, f] = (0, m.useState)(``);
    let [p, h] = (0, m.useState)(0);

    function g(t) {
        t.preventDefault();
        let r = a({ nombre: e, ubicacion: n, area: s, documentos: l, descripcion: d });
        window.open(o(r), `_blank`, `noopener,noreferrer`);
    }

    return (0, O.jsxs)(`main`, {
        className: `bg-cream text-ink`,
        children: [
            // Hero Section
            (0, O.jsxs)(`section`, {
                className: `relative overflow-hidden`,
                children: [
                    (0, O.jsx)(`div`, {
                        "aria-hidden": `true`,
                        className: `absolute inset-0 -z-10 bg-gradient-to-br from-sand via-cream to-cream`,
                    }),
                    (0, O.jsx)(`div`, {
                        "aria-hidden": `true`,
                        className: `absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl`,
                    }),
                    (0, O.jsxs)(`div`, {
                        className: `mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-20`,
                        children: [
                            // Hero Text
                            (0, O.jsxs)(`div`, {
                                children: [
                                    (0, O.jsx)(`p`, {
                                        className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                                        children: `Abogada Familiar & Patrimonial`,
                                    }),
                                    (0, O.jsx)(`p`, {
                                        className: `mt-1 text-xs font-medium uppercase tracking-[0.18em] text-ink/50`,
                                        children: `Mediadora acreditada`,
                                    }),
                                    (0, O.jsxs)(`h1`, {
                                        className: `mt-6 text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]`,
                                        children: [
                                            `Decisiones legales claras para`,
                                            ` `,
                                            (0, O.jsx)(`span`, {
                                                className: `text-plum`,
                                                children: `proteger su familia`,
                                            }),
                                            `, organizar sus bienes y cuidar su patrimonio.`,
                                        ],
                                    }),
                                    (0, O.jsx)(`p`, {
                                        className: `mt-6 max-w-xl text-lg leading-relaxed text-ink/70`,
                                        children: `Le brindo dirección jurídica y acompañamiento estratégico en asuntos de familia, herencias, escrituras, mediación, regularización de propiedades y arrendamientos, integrando el Derecho con una comprensión real de sus bienes y de las decisiones que los rodean.`,
                                    }),
                                    (0, O.jsxs)(`a`, {
                                        href: F.general,
                                        target: `_blank`,
                                        rel: `noopener noreferrer`,
                                        className: `mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#25D366]/40`,
                                        children: [
                                            (0, O.jsx)(i, { className: `h-5 w-5`, "aria-hidden": `true` }),
                                            `Cuénteme su caso por WhatsApp`,
                                        ],
                                    }),
                                    (0, O.jsx)(`p`, {
                                        className: `mt-4 max-w-md text-sm text-ink/55`,
                                        children: `Atención presencial en Santo Domingo y coordinación remota para personas que viven en otras ciudades o en el exterior.`,
                                    }),
                                    (0, O.jsx)(`div`, {
                                        className: `mt-8 flex flex-wrap items-center gap-x-6 gap-y-3`,
                                        children: [
                                            { icon: C, label: `Estrategia jurídica` },
                                            { icon: S, label: `Acompañamiento humano` },
                                            { icon: w, label: `Visión patrimonial e inmobiliaria` },
                                        ].map((e) =>
                                            (0, O.jsxs)(
                                                `div`,
                                                {
                                                    className: `flex items-center gap-2`,
                                                    children: [
                                                        (0, O.jsx)(e.icon, {
                                                            className: `h-4 w-4 text-plum`,
                                                            "aria-hidden": `true`,
                                                        }),
                                                        (0, O.jsx)(`span`, {
                                                            className: `text-sm font-medium text-ink/75`,
                                                            children: e.label,
                                                        }),
                                                    ],
                                                },
                                                e.label
                                            )
                                        ),
                                    }),
                                ],
                            }),
                            // Hero Image
                            (0, O.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                    (0, O.jsx)(`div`, {
                                        className: `overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-ink/10`,
                                        children: (0, O.jsx)(P, {
                                            r2Key: `provider/istock/2215588621.jpg`,
                                            alt: `Escena de justicia y derecho: gaveta de juez junto a documentos legales, símbolo de confianza y acompañamiento jurídico`,
                                            className: `aspect-[4/5] w-full object-cover`,
                                            priority: !0,
                                        }),
                                    }),
                                    (0, O.jsx)(`div`, {
                                        "aria-hidden": `true`,
                                        className: `absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-2xl bg-plum/80`,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // Intro Section
            (0, O.jsx)(`section`, {
                className: `border-t border-ink/5 bg-card`,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24`,
                    children: [
                        (0, O.jsx)(`p`, {
                            className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                            children: `Antes de firmar, demandar, vender o repartir`,
                        }),
                        (0, O.jsx)(`h2`, {
                            className: `mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl`,
                            children: `Primero hay que ordenar la decisión.`,
                        }),
                        (0, O.jsxs)(`div`, {
                            className: `mx-auto mt-8 space-y-4 text-left text-base leading-relaxed text-ink/70 sm:text-lg`,
                            children: [
                                (0, O.jsx)(`p`, {
                                    children: `Cuando un asunto involucra a la familia o al patrimonio, el problema rara vez se resuelve con un documento aislado. Es necesario revisar antecedentes, identificar riesgos, organizar requisitos y definir el orden correcto de cada gestión.`,
                                }),
                                (0, O.jsx)(`p`, {
                                    children: `Mi trabajo consiste en darle claridad sobre qué corresponde hacer, qué debe evitarse y cómo avanzar con una estrategia coherente, realista y jurídicamente respaldada.`,
                                }),
                            ],
                        }),
                        (0, O.jsx)(`blockquote`, {
                            className: `mt-10 border-l-2 border-plum pl-6 text-left font-display text-xl font-medium italic text-plum sm:text-2xl`,
                            children: `“No se trata de hacer más trámites. Se trata de realizar los necesarios, en el orden correcto.”`,
                        }),
                    ],
                }),
            }),

            // Servicios Section
            (0, O.jsx)(`section`, {
                id: `servicios`,
                className: `bg-cream`,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: [
                        (0, O.jsxs)(`div`, {
                            className: `mx-auto max-w-2xl text-center`,
                            children: [
                                (0, O.jsx)(`p`, {
                                    className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                                    children: `Identificación de la necesidad`,
                                }),
                                (0, O.jsx)(`h2`, {
                                    className: `mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl`,
                                    children: `¿Qué necesita resolver o poner en orden?`,
                                }),
                                (0, O.jsx)(`p`, {
                                    className: `mt-4 text-base leading-relaxed text-ink/70 sm:text-lg`,
                                    children: `Seleccione el área que más se aproxima a su situación. No es necesario que conozca previamente el nombre del trámite o del proceso.`,
                                }),
                            ],
                        }),
                        (0, O.jsx)(`div`, {
                            className: `mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
                            children: I.map((e) =>
                                (0, O.jsxs)(
                                    `div`,
                                    {
                                        className: `group flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-plum/20`,
                                        children: [
                                            (0, O.jsx)(`div`, {
                                                className: `flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-plum`,
                                                children: (0, O.jsx)(e.icon, {
                                                    className: `h-6 w-6`,
                                                    "aria-hidden": `true`,
                                                }),
                                            }),
                                            (0, O.jsx)(`h3`, {
                                                className: `mt-5 text-lg font-medium leading-snug text-ink`,
                                                children: e.titulo,
                                            }),
                                            (0, O.jsx)(`p`, {
                                                className: `mt-3 flex-1 text-sm leading-relaxed text-ink/65`,
                                                children: e.descripcion,
                                            }),
                                            (0, O.jsxs)(`a`, {
                                                href: e.link,
                                                target: `_blank`,
                                                rel: `noopener noreferrer`,
                                                className: `mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-plum/30 px-4 py-2.5 text-sm font-semibold text-plum transition-all duration-300 hover:bg-plum hover:text-white`,
                                                children: [
                                                    (0, O.jsx)(i, {
                                                        className: `h-4 w-4`,
                                                        "aria-hidden": `true`,
                                                    }),
                                                    e.cta,
                                                ],
                                            }),
                                        ],
                                    },
                                    e.titulo
                                )
                            ),
                        }),
                    ],
                }),
            }),

            // Sección: Servicio pensado para quienes viven lejos
            (0, O.jsx)(`section`, {
                className: `overflow-hidden bg-brand-deep text-cream`,
                children: (0, O.jsx)(`div`, {
                    className: `mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: (0, O.jsxs)(`div`, {
                        className: `grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16`,
                        children: [
                            (0, O.jsxs)(`div`, {
                                children: [
                                    (0, O.jsx)(`p`, {
                                        className: `text-xs font-semibold uppercase tracking-[0.22em] text-gold`,
                                        children: `Dirección y seguimiento, aunque usted esté lejos`,
                                    }),
                                    (0, O.jsx)(`h2`, {
                                        className: `mt-4 text-3xl font-medium leading-tight sm:text-4xl`,
                                        children: `Un servicio pensado también para quienes no pueden encargarse personalmente de cada trámite.`,
                                    }),
                                    (0, O.jsxs)(`div`, {
                                        className: `mt-6 space-y-4 text-base leading-relaxed text-cream/75`,
                                        children: [
                                            (0, O.jsx)(`p`, {
                                                children: `Atiendo a propietarios, herederos, profesionales y familias que viven fuera de Santo Domingo o en el exterior, tienen una agenda exigente o necesitan delegar una gestión en una persona responsable.`,
                                            }),
                                            (0, O.jsx)(`p`, {
                                                children: `Según las características del caso, reviso la documentación disponible, identifico los pendientes y coordino las actuaciones jurídicas, municipales, notariales o técnicas necesarias para avanzar con orden.`,
                                            }),
                                        ],
                                    }),
                                    (0, O.jsx)(`blockquote`, {
                                        className: `mt-8 border-l-2 border-gold pl-6 font-display text-xl font-medium italic text-gold`,
                                        children: `Usted mantiene el control de la decisión. Yo le doy estructura y seguimiento a la gestión encomendada.`,
                                    }),
                                ],
                            }),
                            (0, O.jsxs)(`div`, {
                                className: `rounded-3xl bg-white/5 p-8 ring-1 ring-white/10`,
                                children: [
                                    (0, O.jsx)(`h3`, {
                                        className: `text-sm font-semibold uppercase tracking-widest text-gold`,
                                        children: `Situaciones frecuentes`,
                                    }),
                                    (0, O.jsx)(`ul`, {
                                        className: `mt-6 space-y-5`,
                                        children: L.map((e) =>
                                            (0, O.jsxs)(
                                                `li`,
                                                {
                                                    className: `flex items-start gap-3`,
                                                    children: [
                                                        (0, O.jsx)(`span`, {
                                                            className: `mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold`,
                                                            children: (0, O.jsx)(y, {
                                                                className: `h-4 w-4`,
                                                                "aria-hidden": `true`,
                                                            }),
                                                        }),
                                                        (0, O.jsx)(`p`, {
                                                            className: `text-sm leading-relaxed text-cream/80`,
                                                            children: e,
                                                        }),
                                                    ],
                                                },
                                                e
                                            )
                                        ),
                                    }),
                                    (0, O.jsxs)(`a`, {
                                        href: F.general,
                                        target: `_blank`,
                                        rel: `noopener noreferrer`,
                                        className: `mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5`,
                                        children: [
                                            (0, O.jsx)(i, {
                                                className: `h-4 w-4`,
                                                "aria-hidden": `true`,
                                            }),
                                            `Cuénteme su caso por WhatsApp`,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),

            // Sección: Más que una gestión aislada
            (0, O.jsx)(`section`, {
                className: `bg-cream`,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: [
                        (0, O.jsxs)(`div`, {
                            className: `mx-auto max-w-2xl text-center`,
                            children: [
                                (0, O.jsx)(`p`, {
                                    className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                                    children: `Una mirada integral`,
                                }),
                                (0, O.jsx)(`h2`, {
                                    className: `mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl`,
                                    children: `Más que una gestión aislada: una estrategia para proteger la decisión completa.`,
                                }),
                            ],
                        }),
                        (0, O.jsx)(`div`, {
                            className: `mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3`,
                            children: R.map((e) =>
                                (0, O.jsxs)(
                                    `div`,
                                    {
                                        className: `rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`,
                                        children: [
                                            (0, O.jsx)(`div`, {
                                                className: `flex h-11 w-11 items-center justify-center rounded-full bg-plum/10 text-plum`,
                                                children: (0, O.jsx)(e.icon, {
                                                    className: `h-5 w-5`,
                                                    "aria-hidden": `true`,
                                                }),
                                            }),
                                            (0, O.jsx)(`h3`, {
                                                className: `mt-4 text-lg font-medium text-ink`,
                                                children: e.titulo,
                                            }),
                                            (0, O.jsx)(`p`, {
                                                className: `mt-2 text-sm leading-relaxed text-ink/65`,
                                                children: e.texto,
                                            }),
                                        ],
                                    },
                                    e.titulo
                                )
                            ),
                        }),
                    ],
                }),
            }),

            // Sección: Método
            (0, O.jsx)(`section`, {
                id: `metodo`,
                className: `bg-card`,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: [
                        (0, O.jsxs)(`div`, {
                            className: `mx-auto max-w-2xl text-center`,
                            children: [
                                (0, O.jsx)(`p`, {
                                    className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                                    children: `Claridad desde el primer contacto`,
                                }),
                                (0, O.jsx)(`h2`, {
                                    className: `mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl`,
                                    children: `Así comienza el acompañamiento.`,
                                }),
                            ],
                        }),
                        (0, O.jsxs)(`div`, {
                            className: `relative mt-14`,
                            children: [
                                (0, O.jsx)(`div`, {
                                    "aria-hidden": `true`,
                                    className: `absolute left-8 top-0 hidden h-full w-px bg-plum/15 lg:left-1/2 lg:-translate-x-1/2 lg:block`,
                                }),
                                (0, O.jsx)(`div`, {
                                    className: `space-y-10 lg:space-y-14`,
                                    children: W.map((e, t) =>
                                        (0, O.jsxs)(
                                            `div`,
                                            {
                                                className: `relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 lg:w-1/2 lg:odd:pr-12 lg:even:ml-auto lg:even:pl-12`,
                                                children: [
                                                    (0, O.jsx)(`span`, {
                                                        className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-lg font-semibold text-plum shadow-md ring-1 ring-plum/20`,
                                                        children: e.numero,
                                                    }),
                                                    (0, O.jsxs)(`div`, {
                                                        children: [
                                                            (0, O.jsx)(`h3`, {
                                                                className: `text-xl font-medium text-ink`,
                                                                children: e.titulo,
                                                            }),
                                                            (0, O.jsx)(`p`, {
                                                                className: `mt-2 max-w-md text-sm leading-relaxed text-ink/65 sm:text-base`,
                                                                children: e.texto,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            e.numero
                                        )
                                    ),
                                }),
                            ],
                        }),
                        (0, O.jsx)(`div`, {
                            className: `mt-16 text-center`,
                            children: (0, O.jsxs)(`a`, {
                                href: F.general,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl`,
                                children: [
                                    (0, O.jsx)(i, {
                                        className: `h-5 w-5`,
                                        "aria-hidden": `true`,
                                    }),
                                    `Cuénteme su caso por WhatsApp`,
                                ],
                            }),
                        }),
                    ],
                }),
            }),

            // Formulario
            (0, O.jsx)(`section`, {
                id: `formulario`,
                className: `bg-brand-deep text-cream`,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: [
                        (0, O.jsxs)(`div`, {
                            className: `text-center`,
                            children: [
                                (0, O.jsx)(`p`, {
                                    className: `text-xs font-semibold uppercase tracking-[0.22em] text-gold`,
                                    children: `Formulario de calificación`,
                                }),
                                (0, O.jsx)(`h2`, {
                                    className: `mt-4 text-3xl font-medium leading-tight sm:text-4xl`,
                                    children: `Cuénteme qué necesita organizar.`,
                                }),
                                (0, O.jsx)(`p`, {
                                    className: `mt-4 text-base leading-relaxed text-cream/70 sm:text-lg`,
                                    children: `Este breve formulario preparará su mensaje y lo llevará directamente a WhatsApp.`,
                                }),
                            ],
                        }),
                        (0, O.jsxs)(`form`, {
                            onSubmit: g,
                            className: `mt-10 space-y-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8`,
                            children: [
                                // Nombre
                                (0, O.jsxs)(`div`, {
                                    children: [
                                        (0, O.jsx)(`label`, {
                                            htmlFor: `nombre`,
                                            className: `mb-2 block text-sm font-medium text-cream/90`,
                                            children: `Nombre y apellido`,
                                        }),
                                        (0, O.jsx)(`input`, {
                                            id: `nombre`,
                                            type: `text`,
                                            required: !0,
                                            value: e,
                                            onChange: (e) => t(e.target.value),
                                            placeholder: `Ej.: María Fernanda Castro`,
                                            className: `w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold focus:bg-white/10`,
                                        }),
                                    ],
                                }),
                                // Ubicación
                                (0, O.jsxs)(`div`, {
                                    children: [
                                        (0, O.jsx)(`span`, {
                                            className: `mb-2 block text-sm font-medium text-cream/90`,
                                            children: `¿Dónde se encuentra actualmente?`,
                                        }),
                                        (0, O.jsx)(`div`, {
                                            className: `flex flex-wrap gap-3`,
                                            children: z.map((e) =>
                                                (0, O.jsx)(
                                                    `button`,
                                                    {
                                                        type: `button`,
                                                        onClick: () => r(e),
                                                        className: `rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${n === e ? `border-gold bg-gold text-brand-deep` : `border-white/20 text-cream/80 hover:border-gold/60`}`,
                                                        children: e,
                                                    },
                                                    e
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                                // Área
                                (0, O.jsxs)(`div`, {
                                    children: [
                                        (0, O.jsx)(`span`, {
                                            className: `mb-2 block text-sm font-medium text-cream/90`,
                                            children: `¿Con qué área se relaciona su consulta?`,
                                        }),
                                        (0, O.jsx)(`div`, {
                                            className: `flex flex-wrap gap-3`,
                                            children: B.map((e) =>
                                                (0, O.jsx)(
                                                    `button`,
                                                    {
                                                        type: `button`,
                                                        onClick: () => c(e),
                                                        className: `rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${s === e ? `border-gold bg-gold text-brand-deep` : `border-white/20 text-cream/80 hover:border-gold/60`}`,
                                                        children: e,
                                                    },
                                                    e
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                                // Documentos
                                (0, O.jsxs)(`div`, {
                                    children: [
                                        (0, O.jsx)(`span`, {
                                            className: `mb-2 block text-sm font-medium text-cream/90`,
                                            children: `¿Cuenta con documentos relacionados con el caso?`,
                                        }),
                                        (0, O.jsx)(`div`, {
                                            className: `flex flex-wrap gap-3`,
                                            children: V.map((e) =>
                                                (0, O.jsx)(
                                                    `button`,
                                                    {
                                                        type: `button`,
                                                        onClick: () => u(e),
                                                        className: `rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${l === e ? `border-gold bg-gold text-brand-deep` : `border-white/20 text-cream/80 hover:border-gold/60`}`,
                                                        children: e,
                                                    },
                                                    e
                                                )
                                            ),
                                        }),
                                    ],
                                }),
                                // Descripción
                                (0, O.jsxs)(`div`, {
                                    children: [
                                        (0, O.jsx)(`label`, {
                                            htmlFor: `descripcion`,
                                            className: `mb-2 block text-sm font-medium text-cream/90`,
                                            children: `Describa brevemente lo que necesita resolver`,
                                        }),
                                        (0, O.jsx)(`textarea`, {
                                            id: `descripcion`,
                                            rows: 4,
                                            value: d,
                                            onChange: (e) => f(e.target.value),
                                            placeholder: `Ej.: Tengo una propiedad en Santo Domingo que quiero vender, pero las escrituras tienen un cambio de nombre pendiente y no sé por dónde empezar.`,
                                            className: `w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold focus:bg-white/10`,
                                        }),
                                    ],
                                }),
                                // Submit
                                (0, O.jsxs)(`button`, {
                                    type: `submit`,
                                    className: `inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb858]`,
                                    children: [
                                        (0, O.jsx)(i, {
                                            className: `h-5 w-5`,
                                            "aria-hidden": `true`,
                                        }),
                                        `Enviar mi solicitud por WhatsApp`,
                                    ],
                                }),
                                (0, O.jsx)(`p`, {
                                    className: `text-center text-xs leading-relaxed text-cream/55`,
                                    children: `No envíe cédulas, expedientes, datos de menores de edad ni documentos sensibles mediante este formulario inicial. Después de conocer brevemente su solicitud se le indicará qué información corresponde revisar.`,
                                }),
                            ],
                        }),
                    ],
                }),
            }),

            // Sobre mí
            (0, O.jsx)(`section`, {
                id: `sobre-mi`,
                className: `bg-cream`,
                children: (0, O.jsx)(`div`, {
                    className: `mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: (0, O.jsxs)(`div`, {
                        className: `grid items-center gap-12 lg:grid-cols-2 lg:gap-16`,
                        children: [
                            // Imagen
                            (0, O.jsxs)(`div`, {
                                className: `relative order-2 lg:order-1`,
                                children: [
                                    (0, O.jsx)(`div`, {
                                        className: `overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-ink/10`,
                                        children: (0, O.jsx)(P, {
                                            r2Key: `provider/istock/2280731442.jpg`,
                                            alt: `Abogada acompañando con calidez y profesionalismo a una pareja en una consulta de derecho familiar`,
                                            className: `aspect-[4/4.4] w-full object-cover`,
                                        }),
                                    }),
                                    (0, O.jsx)(`div`, {
                                        "aria-hidden": `true`,
                                        className: `absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-2xl bg-gold/70`,
                                    }),
                                ],
                            }),
                            // Texto
                            (0, O.jsxs)(`div`, {
                                className: `order-1 lg:order-2`,
                                children: [
                                    (0, O.jsx)(`p`, {
                                        className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                                        children: `Experiencia jurídica con comprensión real del patrimonio`,
                                    }),
                                    (0, O.jsx)(`h2`, {
                                        className: `mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl`,
                                        children: `Una abogada de confianza para decisiones importantes sobre familia, patrimonio y bienes.`,
                                    }),
                                    (0, O.jsxs)(`div`, {
                                        className: `mt-6 space-y-4 text-base leading-relaxed text-ink/70`,
                                        children: [
                                            (0, O.jsx)(`p`, {
                                                children: `Mi experiencia no comenzó únicamente en un despacho. Desde muy joven administré propiedades y viví de cerca procesos de herencia, organización de bienes, divorcio y pérdidas familiares.`,
                                            }),
                                            (0, O.jsx)(`p`, {
                                                children: `Esas experiencias me permitieron comprender que detrás de cada patrimonio existen personas, emociones, responsabilidades e incertidumbres. También me enseñaron la importancia de contar con una guía legal que explique con claridad, actúe con honestidad y proteja cada decisión con estrategia.`,
                                            }),
                                            (0, O.jsx)(`p`, {
                                                children: `Hoy integro mi ejercicio como abogada familiar y patrimonial, mediadora acreditada y corredora de bienes raíces para acompañar asuntos en los que la familia, los documentos y los inmuebles se encuentran profundamente relacionados.`,
                                            }),
                                        ],
                                    }),
                                    (0, O.jsx)(`ul`, {
                                        className: `mt-8 space-y-3 rounded-2xl bg-white p-6 ring-1 ring-ink/5`,
                                        children: H.map((e) =>
                                            (0, O.jsxs)(
                                                `li`,
                                                {
                                                    className: `flex items-center gap-3 text-sm text-ink/75 sm:text-base`,
                                                    children: [
                                                        (0, O.jsx)(T, {
                                                            className: `h-4 w-4 shrink-0 text-plum`,
                                                            "aria-hidden": `true`,
                                                        }),
                                                        e,
                                                    ],
                                                },
                                                e
                                            )
                                        ),
                                    }),
                                    (0, O.jsx)(`p`, {
                                        className: `mt-8 font-display text-xl font-medium italic text-plum sm:text-2xl`,
                                        children: `Confianza para decidir. Estrategia para proteger.`,
                                    }),
                                    (0, O.jsxs)(`a`, {
                                        href: F.general,
                                        target: `_blank`,
                                        rel: `noopener noreferrer`,
                                        className: `mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5`,
                                        children: [
                                            (0, O.jsx)(i, {
                                                className: `h-5 w-5`,
                                                "aria-hidden": `true`,
                                            }),
                                            `Cuénteme su caso por WhatsApp`,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),

            // FAQ
            (0, O.jsx)(`section`, {
                id: `preguntas`,
                className: `bg-card`,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24`,
                    children: [
                        (0, O.jsxs)(`div`, {
                            className: `text-center`,
                            children: [
                                (0, O.jsx)(`p`, {
                                    className: `text-xs font-semibold uppercase tracking-[0.22em] text-plum`,
                                    children: `Preguntas frecuentes`,
                                }),
                                (0, O.jsx)(`h2`, {
                                    className: `mt-4 text-3xl font-medium leading-tight text-ink sm:text-4xl`,
                                    children: `Resolvamos sus dudas`,
                                }),
                            ],
                        }),
                        (0, O.jsx)(`div`, {
                            className: `mt-10 space-y-4`,
                            children: U.map((e, t) => {
                                let n = p === t;
                                return (0, O.jsxs)(
                                    `div`,
                                    {
                                        className: `overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5`,
                                        children: [
                                            (0, O.jsxs)(`button`, {
                                                type: `button`,
                                                onClick: () => h(n ? null : t),
                                                className: `flex w-full items-center justify-between gap-4 px-6 py-5 text-left`,
                                                "aria-expanded": n,
                                                children: [
                                                    (0, O.jsx)(`span`, {
                                                        className: `font-medium text-ink`,
                                                        children: e.pregunta,
                                                    }),
                                                    (0, O.jsx)(`span`, {
                                                        className: `shrink-0 text-plum transition-transform duration-300 ${n ? `rotate-180` : ``}`,
                                                        "aria-hidden": `true`,
                                                        children: (0, O.jsx)(b, {
                                                            className: `h-5 w-5`,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            n &&
                                            (0, O.jsx)(`div`, {
                                                className: `px-6 pb-6`,
                                                children: (0, O.jsx)(`p`, {
                                                    className: `text-sm leading-relaxed text-ink/65 sm:text-base`,
                                                    children: e.respuesta,
                                                }),
                                            }),
                                        ],
                                    },
                                    e.pregunta
                                );
                            }),
                        }),
                    ],
                }),
            }),

            // CTA final
            (0, O.jsxs)(`section`, {
                className: `relative overflow-hidden bg-brand-deep text-cream`,
                children: [
                    (0, O.jsx)(`div`, {
                        "aria-hidden": `true`,
                        className: `absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(176,137,100,0.25),transparent_55%)]`,
                    }),
                    (0, O.jsxs)(`div`, {
                        className: `relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28`,
                        children: [
                            (0, O.jsx)(`p`, {
                                className: `text-xs font-semibold uppercase tracking-[0.22em] text-gold`,
                                children: `El primer paso es poner claridad`,
                            }),
                            (0, O.jsx)(`h2`, {
                                className: `mt-5 text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl`,
                                children: `Antes de tomar una decisión que afecte a su familia o a su patrimonio, organice el camino correcto.`,
                            }),
                            (0, O.jsx)(`p`, {
                                className: `mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg`,
                                children: `Cuénteme brevemente qué necesita resolver. La información inicial permitirá identificar el área de su solicitud y los documentos que deben revisarse antes de definir los siguientes pasos.`,
                            }),
                            (0, O.jsxs)(`a`, {
                                href: F.general,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-5 text-lg font-semibold text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#25D366]/40`,
                                children: [
                                    (0, O.jsx)(i, {
                                        className: `h-6 w-6`,
                                        "aria-hidden": `true`,
                                    }),
                                    `Cuénteme su caso por WhatsApp`,
                                ],
                            }),
                            (0, O.jsxs)(`div`, {
                                className: `mt-10 text-sm text-cream/60`,
                                children: [
                                    (0, O.jsx)(`p`, {
                                        className: `font-medium text-cream/85`,
                                        children: `Abg. Martha Solano`,
                                    }),
                                    (0, O.jsx)(`p`, {
                                        children: `Abogada Familiar & Patrimonial`,
                                    }),
                                    (0, O.jsx)(`p`, {
                                        children: `Mediadora acreditada`,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
});

export { K as default, G as meta };