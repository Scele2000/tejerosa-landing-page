import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

// Datos de ejemplo para productos (a expandir después)
const initialProducts = [
  {
    id: '1',
    name: 'Gorro de Lana Invernal',
    price: 15.99,
    imageUrl: './images/stock/gorro_lana_01.jpg',
    description: 'Cálido gorro de lana tejido a mano, perfecto para los días fríos de invierno. Disponible en varios colores vibrantes y pasteles.',
    category: 'invierno',
    type: 'ropa',
    tags: ['lana', 'tejido', 'invierno', 'gorro', 'artesanal'],
    dimensions: 'Talla única adulto',
    stock: 12,
  },
  {
    id: '2',
    name: 'Colgante Decorativo "Sueños del Bosque"',
    price: 22.50,
    imageUrl: './images/stock/colgante_decorativo_01.jpg',
    description: 'Hermoso colgante hecho con maderas recicladas, hojas secas y resina epoxi, pintado a mano con motivos naturales. Ideal para un toque bohemio.',
    category: 'decoracion',
    type: 'decoracion',
    tags: ['reciclado', 'pintura', 'decoracion', 'colgante', 'naturaleza', 'boho'],
    dimensions: '18cm diámetro, 40cm largo total',
    stock: 7,
  },
  {
    id: '3',
    name: 'Bolso de Jean Bordado "Flor Silvestre"',
    price: 35.00,
    imageUrl: './images/stock/bolso_jean_01.jpg',
    description: 'Bolso de jean reciclado con intrincados bordados florales hechos a mano con hilos de seda. Perfecto para un look casual y artesanal único.',
    category: 'verano',
    type: 'accesorios',
    tags: ['jean', 'bordado', 'bolso', 'reciclado', 'accesorio', 'floral', 'hecho a mano'],
    dimensions: '30cm x 25cm x 10cm',
    stock: 5,
  },
  {
    id: '4',
    name: 'Bufanda de Seda Pintada a Mano "Aurora"',
    price: 45.00,
    imageUrl: './images/stock/bufanda_seda_01.jpg',
    description: 'Delicada bufanda de seda natural pintada a mano con técnica de acuarela, inspirada en los colores de la aurora boreal. Pieza única.',
    category: 'primavera',
    type: 'accesorios',
    tags: ['seda', 'pintado a mano', 'acuarela', 'bufanda', 'accesorio', 'unico'],
    dimensions: '150cm x 40cm',
    stock: 3,
  },
  {
    id: '5',
    name: 'Set de Posavasos Cerámicos "Mandalas"',
    price: 18.75,
    imageUrl: './images/stock/posavasos_ceramica_01.jpg',
    description: 'Juego de 4 posavasos de cerámica con diseños de mandalas pintados a mano y horneados para durabilidad. Base de corcho antideslizante.',
    category: 'hogar',
    type: 'decoracion',
    tags: ['ceramica', 'mandalas', 'pintado a mano', 'posavasos', 'hogar'],
    dimensions: '10cm x 10cm cada uno',
    stock: 15,
  },
  {
    id: '6',
    name: 'Amigurumi Zorrito "Félix"',
    price: 28.90,
    imageUrl: './images/stock/amigurumi_zorro_01.jpg',
    description: 'Adorable zorrito tejido a crochet (amigurumi) con hilo de algodón hipoalergénico y ojos de seguridad. Perfecto para regalar ternura.',
    category: 'infantil',
    type: 'juguetes',
    tags: ['amigurumi', 'crochet', 'zorro', 'juguete', 'infantil', 'algodon'],
    dimensions: '20cm alto',
    stock: 8,
  },
  {
    id: '7',
    name: 'Cuadro Bordado "Paisaje Lunar"',
    price: 55.00,
    imageUrl: './images/stock/cuadro_bordado_luna_01.jpg',
    description: 'Cuadro con bastidor de madera representando un paisaje lunar bordado a mano con diferentes texturas y abalorios. Pieza artística.',
    category: 'decoracion',
    type: 'arte',
    tags: ['bordado', 'cuadro', 'luna', 'paisaje', 'texturas', 'arte textil'],
    dimensions: '25cm diámetro bastidor',
    stock: 2,
  },
  {
    id: '8',
    name: 'Manta de Apego Bebé "Estrellitas"',
    price: 20.50,
    imageUrl: './images/stock/manta_apego_bebe_01.jpg',
    description: 'Suave manta de apego para bebé tejida en punto bobo con algodón orgánico color rosa pastel y aplique de estrella.',
    category: 'infantil',
    type: 'ropa',
    tags: ['bebe', 'manta', 'apego', 'algodon organico', 'tejido', 'rosa pastel'],
    dimensions: '35cm x 35cm',
    stock: 10,
  },
  {
    id: '9',
    name: 'Monedero de Cuero Reciclado "Patchwork"',
    price: 19.99,
    imageUrl: './images/stock/monedero_cuero_01.jpg',
    description: 'Original monedero hecho con retales de cuero reciclado en técnica patchwork, con cierre de cremallera y forro interior.',
    category: 'accesorios',
    type: 'accesorios',
    tags: ['cuero', 'reciclado', 'patchwork', 'monedero', 'artesanal'],
    dimensions: '12cm x 9cm',
    stock: 6,
  },
  {
    id: '10',
    name: 'Camino de Mesa Macramé "Boho Chic"',
    price: 38.00,
    imageUrl: './images/stock/camino_mesa_macrame_01.jpg',
    description: 'Elegante camino de mesa tejido en macramé con hilo de algodón crudo, perfecto para dar un toque boho chic a tu comedor.',
    category: 'hogar',
    type: 'decoracion',
    tags: ['macrame', 'algodon', 'boho', 'camino de mesa', 'decoracion'],
    dimensions: '120cm x 30cm (sin flecos)',
    stock: 4,
  },
  {
    id: '11',
    name: 'Chaqueta Kimono de Algodón Estampado',
    price: 65.00,
    imageUrl: './images/stock/chaqueta_kimono_01.jpg',
    description: 'Chaqueta tipo kimono, ligera y versátil, confeccionada en algodón suave con estampado floral en tonos azules y rosas.',
    category: 'primavera',
    type: 'ropa',
    tags: ['kimono', 'algodon', 'estampado floral', 'chaqueta', 'ropa'],
    dimensions: 'Talla única (amplia)',
    stock: 7,
  },
  {
    id: '12',
    name: 'Set de Velas Aromáticas de Soja "Relax"',
    price: 26.50,
    imageUrl: './images/stock/velas_soja_01.jpg',
    description: 'Conjunto de tres velas hechas con cera de soja y aceites esenciales (lavanda, jazmín, sándalo) en recipientes de vidrio reutilizables.',
    category: 'hogar',
    type: 'decoracion',
    tags: ['velas', 'cera de soja', 'aromaterapia', 'lavanda', 'jasmin', 'sandalo'],
    dimensions: '7cm alto cada una',
    stock: 9,
  },
  {
    id: '13',
    name: 'Turbante de Lana Trenzada "Nórdico"',
    price: 17.50,
    imageUrl: './images/stock/turbante_lana_01.jpg',
    description: 'Cálido y estiloso turbante tejido a mano con lana merino, diseño de trenzas. Ideal para el otoño e invierno.',
    category: 'invierno',
    type: 'accesorios',
    tags: ['lana merino', 'turbante', 'tejido', 'invierno', 'accesorio'],
    dimensions: 'Adulto, adaptable',
    stock: 11,
  },
  {
    id: '14',
    name: 'Macetas de Cemento Pintadas "Geométrico"',
    price: 14.00,
    imageUrl: './images/stock/macetas_cemento_01.jpg',
    description: 'Par de macetas pequeñas de cemento con diseños geométricos pintados a mano en tonos pastel. Perfectas para suculentas.',
    category: 'jardin',
    type: 'decoracion',
    tags: ['cemento', 'macetas', 'pintado a mano', 'geometrico', 'suculentas', 'pastel'],
    dimensions: '8cm alto x 9cm diámetro',
    stock: 18,
  },
  {
    id: '15',
    name: 'Collar de Semillas y Piedras Naturales',
    price: 32.00,
    imageUrl: './images/stock/collar_semillas_piedras_01.jpg',
    description: 'Collar largo elaborado con semillas de asaí, tagua y piedras semipreciosas (amatista, cuarzo rosa). Cierre ajustable.',
    category: 'accesorios',
    type: 'joyeria',
    tags: ['semillas', 'piedras naturales', 'collar', 'joyeria artesanal', 'amatista', 'cuarzo rosa'],
    dimensions: 'Largo aprox. 80cm',
    stock: 6,
  },
  {
    id: '16',
    name: 'Taza de Cerámica Esmaltada "Olas del Mar"',
    price: 21.00,
    imageUrl: './images/stock/taza_ceramica_olas_01.jpg',
    description: 'Taza de cerámica hecha y esmaltada a mano con un diseño que evoca las olas del mar en tonos azules y blancos. Apta para microondas.',
    category: 'hogar',
    type: 'cocina',
    tags: ['ceramica', 'taza', 'hecho a mano', 'esmaltado', 'mar', 'azul'],
    dimensions: '350ml capacidad',
    stock: 9,
  },
  {
    id: '17',
    name: 'Sombrero de Paja "Playero Chic"',
    price: 29.90,
    imageUrl: './images/stock/sombrero_paja_01.jpg',
    description: 'Sombrero de paja toquilla con cinta decorativa bordada a mano. Ideal para protegerse del sol con estilo en verano.',
    category: 'verano',
    type: 'accesorios',
    tags: ['paja toquilla', 'sombrero', 'bordado', 'playa', 'verano', 'accesorio'],
    dimensions: 'Ala ancha, talla M',
    stock: 5,
  },
  {
    id: '18',
    name: 'Libreta Artesanal con Tapas de Tela',
    price: 16.50,
    imageUrl: './images/stock/libreta_tela_01.jpg',
    description: 'Libreta encuadernada artesanalmente con tapas forradas en tela de algodón estampada y papel reciclado en su interior.',
    category: 'papeleria',
    type: 'accesorios',
    tags: ['libreta', 'artesanal', 'tela', 'papel reciclado', 'encuadernacion'],
    dimensions: 'A5, 80 hojas',
    stock: 13,
  },
  {
    id: '19',
    name: 'Móvil Decorativo para Bebé "Nubes y Luna"',
    price: 33.00,
    imageUrl: './images/stock/movil_bebe_nubes_01.jpg',
    description: 'Dulce móvil para cuna con figuras de nubes, estrellas y luna hechas en fieltro y cosidas a mano. Estructura de madera.',
    category: 'infantil',
    type: 'decoracion',
    tags: ['movil cuna', 'bebe', 'fieltro', 'nubes', 'luna', 'hecho a mano', 'decoracion infantil'],
    dimensions: '30cm diámetro, 50cm alto',
    stock: 4,
  },
  {
    id: '20',
    name: 'Delantal de Cocina con Bolsillo Bordado',
    price: 24.75,
    imageUrl: './images/stock/delantal_cocina_01.jpg',
    description: 'Práctico delantal de cocina en loneta resistente con amplio bolsillo frontal bordado con motivos culinarios.',
    category: 'hogar',
    type: 'cocina',
    tags: ['delantal', 'cocina', 'bordado', 'loneta', 'regalo'],
    dimensions: 'Talla única adulto',
    stock: 8,
  },
  {
    id: '21',
    name: 'Guirnalda de Luces LED con Flores de Papel',
    price: 19.00,
    imageUrl: './images/stock/guirnalda_luces_flores_01.jpg',
    description: 'Guirnalda de luces LED cálidas decorada con delicadas flores de papel hechas a mano en tonos rosa y blanco. Funciona con pilas.',
    category: 'decoracion',
    type: 'iluminacion',
    tags: ['guirnalda luces', 'led', 'flores de papel', 'decoracion', 'rosa', 'hecho a mano'],
    dimensions: '2 metros, 20 luces',
    stock: 10,
  },
  {
    id: '22',
    name: 'Cesta de Mimbre Multiusos "Campestre"',
    price: 30.50,
    imageUrl: './images/stock/cesta_mimbre_01.jpg',
    description: 'Cesta de mimbre tejida a mano con forro de tela de algodón estampado. Ideal para picnic, almacenaje o decoración.',
    category: 'hogar',
    type: 'almacenaje',
    tags: ['mimbre', 'cesta', 'tejido a mano', 'almacenaje', 'picnic', 'campestre'],
    dimensions: '35cm largo x 25cm ancho x 18cm alto',
    stock: 6,
  },
  {
    id: '23',
    name: 'Pendientes de Arcilla Polimérica "Terrazo"',
    price: 15.00,
    imageUrl: './images/stock/pendientes_arcilla_terrazo_01.jpg',
    description: 'Modernos pendientes hechos a mano con arcilla polimérica imitando efecto terrazo en tonos pastel. Enganche de acero hipoalergénico.',
    category: 'accesorios',
    type: 'joyeria',
    tags: ['arcilla polimerica', 'pendientes', 'terrazo', 'pastel', 'joyeria artesanal', 'moderno'],
    dimensions: '3cm largo',
    stock: 14,
  },
  {
    id: '24',
    name: 'Funda de Cojín Tejida "Zigzag"',
    price: 27.00,
    imageUrl: './images/stock/funda_cojin_zigzag_01.jpg',
    description: 'Funda de cojín tejida en telar manual con diseño zigzag en tonos crudo y azul petróleo. Cierre con botones de madera.',
    category: 'hogar',
    type: 'textil',
    tags: ['funda cojin', 'tejido telar', 'zigzag', 'textil hogar', 'azul petroleo', 'artesanal'],
    dimensions: '45cm x 45cm',
    stock: 5,
  },
  {
    id: '25',
    name: 'Llavero Macramé con Piedra Energética',
    price: 12.50,
    imageUrl: './images/stock/llavero_macrame_piedra_01.jpg',
    description: 'Llavero tejido en macramé con hilo de algodón y una pequeña piedra energética (cuarzo, ágata o similar, varía por pieza).',
    category: 'accesorios',
    type: 'accesorios',
    tags: ['macrame', 'llavero', 'piedra energetica', 'algodon', 'regalo', 'artesanal'],
    dimensions: '15cm largo total aprox.',
    stock: 20,
  },
  {
    id: '26',
    name: 'Botella de Vidrio Decorada "Pintura Floral"',
    price: 23.00,
    imageUrl: './images/stock/botella_vidrio_floral_01.jpg',
    description: 'Botella de vidrio reciclada y decorada con técnica de pintura floral a mano. Ideal como florero o elemento decorativo.',
    category: 'decoracion',
    type: 'arte',
    tags: ['vidrio reciclado', 'pintura floral', 'botella decorada', 'florero', 'hecho a mano'],
    dimensions: '25cm alto',
    stock: 7,
  },
  {
    id: '27',
    name: 'Juego de Té Individual de Cerámica',
    price: 42.00,
    imageUrl: './images/stock/juego_te_ceramica_01.jpg',
    description: 'Encantador juego de té individual (tetera pequeña y taza con plato) hecho en cerámica y pintado a mano con motivos de hojas otoñales.',
    category: 'hogar',
    type: 'cocina',
    tags: ['ceramica', 'juego de te', 'pintado a mano', 'otoño', 'cocina artesanal'],
    dimensions: 'Tetera 250ml, Taza 150ml',
    stock: 3,
  },
  {
    id: '28',
    name: 'Diadema Bordada con Perlas y Cristales',
    price: 20.00,
    imageUrl: './images/stock/diadema_bordada_perlas_01.jpg',
    description: 'Elegante diadema forrada en satén y bordada a mano con perlas de río y cristales Swarovski. Ideal para ocasiones especiales.',
    category: 'accesorios',
    type: 'joyeria',
    tags: ['diadema', 'bordado', 'perlas', 'cristales', 'accesorio cabello', 'elegante'],
    dimensions: 'Talla única',
    stock: 9,
  },
  {
    id: '29',
    name: 'Tapiz de Lana Tejido en Telar "Montañas"',
    price: 75.00,
    imageUrl: './images/stock/tapiz_lana_montanas_01.jpg',
    description: 'Impresionante tapiz tejido en telar con lanas naturales de diversos grosores, representando un paisaje montañoso abstracto. Pieza única.',
    category: 'decoracion',
    type: 'arte',
    tags: ['tapiz', 'lana', 'tejido telar', 'montañas', 'arte textil', 'decoracion pared', 'unico'],
    dimensions: '60cm ancho x 80cm alto (con flecos)',
    stock: 1,
  },
  {
    id: '30',
    name: 'Kit de Bordado para Principiantes "Flores Silvestres"',
    price: 25.00,
    imageUrl: './images/stock/kit_bordado_flores_01.jpg',
    description: 'Completo kit para iniciarse en el bordado. Incluye bastidor, tela con diseño impreso, hilos de colores, aguja e instrucciones.',
    category: 'manualidades',
    type: 'kits',
    tags: ['kit bordado', 'principiantes', 'flores silvestres', 'manualidades', 'diy'],
    dimensions: 'Bastidor 15cm',
    stock: 15,
  },
  {
    id: '31',
    name: 'Caja de Madera Pintada a Mano "Secretos"',
    price: 18.50,
    imageUrl: './images/stock/caja_madera_secretos_01.jpg',
    description: 'Pequeña caja de madera con tapa, pintada a mano con motivos florales y detalles dorados. Ideal para guardar pequeños tesoros.',
    category: 'hogar',
    type: 'almacenaje',
    tags: ['caja madera', 'pintado a mano', 'floral', 'almacenaje', 'decorativo'],
    dimensions: '15cm x 10cm x 7cm',
    stock: 10,
  },
  {
    id: '32',
    name: 'Chaleco Tejido Dos Agujas "Otoñal"',
    price: 58.00,
    imageUrl: './images/stock/chaleco_tejido_otonal_01.jpg',
    description: 'Chaleco largo sin mangas tejido a dos agujas con lana suave en tonos tierra y ocre. Diseño calado y elegante.',
    category: 'otoño',
    type: 'ropa',
    tags: ['chaleco', 'tejido dos agujas', 'lana', 'otoño', 'ropa mujer', 'artesanal'],
    dimensions: 'Talla M/L',
    stock: 3,
  },
  {
    id: '33',
    name: 'Atrapasueños "Espiral Rosa"',
    price: 26.00,
    imageUrl: './images/stock/atrapasuenos_espiral_rosa_01.jpg',
    description: 'Atrapasueños hecho a mano con aro de sauce, tejido en espiral con hilo rosa pastel, plumas y cuentas de madera y cristal.',
    category: 'decoracion',
    type: 'decoracion',
    tags: ['atrapasueños', 'rosa pastel', 'plumas', 'hecho a mano', 'boho', 'espiritual'],
    dimensions: 'Aro 20cm, largo total 60cm',
    stock: 7,
  }
  // ... más productos de ejemplo
];

