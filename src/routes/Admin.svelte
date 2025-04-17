<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import ProductForm from '../lib/components/ProductForm.svelte';
  import { productStore, type Product } from '../lib/stores/products';
  import { navigate } from '../lib/router';
  
  let products: Product[] = [];
  let showAddForm = false;
  let editingProduct: Product | null = null;
  let isLoggedIn = false; // En un entorno real, esto se verificaría con un servicio de autenticación
  
  // Función para simular inicio de sesión (en un entorno real se haría con autenticación real)
  function checkLogin() {
    // Simulamos que estamos autenticados para poder usar el panel de administración
    isLoggedIn = true;
  }
  
  function addProduct(event: CustomEvent) {
    const newProduct = event.detail as Product;
    productStore.addProduct(newProduct);
    showAddForm = false;
    loadProducts();
  }
  
  function updateProduct(event: CustomEvent) {
    const updatedProduct = event.detail as Product;
    productStore.updateProduct(updatedProduct);
    editingProduct = null;
    loadProducts();
  }
  
  function deleteProduct(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      productStore.removeProduct(id);
      loadProducts();
    }
  }
  
  function editProduct(product: Product) {
    editingProduct = { ...product };
  }
  
  function cancelEdit() {
    editingProduct = null;
    showAddForm = false;
  }
  
  function loadProducts() {
    productStore.subscribe(value => {
      products = [...value];
    })();
  }
  
  onMount(() => {
    checkLogin();
    loadProducts();
  });
</script>

<main class="min-h-screen bg-[var(--color-background)]">
  <Navbar />
  
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-center text-[var(--color-text)] mb-8">Panel de Administración</h1>
      
      {#if !isLoggedIn}
        <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 class="text-2xl font-semibold text-[var(--color-text)] mb-4">Acceso Restringido</h2>
          <p class="text-gray-600 mb-6">Debes iniciar sesión para acceder al panel de administración.</p>
          <button 
            class="px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-accent)] transition-colors"
            on:click={() => navigate('/')}
          >
            Volver al Inicio
          </button>
        </div>
      {:else}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="p-6 bg-[var(--color-secondary)] flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-[var(--color-text)]">Gestión de Productos</h2>
            
            <button 
              class="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-accent)] transition-colors flex items-center"
              on:click={() => showAddForm = !showAddForm}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
              {showAddForm ? 'Cancelar' : 'Añadir Producto'}
            </button>
          </div>
          
          {#if showAddForm}
            <div class="p-6 border-b border-gray-200">
              <ProductForm on:save={addProduct} on:cancel={cancelEdit} />
            </div>
          {/if}
          
          {#if editingProduct}
            <div class="p-6 border-b border-gray-200">
              <ProductForm editMode={true} product={editingProduct} on:save={updateProduct} on:cancel={cancelEdit} />
            </div>
          {/if}
          
          <div class="p-6">
            {#if products.length === 0}
              <p class="text-center text-gray-500 py-8">No hay productos disponibles. ¡Añade tu primer producto!</p>
            {:else}
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temporada</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destacado</th>
                      <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    {#each products as product}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full object-cover" src={product.imagen} alt={product.nombre} />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">{product.nombre}</div>
                              <div class="text-sm text-gray-500 truncate max-w-xs">{product.descripcion}</div>
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">$ {product.precio.toLocaleString('es-AR')}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {product.tipo}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.temporada}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.destacado ? 'Sí' : 'No'}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button 
                            on:click={() => editProduct(product)}
                            class="text-[var(--color-primary)] hover:text-[var(--color-accent)] mr-4"
                          >
                            Editar
                          </button>
                          <button 
                            on:click={() => deleteProduct(product.id)}
                            class="text-red-600 hover:text-red-900"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </section>
  
  <Footer />
</main> 