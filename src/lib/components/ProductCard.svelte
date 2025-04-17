<script lang="ts">
  export let id: string;
  export let nombre: string;
  export let descripcion: string;
  export let precio: number;
  export let imagen: string;
  export let temporada: string;
  export let tipo: string;
</script>

<div class="bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 h-full">
  <div class="aspect-square overflow-hidden relative">
    <img 
      src={imagen || '/placeholder.jpg'} 
      alt={nombre} 
      class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
    <span class="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded-full">
      {temporada}
    </span>
    <span class="absolute bottom-2 left-2 bg-white/80 text-[var(--color-text)] text-xs px-2 py-1 rounded-full">
      {tipo}
    </span>
  </div>
  
  <div class="p-4">
    <h3 class="font-semibold text-lg text-[var(--color-text)] truncate">{nombre}</h3>
    <p class="text-gray-600 text-sm line-clamp-2 h-10 mb-2">{descripcion}</p>
    
    <div class="flex justify-between items-center mt-2">
      <span class="text-lg font-bold text-[var(--color-coral)]">$ {precio.toLocaleString('es-AR')}</span>
      <button class="bg-[var(--color-turquesa)] text-white p-2 rounded-full hover:bg-[var(--color-turquesa-dark)] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
    </div>
  </div>
</div> 