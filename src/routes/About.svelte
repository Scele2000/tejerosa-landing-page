<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<main class="min-h-screen bg-gradient-to-b from-[var(--color-background)] to-white">
  <Navbar />
  
  <!-- Banner -->
  <section class="relative py-16 md:py-24 overflow-hidden" style="background-image: url('/bg4.jpg'); background-size: cover; background-position: center;">
    <div class="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
    <div class="container mx-auto px-4 relative z-10 text-center">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Sobre Nosotros</h1>
      <p class="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
        Creaciones artesanales con amor y calidad en cada detalle
      </p>
    </div>
  </section>
  
  <!-- Historia -->
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div class="order-2 lg:order-1">
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">Nuestra Historia</h2>
            <p class="text-gray-700 mb-4">
              Tejerosa nació en 2018 como un pequeño proyecto personal que rápidamente se convirtió en una pasión. Todo comenzó cuando decidí compartir mis creaciones tejidas con amigos y familiares, quienes me animaron a dar el salto y ofrecer mis productos a un público más amplio.
            </p>
            <p class="text-gray-700 mb-4">
              Lo que empezó como un hobby se transformó en un emprendimiento dedicado a crear piezas únicas, tejidas a mano con materiales de la más alta calidad. Cada producto que sale de nuestro taller lleva consigo horas de dedicación y cariño.
            </p>
            <p class="text-gray-700">
              Hoy, Tejerosa se ha consolidado como una marca reconocida por la calidad de sus tejidos y la atención personalizada a cada cliente. Seguimos creciendo, pero mantenemos la esencia artesanal que nos distingue.
            </p>
          </div>
        </div>
        <div class="order-1 lg:order-2 relative">
          <img src="/about-image-1.jpg" alt="Tejedora trabajando" class="rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]" />
          <div class="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[var(--color-coral)] shadow-lg hidden md:block"></div>
          <div class="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[var(--color-turquesa)] shadow-lg hidden md:block"></div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Valores -->
  <section class="py-16 px-4 bg-gradient-to-r from-[var(--color-background)] to-white">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-[var(--color-text)] mb-12">Nuestros Valores</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Calidad -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50 transform hover:-translate-y-2 transition-transform duration-300">
          <div class="rounded-full bg-[var(--color-turquesa)] w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--color-text)] mb-4 text-center">Calidad Artesanal</h3>
          <p class="text-gray-700 text-center">
            Trabajamos con materiales cuidadosamente seleccionados y técnicas artesanales que garantizan productos duraderos y de alta calidad.
          </p>
        </div>
        
        <!-- Sustentabilidad -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50 transform hover:-translate-y-2 transition-transform duration-300">
          <div class="rounded-full bg-[var(--color-amarillo)] w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[var(--color-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--color-text)] mb-4 text-center">Sustentabilidad</h3>
          <p class="text-gray-700 text-center">
            Nos comprometemos con el medio ambiente utilizando materiales eco-amigables y empaques reciclables para minimizar nuestro impacto.
          </p>
        </div>
        
        <!-- Originalidad -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50 transform hover:-translate-y-2 transition-transform duration-300">
          <div class="rounded-full bg-[var(--color-coral)] w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[var(--color-text)] mb-4 text-center">Originalidad</h3>
          <p class="text-gray-700 text-center">
            Cada pieza es única, diseñada con creatividad y atención al detalle para ofrecerte productos originales que no encontrarás en otro lugar.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Equipo -->
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-[var(--color-text)] mb-12">Nuestro Equipo</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Miembro 1 -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
          <div class="h-64 overflow-hidden">
            <img src="/team-1.jpg" alt="Ana Rodríguez" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-[var(--color-text)] mb-2">Ana Rodríguez</h3>
            <p class="text-[var(--color-turquesa)] font-medium mb-4">Fundadora y Diseñadora</p>
            <p class="text-gray-700">
              Apasionada por el tejido desde los 12 años, Ana combina técnicas tradicionales con diseños contemporáneos.
            </p>
          </div>
        </div>
        
        <!-- Miembro 2 -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
          <div class="h-64 overflow-hidden">
            <img src="/team-2.jpg" alt="Carlos Méndez" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-[var(--color-text)] mb-2">Carlos Méndez</h3>
            <p class="text-[var(--color-coral)] font-medium mb-4">Artesano Senior</p>
            <p class="text-gray-700">
              Con 15 años de experiencia en tejido, Carlos aporta precisión y expertise técnica a cada creación.
            </p>
          </div>
        </div>
        
        <!-- Miembro 3 -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
          <div class="h-64 overflow-hidden">
            <img src="/team-3.jpg" alt="Laura Sánchez" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-[var(--color-text)] mb-2">Laura Sánchez</h3>
            <p class="text-[var(--color-amarillo)] font-medium mb-4">Atención al Cliente</p>
            <p class="text-gray-700">
              Laura se asegura de que cada cliente reciba un servicio personalizado y la mejor atención posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA -->
  <section class="py-16 px-4 relative overflow-hidden" style="background-image: url('/bg1.jpg'); background-size: cover; background-position: center;">
    <div class="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
    <div class="container mx-auto max-w-4xl relative z-10 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">¿Listo para descubrir nuestras creaciones?</h2>
      <p class="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
        Explora nuestra colección de productos artesanales y encuentra esa pieza especial que estabas buscando.
      </p>
      <a href="/" class="inline-block bg-[var(--color-turquesa)] hover:bg-[var(--color-turquesa-dark)] text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg">
        Ver Productos
      </a>
    </div>
  </section>
  
  <Footer />
</main> 