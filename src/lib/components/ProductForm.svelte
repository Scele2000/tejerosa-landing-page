<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Product } from '../stores/products';
  
  export let editMode = false;
  export let product: Partial<Product> = {
    id: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    temporada: 'Todo el año',
    tipo: 'Decoración',
    destacado: false
  };
  
  const temporadas = ['Primavera', 'Verano', 'Otoño', 'Invierno', 'Todo el año'];
  const tipos = ['Decoración', 'Manualidad', 'Arte'];
  
  const dispatch = createEventDispatcher();
  
  function handleSubmit(e: Event) {
    e.preventDefault();
    
    // Generar un ID aleatorio si es un producto nuevo
    if (!editMode) {
      product.id = Date.now().toString();
    }
    
    dispatch('save', product);
    
    // Limpiar el formulario si no estamos editando
    if (!editMode) {
      product = {
        id: '',
        nombre: '',
        descripcion: '',
        precio: 0,
        imagen: '',
        temporada: 'Todo el año',
        tipo: 'Decoración',
        destacado: false
      };
    }
  }
  
  function handleCancel() {
    dispatch('cancel');
  }
</script>

<form on:submit={handleSubmit} class="bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-semibold text-[var(--color-text)] mb-6">
    {editMode ? 'Editar' : 'Añadir'} Producto
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="space-y-4">
      <!-- Nombre -->
      <div>
        <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">Nombre del producto</label>
        <input 
          type="text" 
          id="nombre" 
          bind:value={product.nombre} 
          required 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
      </div>
      
      <!-- Descripción -->
      <div>
        <label for="descripcion" class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
        <textarea 
          id="descripcion" 
          bind:value={product.descripcion} 
          rows="4" 
          required 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        ></textarea>
      </div>
      
      <!-- Precio -->
      <div>
        <label for="precio" class="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
        <input 
          type="number" 
          id="precio" 
          bind:value={product.precio} 
          min="0" 
          step="0.01" 
          required 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
      </div>
    </div>
    
    <div class="space-y-4">
      <!-- URL de la imagen -->
      <div>
        <label for="imagen" class="block text-sm font-medium text-gray-700 mb-1">URL de la imagen</label>
        <input 
          type="url" 
          id="imagen" 
          bind:value={product.imagen} 
          placeholder="https://ejemplo.com/imagen.jpg" 
          required 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
      </div>
      
      <!-- Temporada -->
      <div>
        <label for="temporada" class="block text-sm font-medium text-gray-700 mb-1">Temporada</label>
        <select 
          id="temporada" 
          bind:value={product.temporada}
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        >
          {#each temporadas as temporada}
            <option value={temporada}>{temporada}</option>
          {/each}
        </select>
      </div>
      
      <!-- Tipo -->
      <div>
        <label for="tipo" class="block text-sm font-medium text-gray-700 mb-1">Tipo de producto</label>
        <select 
          id="tipo" 
          bind:value={product.tipo}
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        >
          {#each tipos as tipo}
            <option value={tipo}>{tipo}</option>
          {/each}
        </select>
      </div>
      
      <!-- Destacado -->
      <div class="flex items-center mt-6">
        <input 
          type="checkbox" 
          id="destacado" 
          bind:checked={product.destacado} 
          class="h-5 w-5 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
        />
        <label for="destacado" class="ml-2 block text-sm text-gray-700">Producto destacado</label>
      </div>
    </div>
  </div>
  
  <div class="flex justify-end space-x-4 mt-8">
    <button 
      type="button" 
      on:click={handleCancel}
      class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
    >
      Cancelar
    </button>
    <button 
      type="submit" 
      class="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
    >
      {editMode ? 'Actualizar' : 'Añadir'} Producto
    </button>
  </div>
</form> 