export const categories = [
  { id: 1, name: "Indumentaria" },
  { id: 2, name: "Gorras" },
  { id: 3, name: "Accesorios" },
  { id: 4, name: "Hogar" },
];

export const products = [
  {
    id: 1,
    name: "Buzo ARG Oversize Eidos",
    category: "Indumentaria",
    price: 48500,
    image: "/images/indumentaria/buzoArg5.jpeg",
    images: [
      "/images/indumentaria/buzoArg5.jpeg",
      "/images/indumentaria/buzoArg.jpeg",
      "/images/indumentaria/buzoArg1.jpeg",
      "/images/indumentaria/buzoArg2.jpeg",
      "/images/indumentaria/buzoArg3.jpeg",
      "/images/indumentaria/buzoArg4.jpeg",
    ],
    description:
      "Buzo oversize de algodón premium con diseño exclusivo Eidos. Confeccionado con tela gruesa de primera calidad, ideal para el invierno. Disponible en talles S al XL.",
    details: {
      material: "100% Algodón",
      talle: "S / M / L / XL",
      colores: "Negro, Azul, Celeste, Amarillo",
    },
    shipping: "Envío gratis a todo el país en compras mayores a $30.000",
    stock: 12,
    featured: true,
  },
  {
    id: 2,
    name: "Remera ARG Eidos",
    category: "Indumentaria",
    price: 24900,
    image: "/images/indumentaria/remArg.jpeg",
    images: [
      "/images/indumentaria/remArg.jpeg",
      "/images/indumentaria/remArgSol.jpeg",
      "/images/indumentaria/remDiego.jpeg",
      "/images/indumentaria/remDiego1.jpeg",
    ],
    description:
      "Remera de algodón suave de Argentina. Corte moderno y cómodo, perfecta para el día a día. Lavado a máquina a 30°C.",
    details: {
      material: "95% Algodón / 5% Elastano",
      talle: "XS / S / M / L / XL / XXL",
      colores: "Negro, Blanco, Verde Oliva",
    },
    shipping: "Envío gratis a todo el país en compras mayores a $30.000",
    stock: 30,
    featured: true,
  },
  {
    id: 3,
    name: "Gorra lisa Eidos",
    category: "Gorras",
    price: 11200,
    image: "/images/gorra/gorraLisa.jpeg",
    images: [
      "/images/gorra/gorraLisa.jpeg",
      "/images/gorra/gorraLisa1.jpeg",
      "/images/gorra/gorraLisa2.jpeg",
      "/images/gorra/gorraLisa3.jpeg",
    ],
    description:
      "Gorra lisa con visera e isologo Eidos bordado. Regulable, talle único. Confeccionada en twill de alta resistencia con cierre de plástico ajustable.",
    details: {
      material: "Twill Polyéster",
      talle: "Talle único regulable",
      colores: "Negro, Blanco roto",
    },
    shipping: "Envío en 24–48hs hábiles por Correo Argentino o Andreani.",
    stock: 20,
    featured: false,
  },
  {
    id: 4,
    name: "Taza Cerámica Eidos",
    category: "Hogar",
    price: 9800,
    image: "/images/hogar/taza.jpeg",
    images: [
      "/images/hogar/taza.jpeg",
      "/images/hogar/taza1.jpeg",
      "/images/hogar/taza2.jpeg",
    ],
    description:
     "Taza de cerámica de 350ml con isologo Eidos impreso en alta resolución. Apta para microondas y lavavajillas. Disponible en fondo negro con logo blanco o viceversa.",
    details: {
      material: "Cerámica premium",
      dimensiones: "350 ml",
      colores: "Negro c/logo blanco · Blanco c/logo negro",
    },
    shipping: "Envío protegido con packaging especial anti-golpes.",
    stock: 50,
    featured: true,
  },
  {
    id: 5,
    name: "Set Matero ARG Eidos",
    category: "Hogar",
    price: 24500,
    image: "/images/hogar/materaArg.jpeg",
    images: [
      "/images/hogar/materaArg.jpeg",
      "/images/hogar/materaArg1.jpeg",
      "/images/hogar/materaArg2.jpeg",
    ],
    description:
      "Set completo matero Eidos: mate de calabaza curado + bombilla de acero inoxidable + porta yerbas de madera. Todo con el sello Eidos. El regalo perfecto para materos.",
    details: {
      incluye: "Mate calabaza · Bombilla acero · Porta yerbas",
      presentación: "Caja regalo premium",
      colores: "Negro / madera natural",
    },
    shipping: "Envío con packaging regalo. Llega listo para regalar.",
    stock: 6,
    featured: true,
  },
  {
    id: 6,
    name: "Porta Yerba ARG Eidos",
    category: "Hogar",
    price: 9900,
    image: "/images/hogar/materaTodoPasa.jpeg",
    images: [
      "/images/hogar/materaTodoPasa.jpeg",
    ],
    description:
      "Porta yerbas de cuerina grabado a láser. Capacidad 500g. Mantiene la yerba fresca por más tiempo. Un regalo único y funcional.",
    details: {
      material: "Cuerina",
      capacidad: "500 g",
      colores: "Negro, marrón",
    },
    shipping: "Envío en 24–48hs hábiles. Caja con diseño exclusivo.",
    stock: 15,
    featured: false,
  },
  {
    id: 7,
    name: "Buzo Abel Pintos",
    category: "Indumentaria",
    price: 32000,
    image: "/images/indumentaria/buzoAbel.jpeg",
    images: [
      "/images/indumentaria/buzoAbel.jpeg",
      "/images/indumentaria/buzoAbel1.jpeg",
      "/images/indumentaria/buzoAbel2.jpeg",
      "/images/indumentaria/buzoAbel3.jpeg",
    ],
    description:
      "Buzo con estampa de Abel Pintos. Tela polar por dentro, suave y abrigada. Diseño urbano. Ideal para los días de frío.",
    details: {
      material: "Algodón con interior polar",
      talle: "S / M / L / XL / XXL",
      colores: "Negro",
    },
    shipping: "Envío gratis a todo el país en compras mayores a $30.000",
    stock: 10,
    featured: true,
  },
  {
    id: 8,
    name: "Lonas ARG",
    category: "Accesorios",
    price: 15500,
    image: "/images/accesorios/lona.jpeg",
    images: [
      "/images/accesorios/lona.jpeg",
      "/images/accesorios/lona1.jpeg",
    ],
    description:
      "Lona de Argentina con diseño exclusivo Eidos. Medidas 1.40 x 1.40 m. Ideal para decorar espacios o usar como mantel en eventos al aire libre. Tela resistente con estampado full color.",
    details: {
      material: "Tela polyéster resistente",
      medidas: "1.40 x 1.40 m",
      colores: "Diseño full color",
    },
    shipping: "Envío con packaging regalo. Llega listo para regalar.",
    stock: 6,
    featured: true,
  },
  {
    id: 9,
    name: "Lapiceras personalizadas",
    category: "Accesorios",
    price: 1500,
    image: "/images/accesorios/lapicera3.jpeg",
    images: [
      "/images/accesorios/lapicera3.jpeg",
      "/images/accesorios/lapicera.jpeg",
      "/images/accesorios/lapicera1.jpeg",
      "/images/accesorios/lapicera2.jpeg",
    ],
    description:
      "Lapiceras personalizadas con grabado láser del isologo Eidos. Tinta de larga duración, cuerpo resistente y escritura fluida. Ideales para regalar a clientes o como merchandising institucional.",
    details: {
      presentación: "Caja regalo premium",
      colores: "Negro / madera natural",
    },
    shipping: "Envío con packaging regalo. Llega listo para regalar.",
    stock: 100,
    featured: true,
  },
];

export const getProductById = (id) =>
  products.find((p) => p.id === parseInt(id));

export const getProductsByCategory = (category) =>
  category === "Todos"
    ? products
    : products.filter((p) => p.category === category);
