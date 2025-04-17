import { writable } from 'svelte/store';

export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  temporada: string;
  tipo: string;
  destacado?: boolean;
}

// Productos de ejemplo
const initialProducts: Product[] = [
  {
    id: '1',
    nombre: 'Cesto tejido a mano',
    descripcion: 'Cesto tejido a mano con materiales naturales, ideal para decoración del hogar.',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=400',
    temporada: 'Todo el año',
    tipo: 'Decoración',
    destacado: true
  },
  {
    id: '2',
    nombre: 'Atrapasueños floral',
    descripcion: 'Atrapasueños decorado con flores secas y cintas en tonos pastel.',
    precio: 3200,
    imagen: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=400',
    temporada: 'Primavera',
    tipo: 'Decoración'
  },
  {
    id: '3',
    nombre: 'Kit de bordado para principiantes',
    descripcion: 'Kit completo para iniciarse en el arte del bordado, incluye bastidor, hilos y tela.',
    precio: 2800,
    imagen: 'https://images.unsplash.com/photo-1605085278190-6ebdde2cfca7?q=80&w=400',
    temporada: 'Todo el año',
    tipo: 'Manualidad'
  },
  {
    id: '4',
    nombre: 'Cuadro pintado a mano',
    descripcion: 'Cuadro abstracto pintado a mano con técnica acrílica sobre lienzo.',
    precio: 6500,
    imagen: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=400',
    temporada: 'Todo el año',
    tipo: 'Arte',
    destacado: true
  },
  {
    id: '5',
    nombre: 'Macetero de macramé',
    descripcion: 'Macetero colgante hecho a mano con técnica de macramé, ideal para plantas.',
    precio: 3800,
    imagen: 'https://images.unsplash.com/photo-1614249376905-744873471982?q=80&w=400',
    temporada: 'Verano',
    tipo: 'Decoración'
  },
  {
    id: '6',
    nombre: 'Velas aromáticas artesanales',
    descripcion: 'Set de 3 velas aromáticas de soja, con aromas de lavanda, vainilla y canela.',
    precio: 2500,
    imagen: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=400',
    temporada: 'Invierno',
    tipo: 'Decoración'
  },
  {
    id: '7',
    nombre: 'Guirnalda de luces decorativas',
    descripcion: 'Guirnalda de luces LED con adornos tejidos a mano para decoración del hogar.',
    precio: 4200,
    imagen: 'https://images.unsplash.com/photo-1606173752991-3471e49b2e64?q=80&w=400',
    temporada: 'Invierno',
    tipo: 'Decoración',
    destacado: true
  },
  {
    id: '8',
    nombre: 'Acuarela original paisaje',
    descripcion: 'Acuarela original con motivo de paisaje natural, pintada a mano.',
    precio: 5800,
    imagen: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=400',
    temporada: 'Otoño',
    tipo: 'Arte'
  }
];

function createProductStore() {
  const { subscribe, set, update } = writable<Product[]>(initialProducts);
  
  return {
    subscribe,
    addProduct: (product: Product) => update(products => [...products, product]),
    removeProduct: (id: string) => update(products => products.filter(p => p.id !== id)),
    updateProduct: (updatedProduct: Product) => update(products => 
      products.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    ),
    reset: () => set(initialProducts),
    filterProducts: (filters: {
      temporada?: string;
      tipo?: string;
      precio?: { min: number; max: number };
      search?: string;
    }) => {
      return initialProducts.filter(product => {
        let matchesTemporada = true;
        let matchesTipo = true;
        let matchesPrecio = true;
        let matchesSearch = true;
        
        if (filters.temporada && filters.temporada !== '') {
          matchesTemporada = product.temporada === filters.temporada;
        }
        
        if (filters.tipo && filters.tipo !== '') {
          matchesTipo = product.tipo === filters.tipo;
        }
        
        if (filters.precio) {
          matchesPrecio = product.precio >= filters.precio.min && product.precio <= filters.precio.max;
        }
        
        if (filters.search && filters.search !== '') {
          const searchLower = filters.search.toLowerCase();
          matchesSearch = 
            product.nombre.toLowerCase().includes(searchLower) || 
            product.descripcion.toLowerCase().includes(searchLower);
        }
        
        return matchesTemporada && matchesTipo && matchesPrecio && matchesSearch;
      });
    }
  };
}

export const productStore = createProductStore(); 