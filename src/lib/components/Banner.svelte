<script lang="ts">
  export let title: string = "Arte & Decoración Hecho a Mano";
  export let subtitle: string = "Creaciones únicas y personalizadas para tu hogar";
  export let bgImage: string = "/bg3.jpg";
</script>

<section class="relative py-16 md:py-24 overflow-hidden" style="background-image: url({bgImage}); background-size: cover; background-position: center;">
  <div class="absolute inset-0 backdrop-blur-md bg-black/20"></div>
  
  <div class="container mx-auto px-4 text-center relative z-10">
    <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{title}</h1>
    <p class="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">{subtitle}</p>
    
    <div class="flex flex-wrap justify-center gap-4">
      <a 
        href="#catalogo" 
        class="px-6 py-3 bg-[var(--color-turquesa)] text-white rounded-md hover:bg-[var(--color-turquesa-dark)] transition-colors shadow-md"
      >
        Ver Catálogo
      </a>
      <a 
        href="/contacto" 
        class="px-6 py-3 bg-[var(--color-amarillo)] text-[var(--color-text)] rounded-md hover:brightness-95 transition-colors shadow-md font-medium"
      >
        Contacto
      </a>
    </div>
  </div>
  
  <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-0"></div>
</section> 