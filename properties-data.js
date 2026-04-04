// ──────────────────────────────────────────────────────────────────────────────
// CCH PROPIEDADES — Fuente única de datos
// Para agregar una propiedad nueva: añadir un objeto al array PROPS_DATA.
// Todos los contadores, filtros y mapa se actualizan automáticamente.
// ──────────────────────────────────────────────────────────────────────────────
const PROPS_DATA = [
  {
    name: "Casa Oficina Pasos Metro Escuela Militar",
    op: "Venta", tipo: "Oficina", ciudad: "Santiago",
    loc: "Asturias 178, Las Condes", region: "Región Metropolitana",
    priceUf: 15520, price: "UF 15.520", rooms: 6, area: "170",
    lat: -33.4169, lng: -70.5775,
    url: "https://www.portalinmobiliario.com/MLC-1592676449-casa-oficina-pasos-metro-escuela-milita5r-_JM"
  },
  {
    name: "Remodelado Camino Real Los Trapenses",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Cam. Real, Lo Barnechea", region: "Región Metropolitana",
    priceUf: 23990, price: "UF 23.990", rooms: 4, area: "240",
    lat: -33.3502, lng: -70.5398,
    url: "https://www.portalinmobiliario.com/MLC-1593680953-remodelado-camino-real-los-trapenses-_JM"
  },
  {
    name: "Oficina Nueva Edificio Transoceánica",
    op: "Venta", tipo: "Oficina", ciudad: "Santiago",
    loc: "Santa María de Manquehue, Vitacura", region: "Región Metropolitana",
    priceUf: 18000, price: "UF 18.000+IVA", rooms: 0, area: "206",
    lat: -33.385, lng: -70.5613,
    url: "https://www.portalinmobiliario.com/MLC-1627651493-oficina-nueva-edificio-transoceanica-_JM"
  },
  {
    name: "Increíble Casa Vista Club de Golf del Polo",
    op: "Venta", tipo: "Casa", ciudad: "Santiago",
    loc: "Cam. Bosques del Polo, Vitacura", region: "Región Metropolitana",
    priceUf: 92000, price: "UF 92.000", rooms: 4, area: "2.500",
    lat: -33.378, lng: -70.552,
    url: "https://www.portalinmobiliario.com/MLC-1641589381-increible-casa-santa-maria-con-vista-club-de-golf-del-polo-_JM"
  },
  {
    name: "Gran Departamento Santa María Manquehue",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Parque Antonio Rabat 6390, Vitacura", region: "Región Metropolitana",
    priceUf: 29000, price: "UF 29.000", rooms: 3, area: "266",
    lat: -33.3795, lng: -70.554,
    url: "https://www.portalinmobiliario.com/MLC-1645801945-gran-departamento-santa-maria-manquehue-_JM"
  },
  {
    name: "Departamento Hamlet Metro Escuela Militar",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Hamlet, Las Condes", region: "Región Metropolitana",
    priceUf: 6900, price: "UF 6.900", rooms: 2, area: "64",
    lat: -33.418, lng: -70.579,
    url: "https://www.portalinmobiliario.com/MLC-1661956889-departamento-hamblet-a-1-cuadra-metro-escuela-militar-_JM"
  },
  {
    name: "Casa Pueblo Cachagua Impecable",
    op: "Venta", tipo: "Casa", ciudad: "Zapallar",
    loc: "Del Cerrillo, Cachagua, Zapallar", region: "Valparaíso",
    priceUf: 18500, price: "UF 18.500", rooms: 4, area: "217",
    lat: -32.558, lng: -71.456,
    url: "https://www.portalinmobiliario.com/MLC-1683487135-casa-pueblo-cachagua-impecable-_JM"
  },
  {
    name: "Oportunidad Casa Comercial Metro Manquehue",
    op: "Venta", tipo: "Oficina", ciudad: "Santiago",
    loc: "Rosario Sur 310, Las Condes", region: "Región Metropolitana",
    priceUf: 12800, price: "UF 12.800", rooms: 4, area: "471",
    lat: -33.405, lng: -70.57,
    url: "https://www.portalinmobiliario.com/MLC-1723916145-oportunidad-casa-comercial-metro-manquehue-_JM"
  },
  {
    name: "Townhouse Camino Real Los Trapenses",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Cam. Real 3663, Lo Barnechea", region: "Región Metropolitana",
    priceUf: 24000, price: "UF 24.000", rooms: 4, area: "275",
    lat: -33.3498, lng: -70.5401,
    url: "https://www.portalinmobiliario.com/MLC-1741775893-townhouse-camino-real-los-trapenses-_JM"
  },
  {
    name: "Casa Mediterránea Los Trapenses Linda Vista",
    op: "Venta", tipo: "Casa", ciudad: "Santiago",
    loc: "Cam. Punta de Águila 4371, Lo Barnechea", region: "Región Metropolitana",
    priceUf: 28800, price: "UF 28.800", rooms: 5, area: "961",
    lat: -33.352, lng: -70.542,
    url: "https://www.portalinmobiliario.com/MLC-1741917939-casa-mediterranea-los-trapenses-linda-vista-_JM"
  },
  {
    name: "Linda Casa Estilo Inglés en Condominio",
    op: "Venta", tipo: "Casa", ciudad: "Santiago",
    loc: "El Magnolio 1519, Vitacura", region: "Región Metropolitana",
    priceUf: 17900, price: "UF 17.900", rooms: 3, area: "310",
    lat: -33.392, lng: -70.578,
    url: "https://www.portalinmobiliario.com/MLC-1769943977-linda-casa-estilo-ingles-en-condomio-_JM"
  },
  {
    name: "Departamento Bellavista Providencia",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Av. Santa María 0346, Providencia", region: "Región Metropolitana",
    priceUf: 3900, price: "UF 3.900", rooms: 1, area: "52",
    lat: -33.427, lng: -70.631,
    url: "https://www.portalinmobiliario.com/MLC-1857227891-departamento-en-venta-en-bellavista-providencia-_JM"
  },
  {
    name: "Dúplex Remodelado Super Moderno y Luminoso",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Costanera Sur, Vitacura", region: "Región Metropolitana",
    priceUf: 12000, price: "UF 12.000", rooms: 3, area: "124",
    lat: -33.405, lng: -70.598,
    url: "https://www.portalinmobiliario.com/MLC-1872742263-duplex-remodelado-super-moderno-y-luminos-_JM"
  },
  {
    name: "Moderno Departamento Mariposa Lyon",
    op: "Arriendo", tipo: "Depto", ciudad: "Santiago",
    loc: "Concordia 2245, Providencia", region: "Región Metropolitana",
    priceUf: 33, price: "UF 33 /mes", rooms: 2, area: "98",
    lat: -33.429, lng: -70.615,
    url: "https://www.portalinmobiliario.com/MLC-1910927117-moderno-departamento-mariposa-lyon-_JM"
  },
  {
    name: "Buen Departamento Carmen Silva Providencia",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Carmen Sylva 2400, Providencia", region: "Región Metropolitana",
    priceUf: 9400, price: "UF 9.400", rooms: 4, area: "167",
    lat: -33.431, lng: -70.608,
    url: "https://www.portalinmobiliario.com/MLC-2889223556-buen-departamento-carmen-silva-providencia-_JM"
  },
  {
    name: "Local Las Tranqueras Gran Terraza",
    op: "Arriendo", tipo: "Local", ciudad: "Santiago",
    loc: "Las Tranqueras 1594, Vitacura", region: "Región Metropolitana",
    priceUf: 40, price: "UF 40 /mes", rooms: 0, area: "86",
    lat: -33.398, lng: -70.582,
    url: "https://www.portalinmobiliario.com/MLC-3114604620-local-las-tranqueras-gran-terraza-y-estacionamientos-_JM"
  },
  {
    name: "Oficinas y Talleres Nueva Costanera",
    op: "Arriendo", tipo: "Oficina", ciudad: "Santiago",
    loc: "Juan B. Pastene 2965, Vitacura", region: "Región Metropolitana",
    priceUf: 14, price: "UF 14 /mes", rooms: 0, area: "20",
    lat: -33.401, lng: -70.595,
    url: "https://www.portalinmobiliario.com/MLC-3375816606-se-arriendan-oficinas-y-talleres-nueva-costanera-_JM"
  },
  {
    name: "Casa Cachagua a 800 Metros Playa Grande",
    op: "Arriendo Temporal", tipo: "Casa", ciudad: "Zapallar",
    loc: "Cachagua, Zapallar", region: "Valparaíso",
    priceUf: 0, price: "$1.600.000 /mes", rooms: 4, area: "500",
    lat: -32.56, lng: -71.458,
    url: "https://www.portalinmobiliario.com/MLC-3436911148-casa-cachagua-a-800-metros-de-la-playa-grande-_JM"
  },
  {
    name: "Elegante Depto Vista Club de Golf Los Leones",
    op: "Venta", tipo: "Depto", ciudad: "Santiago",
    loc: "Paul Claudel 1125, Vitacura", region: "Región Metropolitana",
    priceUf: 18900, price: "UF 18.900", rooms: 3, area: "330",
    lat: -33.402, lng: -70.59,
    url: "https://www.portalinmobiliario.com/MLC-3437307930-elegante-depto-vista-despejada-club-de-golf-los-leones-_JM"
  },
  {
    name: "Espectacular Terreno con Anteproyecto",
    op: "Venta", tipo: "Terreno", ciudad: "Santiago",
    loc: "Álvaro Casanova 4812, Peñalolén", region: "Región Metropolitana",
    priceUf: 120000, price: "UF 120.000", rooms: 0, area: "9.896",
    lat: -33.485, lng: -70.532,
    url: "https://www.portalinmobiliario.com/MLC-2926526120-espectacular-terreno-con-ante-proyecto-de-arquitectura-_JM"
  }
];
