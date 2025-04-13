<script>
  import Hero from '../components/Hero.svelte';
  import ProductCard from '../components/ProductCard.svelte';
  import { products } from '../lib/data/products';
  import { onMount } from 'svelte';
  
  // Seleccionar algunos productos destacados
  const featuredProducts = products.slice(0, 4);
  
  let isVisible = {
    features: false,
    collection: false,
    testimonial: false
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
          } else if (entry.target.id === 'testimonial-section') {
            isVisible.testimonial = true;
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
  <!-- Hero renovado con glassmorphism -->
  <section class="relative overflow-hidden bg-gradient-to-r from-[#F7F5F8] to-[#F2B5C8]/30">
    <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
    
    <!-- Círculos decorativos -->
    <div class="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#5ABFBD]/20 blur-3xl"></div>
    <div class="absolute bottom-10 left-[5%] w-40 h-40 rounded-full bg-[#F2B5C8]/30 blur-2xl"></div>
    
    <div class="container mx-auto px-4 min-h-[90vh] flex items-center relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="max-w-xl">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif text-[#E27990] leading-tight">
            Arte que <span class="text-[#5ABFBD]">transforma</span> espacios
          </h1>
          
          <p class="mt-6 text-lg text-gray-700">
            Creaciones únicas que reflejan personalidad, color y estilo. Cada pieza cuenta una historia que ahora puede ser parte de tu hogar.
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
              Conoce nuestra historia
            </a>
          </div>
        </div>
        
        <div class="hidden md:block relative">
          <!-- Elemento decorativo con glassmorphism -->
          <div class="absolute -top-10 -left-10 w-60 h-60 bg-[#5ABFBD]/10 rounded-full mix-blend-multiply blur-md"></div>
          
          <div class="relative backdrop-blur-sm p-4">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-square">
              <img 
                src="../assets/ph1.png" 
                alt="Pieza decorativa" 
                class="w-full h-full object-cover"
              />              
              <!-- Overlay con gradiente -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#5ABFBD]/50 to-transparent opacity-60"></div>
            </div>
            
            <!-- Elemento flotante -->
            <div class="absolute -bottom-4 -right-4 p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg max-w-[200px]">
              <p class="text-[#E27990] font-serif text-lg">"Cada creación es única, como tú"</p>
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
        <span class="inline-block px-3 py-1 bg-[#5ABFBD]/10 text-[#5ABFBD] font-medium rounded-full text-sm mb-3">Nuestra Selección</span>
        <h2 class="text-3xl md:text-4xl font-serif text-[#E27990] mb-4">
          Piezas que inspiran
        </h2>
        <p class="text-gray-700">Descubre nuestra colección destacada, cuidadosamente seleccionada para transformar cualquier espacio en un lugar lleno de personalidad.</p>
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
  
  <!-- Sección de características con iconos y gradientes -->
  <section class="py-24 bg-gradient-to-b from-white to-[#F7F5F8]">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-xl mx-auto mb-20">
        <span class="inline-block px-3 py-1 bg-[#F2B5C8]/20 text-[#E27990] font-medium rounded-full text-sm mb-3">Por qué elegirnos</span>
        <h2 class="text-3xl md:text-4xl font-serif text-[#5ABFBD] mb-4">Nuestro compromiso</h2>
        <p class="text-gray-700">Cada pieza que creamos está impregnada de pasión, dedicación y atención al detalle</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:border-[#5ABFBD]/30">
          <div class="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#F2B5C8] to-[#E27990] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-serif text-gray-800 mb-3 group-hover:text-[#E27990] transition-colors">Hecho a mano</h3>
          <p class="text-gray-600">Cada creación es elaborada artesanalmente, cuidando cada detalle para conseguir piezas únicas y especiales.</p>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:border-[#5ABFBD]/30">
          <div class="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#5ABFBD] to-[#5ABFBD]/70 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-serif text-gray-800 mb-3 group-hover:text-[#5ABFBD] transition-colors">Diseño original</h3>
          <p class="text-gray-600">Diseños exclusivos que no encontrarás en otros lugares, pensados para crear ambientes con personalidad.</p>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group hover:border-[#5ABFBD]/30">
          <div class="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#F8E1A9] to-[#F8E1A9]/70 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-xl font-serif text-gray-800 mb-3 group-hover:text-amber-500 transition-colors">Materiales premium</h3>
          <p class="text-gray-600">Utilizamos sólo los mejores materiales, seleccionados por su calidad y sostenibilidad ambiental.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Sección de colección con imágenes y efectos -->
  <section id="collection-section" class="py-24 animate-section relative overflow-hidden">
    <div class="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#5ABFBD]/10 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#F2B5C8]/10 blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="order-2 md:order-1">
          <div 
            class="grid grid-cols-2 gap-4 transition-all duration-1000 transform opacity-0 translate-x-[-50px]"
            class:opacity-100={isVisible.collection} 
            class:translate-x-0={isVisible.collection}
          >
            <div class="space-y-4">
              <div class="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#F2B5C8]/50 to-[#F2B5C8]/10 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=500&auto=format&fit=crop" 
                  alt="Proceso creativo" 
                  class="w-full aspect-square object-cover rounded-xl"
                />
              </div>
              <div class="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#5ABFBD]/40 to-[#5ABFBD]/5 p-1 translate-y-10">
                <img 
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=500&auto=format&fit=crop" 
                  alt="Materiales" 
                  class="w-full aspect-square object-cover rounded-xl"
                />
              </div>
            </div>
            
            <div class="space-y-4 translate-y-14">
              <div class="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#F8E1A9]/50 to-[#F8E1A9]/10 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1616046386594-c152704acbfa?q=80&w=500&auto=format&fit=crop" 
                  alt="Artesanía" 
                  class="w-full aspect-square object-cover rounded-xl"
                />
              </div>
              <div class="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#F2B5C8]/40 to-[#5ABFBD]/5 p-1">
                <img 
                  src="https://images.unsplash.com/photo-1579438822159-03b449e7282d?q=80&w=500&auto=format&fit=crop" 
                  alt="Detalle" 
                  class="w-full aspect-square object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div 
          class="order-1 md:order-2 transition-all duration-1000 transform opacity-0 translate-x-[50px]"
          class:opacity-100={isVisible.collection} 
          class:translate-x-0={isVisible.collection}
        >
          <span class="inline-block px-3 py-1 bg-[#5ABFBD]/10 text-[#5ABFBD] font-medium rounded-full text-sm mb-3">Nuestra Colección</span>
          <h2 class="text-3xl md:text-4xl font-serif text-[#E27990] mb-6">Arte y decoración con alma propia</h2>
          <p class="text-gray-700 mb-6">
            En Tejerosa no sólo creamos objetos decorativos, damos vida a piezas que cuentan historias. Fusionamos técnicas artesanales tradicionales con visión contemporánea.
          </p>
          <p class="text-gray-700 mb-8">
            Cada creación está pensada para convertirse en el centro de atención de tu espacio, aportando carácter, elegancia y ese toque personal que hace que un lugar sea realmente tuyo.
          </p>
          
          <div class="flex flex-wrap gap-4 items-center">
            <a 
              href="/nosotros" 
              class="px-6 py-3 bg-[#5ABFBD] hover:bg-[#4AA09E] text-white font-medium rounded-md transition-colors shadow-sm"
            >
              Conoce nuestra historia
            </a>
            
            <a 
              href="/catalogo" 
              class="inline-flex items-center text-[#E27990] font-medium hover:text-[#C95775] transition-colors group"
            >
              Ver catálogo
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Sección de testimonios con efecto vidrio -->
  <section id="testimonial-section" class="py-24 bg-gradient-to-r from-[#F7F5F8] to-[#F2B5C8]/20 animate-section">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 bg-[#F2B5C8]/30 text-[#E27990] font-medium rounded-full text-sm mb-3">Lo que dicen de nosotros</span>
        <h2 class="text-3xl md:text-4xl font-serif text-[#5ABFBD] mb-4">Clientes satisfechos</h2>
        <p class="text-gray-700">Las opiniones de quienes han transformado sus espacios con nuestras creaciones</p>
      </div>
      
      <div 
        class="max-w-4xl mx-auto transition-all duration-1000 transform opacity-0 scale-95"
        class:opacity-100={isVisible.testimonial} 
        class:scale-100={isVisible.testimonial}
      >
        <div class="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/70 relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F2B5C8]/20 blur-2xl"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#5ABFBD]/20 blur-2xl"></div>
          
          <div class="relative z-10">
            <svg class="w-12 h-12 text-[#E27990]/30 mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
            </svg>
            
            <p class="text-xl md:text-2xl text-gray-800 font-serif italic mb-8">
              Las piezas de Tejerosa han transformado por completo nuestro hogar. No sólo son objetos bonitos, sino que aportan personalidad y calidez a cada rincón. La calidad y el servicio son excepcionales.
            </p>
            
            <div class="flex items-center">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&q=80&crop=faces&auto=format" alt="Cliente" class="w-14 h-14 rounded-full object-cover border-2 border-[#5ABFBD]" />
              <div class="ml-4">
                <h4 class="font-medium text-[#E27990]">Laura Martínez</h4>
                <p class="text-gray-600 text-sm">Cliente desde 2022</p>
              </div>
              <div class="ml-auto flex">
                {#each Array(5) as _, i}
                  <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Sección CTA con gradiente y efectos hover -->
  <section class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-[#5ABFBD]/10 to-[#F2B5C8]/10"></div>
    <div class="absolute top-0 left-0 w-full h-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full">
        <path fill="#F7F5F8" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-xl border border-white/70 text-center">
        <h2 class="text-3xl md:text-4xl font-serif text-[#E27990] mb-4">Descubre el arte que transformará tus espacios</h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Cada pieza que creamos está diseñada con pasión y dedicación para aportar personalidad y belleza a tu hogar. Déjate inspirar y encuentra ese complemento perfecto que estabas buscando.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a 
            href="/catalogo" 
            class="px-8 py-4 bg-gradient-to-r from-[#E27990] to-[#C95775] text-white font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
          >
            Explorar catálogo
          </a>
          <a 
            href="/contacto" 
            class="px-8 py-4 bg-gradient-to-r from-[#5ABFBD] to-[#4AA09E] text-white font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-0 left-0 w-full h-20 transform rotate-180">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full">
        <path fill="#F7F5F8" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
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