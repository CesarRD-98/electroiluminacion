// src/data/products.ts

export type Product = {
    id: string;
    name: string;
    categoryId: string;
    description: string;
    unit: string;
    price: number;
    imageUrl: string;
};

export const products: Product[] = [
    // -------------------------
    // ILUMINACIÓN LED
    // -------------------------
    {
        id: "bombillo-led-9w-a60",
        name: "Bombillo LED 9W A60 luz blanca",
        categoryId: "iluminacion",
        description:
            "Bombillo LED de 9W tipo A60, luz blanca fría ideal para iluminación general en hogares y oficinas.",
        unit: "pieza",
        price: 110.0,
        imageUrl: "/images/products/bombillo-led-9w-a60.jpg",
    },
    {
        id: "foco-led-par38-18w",
        name: "Foco LED PAR38 18W exterior",
        categoryId: "iluminacion",
        description:
            "Foco LED PAR38 de 18W resistente a exteriores, ideal para jardines, fachadas y áreas abiertas.",
        unit: "pieza",
        price: 240.0,
        imageUrl: "/images/products/foco-led-par38-18w.jpg",
    },
    {
        id: "panel-led-embebido-18w",
        name: "Panel LED embebido 18W redondo",
        categoryId: "iluminacion",
        description:
            "Panel LED de 18W redondo para montaje embebido en cielos falsos, ideal para oficinas y hogares.",
        unit: "pieza",
        price: 295.0,
        imageUrl: "/images/products/panel-led-embebido-18w.webp",
    },
    {
        id: "reflector-led-50w",
        name: "Reflector LED 50W exterior IP65",
        categoryId: "iluminacion",
        description:
            "Reflector LED de 50W con protección IP65, ideal para exteriores, patios y proyectos de iluminación.",
        unit: "pieza",
        price: 520.0,
        imageUrl: "/images/products/reflector-led-50w.jpg",
    },

    // -------------------------
    // ENERGÍA FOTOVOLTAICA
    // -------------------------
    {
        id: "panel-solar-300w",
        name: "Panel solar 300W 30VDC",
        categoryId: "fotovoltaica",
        description:
            "Panel solar monocristalino de 300W para sistemas fotovoltaicos residenciales e industriales.",
        unit: "pieza",
        price: 2900.0,
        imageUrl: "/images/products/panel-solar-300w.webp",
    },
    {
        id: "kit-solar-basico-300w",
        name: "Kit solar básico 300W",
        categoryId: "fotovoltaica",
        description:
            "Kit solar básico de 300W que incluye panel, controlador y accesorios esenciales.",
        unit: "kit",
        price: 8500.0,
        imageUrl: "/images/products/kit-solar-basico-300w.png",
    },
    {
        id: "inversor-onda-modificada-450w",
        name: "Inversor 450W onda modificada 12V a 110V",
        categoryId: "fotovoltaica",
        description:
            "Inversor de onda modificada de 450W ideal para sistemas solares pequeños y uso doméstico.",
        unit: "pieza",
        price: 1300.0,
        imageUrl: "/images/products/inversor-onda-modificada-450w.jpg",
    },

    // -------------------------
    // MATERIAL ELÉCTRICO
    // -------------------------
    {
        id: "cable-thhn-12awg-negro",
        name: "Cable THHN #12 AWG negro (por metro)",
        categoryId: "material-electrico",
        description:
            "Cable THHN calibre 12 AWG, ideal para instalaciones eléctricas residenciales e industriales.",
        unit: "metro",
        price: 7.0,
        imageUrl: "/images/products/cable-thhn-12awg-negro.jpg",
    },
    {
        id: "breaker-unipolar-20a",
        name: "Breaker termomagnético 1P 20A",
        categoryId: "material-electrico",
        description:
            "Breaker unipolar de 20 amperios para protección de circuitos eléctricos residenciales.",
        unit: "pieza",
        price: 225.0,
        imageUrl: "/images/products/breaker-unipolar-20a.jpg",
    },
    {
        id: "tomacorriente-duplex-15a",
        name: "Tomacorriente dúplex polarizado 15A",
        categoryId: "material-electrico",
        description:
            "Tomacorriente dúplex polarizado de 15 amperios, ideal para instalaciones residenciales.",
        unit: "pieza",
        price: 70.0,
        imageUrl: "/images/products/tomacorriente-duplex-15a.webp",
    },
    {
        id: "interruptor-sencillo-15a",
        name: "Interruptor sencillo 15A blanco",
        categoryId: "material-electrico",
        description:
            "Interruptor sencillo de 15 amperios para control de iluminación en interiores.",
        unit: "pieza",
        price: 45.0,
        imageUrl: "/images/products/interruptor-sencillo-15a.jpg",
    },

    // -------------------------
    // FERRETERÍA Y CONSTRUCCIÓN
    // -------------------------
    {
        id: "tubo-pvc-electrico-1-2",
        name: 'Tubo PVC eléctrico ½" pared delgada (3m)',
        categoryId: "ferreteria-construccion",
        description:
            "Tubo PVC eléctrico de ½ pulgada para instalaciones eléctricas embutidas o superficiales.",
        unit: "tira",
        price: 75.0,
        imageUrl: "/images/products/tubo-pvc-electrico-1-2.jpg",
    },
    {
        id: "caja-paso-4x4",
        name: 'Caja de paso cuadrada 4"x4"',
        categoryId: "ferreteria-construccion",
        description:
            "Caja de paso metálica cuadrada de 4x4 pulgadas para instalaciones eléctricas.",
        unit: "pieza",
        price: 50.0,
        imageUrl: "/images/products/caja-paso-4x4.webp",
    },
    {
        id: "canaleta-plastica-2x2",
        name: 'Canaleta plástica 2"x2" adhesiva (2m)',
        categoryId: "ferreteria-construccion",
        description:
            "Canaleta plástica adhesiva para protección y organización de cables eléctricos.",
        unit: "tira",
        price: 140.0,
        imageUrl: "/images/products/canaleta-plastica-2x2.jpg",
    },
] as const;
