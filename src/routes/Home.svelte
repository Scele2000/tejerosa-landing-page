<script>
  import ProductCard from '../components/ProductCard.svelte';
  import { products } from '../lib/data/products';
  import { onMount } from 'svelte';
  
  // Seleccionar algunos productos destacados
  const featuredProducts = products.slice(0, 4);
  
  let isVisible = {
    features: false,
    collection: false
  };
  
  onMount(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'features-section') {
            isVisible.features = true;
          } else if (entry.target.id === 'collection-section') {
            isVisible.collection = true;
          }
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  });
</script>

<div class="min-h-screen">
  <!-- Hero renovado más simple -->
  <section class="relative overflow-hidden bg-gradient-to-br from-[#F7F5F8] to-[#F2B5C8]/30">
    <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
    
    <!-- Círculos decorativos -->
    <div class="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#5ABFBD]/20 blur-3xl"></div>
    <div class="absolute bottom-10 left-[5%] w-40 h-40 rounded-full bg-[#F2B5C8]/30 blur-2xl"></div>
    
    <div class="container mx-auto px-4 py-24 flex items-center relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="max-w-xl">
          <h1 class="text-5xl md:text-6xl font-serif text-[#E27990] leading-tight">
            Arte que <span class="text-[#5ABFBD]">inspira</span>
          </h1>
          
          <p class="mt-6 text-lg text-gray-700">
            Explora nuestra colección de creaciones únicas para transformar tus espacios.
          </p>
          
          <div class="mt-10 flex flex-wrap gap-4">
            <a 
              href="/catalogo" 
              class="px-8 py-4 bg-gradient-to-r from-[#E27990] to-[#C95775] text-white font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            >
              Ver catálogo
            </a>
            
            <a 
              href="/nosotros" 
              class="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-[#E27990] font-medium rounded-md border border-[#F2B5C8] transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]"
            >
              Nosotros
            </a>
          </div>
        </div>
        
        <div class="hidden md:block relative">
          <div class="absolute -top-10 -left-10 w-60 h-60 bg-[#5ABFBD]/10 rounded-full mix-blend-multiply blur-md"></div>
          
          <div class="relative backdrop-blur-sm p-4">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
              <img 
                src="../assets/ph1.png" 
                alt="Pieza decorativa" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#5ABFBD]/50 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decoración de ondas abajo -->
    <div class="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
      <svg class="absolute bottom-0 w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1" d="M0,128L60,122.7C120,117,240,107,360,128C480,149,600,203,720,208C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  </section>
  
  <!-- Sección de productos destacados con animaciones -->
  <section id="features-section" class="py-20 animate-section">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 bg-[#5ABFBD]/10 text-[#5ABFBD] font-medium rounded-full text-sm mb-3">Destacados</span>
        <h2 class="text-3xl md:text-4xl font-serif text-[#E27990] mb-4">
          Nuestras creaciones
        </h2>
        <p class="text-gray-700">Piezas seleccionadas de nuestra colección para inspirar tus espacios</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each featuredProducts as product, i}
          <div 
            class="transition-all duration-700 transform opacity-0 translate-y-10"
            class:opacity-100={isVisible.features} 
            class:translate-y-0={isVisible.features}
            style="transition-delay: {i * 150}ms"
          >
            <ProductCard {product} />
          </div>
        {/each}
      </div>
      
      <div class="text-center mt-12">
        <a 
          href="/catalogo" 
          class="inline-block px-6 py-3 bg-white hover:bg-gray-50 text-[#E27990] font-medium rounded-md border border-[#F2B5C8] transition-colors duration-300 hover:border-[#5ABFBD] hover:text-[#5ABFBD] shadow-sm group"
        >
          Ver todo el catálogo
          <span class="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </section>
  
  <!-- Sección de categorías con enfoque en el catálogo -->
  <section id="collection-section" class="py-20 bg-gradient-to-b from-white to-[#F7F5F8] animate-section relative overflow-hidden">
    <div class="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#5ABFBD]/10 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#F2B5C8]/10 blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 bg-[#F2B5C8]/20 text-[#E27990] font-medium rounded-full text-sm mb-3">Explora</span>
        <h2 class="text-3xl md:text-4xl font-serif text-[#5ABFBD] mb-4">Nuestras categorías</h2>
        <p class="text-gray-700">Descubre el arte que transformará tus espacios</p>
      </div>
      
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 transform opacity-0 translate-y-10"
        class:opacity-100={isVisible.collection} 
        class:translate-y-0={isVisible.collection}
      >
        <a href="/catalogo?categoria=pinturas" class="group">
          <div class="relative rounded-xl overflow-hidden shadow-md h-64 transform transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1579541591969-96baa07cc4bd?q=80&w=500&auto=format&fit=crop"
              alt="Pinturas" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/60"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-serif">Pinturas</h3>
            </div>
          </div>
        </a>
        
        <a href="/catalogo?categoria=esculturas" class="group">
          <div class="relative rounded-xl overflow-hidden shadow-md h-64 transform transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?q=80&w=500&auto=format&fit=crop"
              alt="Esculturas" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/60"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-serif">Esculturas</h3>
            </div>
          </div>
        </a>
        
        <a href="/catalogo?categoria=ceramica" class="group">
          <div class="relative rounded-xl overflow-hidden shadow-md h-64 transform transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1565193566573-1d758c8f8f18?q=80&w=500&auto=format&fit=crop"
              alt="Cerámica" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/60"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-serif">Cerámica</h3>
            </div>
          </div>
        </a>
        
        <a href="/catalogo?categoria=textil" class="group">
          <div class="relative rounded-xl overflow-hidden shadow-md h-64 transform transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1459501462159-97d5bded1416?q=80&w=500&auto=format&fit=crop"
              alt="Arte textil" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#000]/60"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-xl font-serif">Arte textil</h3>
            </div>
          </div>
        </a>
      </div>
      
      <div class="text-center mt-12">
        <a 
          href="/contacto" 
          class="inline-block px-8 py-4 bg-gradient-to-r from-[#5ABFBD] to-[#4AA09E] text-white font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
        >
          Contáctanos
        </a>
      </div>
    </div>
  </section>
</div>

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-section > * {
    will-change: transform, opacity;
  }
</style>