export const products = writable(initialProducts);
export const isAdmin = writable(false); // Para simular el login de admin
export const currentView = writable('catalog'); // catalog, productDetail, admin, contact
export const selectedProduct = writable(null); // Para la vista de detalle del producto

// Filtros
export const searchTerm = writable('');
export const selectedCategories = writable([]); // e.g., ['invierno', 'verano']
export const selectedTypes = writable([]); // e.g., ['ropa', 'accesorios']
export const priceRange = writable({ min: 0, max: 1000 }); // Ejemplo, se puede ajustar 

// --- Carrito de Compras ---
export const cartItems = writable([]); // Array de objetos: { id, name, price, imageUrl, quantity }

// Funciones para manipular el carrito
export function addToCart(productToAdd, quantity = 1) {
  cartItems.update(items => {
    const existingItemIndex = items.findIndex(item => item.id === productToAdd.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += quantity;
      // Asegurarse de no tener cantidad negativa si quantity es negativo (aunque no debería pasar con lógica normal)
      if (updatedItems[existingItemIndex].quantity <= 0) {
        return updatedItems.filter(item => item.id !== productToAdd.id);
      }      
      return updatedItems;
    } else {
      if (quantity > 0) {
        return [...items, { ...productToAdd, quantity }];
      }
    }
    return items; // Si quantity es 0 o negativo y el item no existe, no hacer nada
  });
}

export function removeFromCart(productId) {
  cartItems.update(items => items.filter(item => item.id !== productId));
}

export function updateItemQuantity(productId, newQuantity) {
  cartItems.update(items => {
    if (newQuantity <= 0) {
      return items.filter(item => item.id !== productId);
    }
    return items.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
  });
}

export function clearCart() {
  cartItems.set([]);
}

// Store derivado para el total del carrito
export const cartTotal = derived(cartItems, ($cartItems) => {
  return $cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

export const cartItemCount = derived(cartItems, ($cartItems) => {
  return $cartItems.reduce((sum, item) => sum + item.quantity, 0);
}); 