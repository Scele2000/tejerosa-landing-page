<script lang="ts">
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  
  let nombre = '';
  let email = '';
  let telefono = '';
  let mensaje = '';
  let submitted = false;
  let error = '';
  
  function handleSubmit() {
    // Validación básica
    if (!nombre || !email || !mensaje) {
      error = 'Por favor completa los campos requeridos';
      return;
    }
    
    // Aquí iría el código para enviar el formulario
    // Por ahora solo simulamos el envío
    setTimeout(() => {
      submitted = true;
      error = '';
      // Limpiar formulario
      nombre = '';
      email = '';
      telefono = '';
      mensaje = '';
    }, 1000);
  }
</script>

<main class="min-h-screen bg-gradient-to-b from-[var(--color-background)] to-white">
  <Navbar />
  
  <!-- Banner de Contacto -->
  <section class="relative py-16 md:py-24 overflow-hidden" style="background-image: url('/bg4.jpg'); background-size: cover; background-position: center;">
    <div class="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
    <div class="container mx-auto px-4 relative z-10 text-center">
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Contacto</h1>
      <p class="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
        Estamos aquí para ayudarte. ¡Contáctanos para consultas, pedidos personalizados o colaboraciones!
      </p>
    </div>
  </section>
  
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <!-- Información de Contacto -->
        <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50 order-2 lg:order-1">
          <h2 class="text-2xl font-bold text-[var(--color-text)] mb-6">Información de Contacto</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-[var(--color-turquesa)] rounded-full p-3 mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-[var(--color-text)]">Email</h3>
                <p class="text-gray-600">info@tejerosa.com.ar</p>
                <p class="mt-1 text-sm text-gray-500">Respondemos en 24-48 horas</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-[var(--color-coral)] rounded-full p-3 mr-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-[var(--color-text)]">Teléfono</h3>
                <p class="text-gray-600">(011) 1234-5678</p>
                <p class="mt-1 text-sm text-gray-500">Lunes a Viernes 9am - 6pm</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-[var(--color-amarillo)] rounded-full p-3 mr-4 text-[var(--color-text)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-[var(--color-text)]">Ubicación</h3>
                <p class="text-gray-600">Buenos Aires, Argentina</p>
                <p class="mt-1 text-sm text-gray-500">Envíos a todo el país</p>
              </div>
            </div>
          </div>
          
          <div class="mt-10">
            <h3 class="text-xl font-semibold text-[var(--color-text)] mb-4">Síguenos en redes sociales</h3>
            <div class="flex space-x-4">
              <a href="#" class="bg-[var(--color-turquesa)] text-white p-3 rounded-full hover:bg-[var(--color-turquesa-dark)] transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="bg-[var(--color-coral)] text-white p-3 rounded-full hover:brightness-95 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="bg-[var(--color-amarillo)] text-[var(--color-text)] p-3 rounded-full hover:brightness-95 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Formulario de contacto -->
        <div class="order-1 lg:order-2">
          <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 class="text-2xl font-bold text-[var(--color-text)] mb-6">Envíanos un mensaje</h2>
            
            {#if submitted}
              <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-5 rounded mb-6 text-center">
                <p class="font-medium text-lg">¡Gracias por tu mensaje!</p>
                <p class="mt-2">Nos pondremos en contacto contigo a la brevedad.</p>
                
                <button 
                  on:click={() => submitted = false}
                  class="mt-4 px-6 py-2 bg-[var(--color-turquesa)] text-white rounded-md hover:bg-[var(--color-turquesa-dark)] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            {:else}
              <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                {#if error}
                  <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                {/if}
                
                <div>
                  <label for="nombre" class="block text-sm font-medium text-[var(--color-text)] mb-1">Nombre <span class="text-red-500">*</span></label>
                  <input 
                    bind:value={nombre}
                    type="text" 
                    id="nombre" 
                    required
                    class="w-full p-3 bg-white border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-turquesa)]"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-[var(--color-text)] mb-1">Email <span class="text-red-500">*</span></label>
                  <input 
                    bind:value={email}
                    type="email" 
                    id="email" 
                    required
                    class="w-full p-3 bg-white border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-turquesa)]"
                  />
                </div>
                
                <div>
                  <label for="telefono" class="block text-sm font-medium text-[var(--color-text)] mb-1">Teléfono</label>
                  <input 
                    bind:value={telefono}
                    type="tel" 
                    id="telefono" 
                    class="w-full p-3 bg-white border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-turquesa)]"
                  />
                </div>
                
                <div>
                  <label for="mensaje" class="block text-sm font-medium text-[var(--color-text)] mb-1">Mensaje <span class="text-red-500">*</span></label>
                  <textarea 
                    bind:value={mensaje}
                    id="mensaje" 
                    rows="5" 
                    required
                    class="w-full p-3 bg-white border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-turquesa)]"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full py-3 px-6 bg-[var(--color-turquesa)] text-white rounded-lg hover:bg-[var(--color-turquesa-dark)] transition-colors shadow-md font-medium"
                >
                  Enviar mensaje
                </button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <Footer />
</main> 