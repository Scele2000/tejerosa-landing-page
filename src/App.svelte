<script>
  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import CatalogView from './components/CatalogView.svelte';
  import ProductDetailView from './components/ProductDetailView.svelte';
  import ContactView from './components/ContactView.svelte';
  import AdminView from './components/AdminView.svelte'; // Incluirá el login y el panel
  import CartView from './components/CartView.svelte'; // Importar CartView
  import { currentView, products as productsStore } from './store.js';
  import { fly, fade } from 'svelte/transition'; // Importar transiciones

  // Datos de ejemplo para los filtros
  let allProducts = [];
  productsStore.subscribe(value => {
    allProducts = value;
  });

  const categories = [...new Set(allProducts.map(p => p.category))];
  const types = [...new Set(allProducts.map(p => p.type))];

</script>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-sky-100 via-teal-50 to-blue-100 dark:from-slate-900 dark:via-sky-900 dark:to-slate-800 text-gray-800 dark:text-gray-200 selection:bg-pink-300 selection:text-pink-900">
  <Navbar />

  {#if $currentView === 'catalog' || $currentView === 'productDetail'}
    <header 
      class="relative py-16 md:py-24 bg-cover bg-center mb-8 shadow-xl overflow-hidden"
      style="background-image: url('./images/banner-placeholder.jpg');" 
    >
      <div class="absolute inset-0 bg-gradient-to-tr from-sky-500/40 via-pink-500/30 to-teal-500/40 dark:from-sky-800/50 dark:via-pink-900/40 dark:to-slate-800/60 backdrop-blur-sm"></div>
      <div class="relative container mx-auto px-4 text-center z-10">
        <div in:fly={{ y: -30, duration: 700, delay: 200, opacity:0 }} class="mb-2">
          <h1 
            class="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
            style="font-family: 'Playfair Display', serif; text-shadow: 0 2px 10px rgba(0,0,0,0.5);"
          >
            Tejerosa
          </h1>
        </div>
        <div in:fly={{ y: 30, duration: 700, delay: 400, opacity:0 }}>
          <p 
            class="mt-3 md:mt-4 text-xl md:text-2xl text-sky-100 dark:text-pink-200 font-light max-w-2xl mx-auto"
            style="text-shadow: 0 1px 5px rgba(0,0,0,0.4);"
          >
            Artesanías hechas con amor, para dar calidez a tu hogar y tu vida.
          </p>
        </div>
      </div>
    </header>
  {/if}

  <main class="flex-grow container mx-auto px-4 py-8">
    {#if $currentView === 'catalog'}
      <CatalogView {categories} {types} />
    {:else if $currentView === 'productDetail'}
      <ProductDetailView />
    {:else if $currentView === 'contact'}
      <ContactView />
    {:else if $currentView === 'admin'}
      <AdminView />
    {:else if $currentView === 'cart'}
      <CartView />
    {/if}
  </main>

  <Footer />
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400&display=swap');
  /* .shadow-text ya no se usa directamente, se aplicó con text-shadow en línea para más control */
  /* No es necesario eliminarlo si otros componentes lo usan, pero en el header ya no es necesario */
</style>