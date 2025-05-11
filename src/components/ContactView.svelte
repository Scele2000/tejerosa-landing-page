<script>
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let formData = {
    name: '',
    email: '',
    message: ''
  };
  let show = false;

  onMount(() => {
    show = true;
  });

  function handleSubmit() {
    alert('Mensaje enviado (simulación). Gracias por contactarnos, ' + formData.name + '!');
    formData = { name: '', email: '', message: '' };
  }

  const instagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.052 1.795.218 2.168.387.528.233.983.585 1.443 1.045.46.46.812.915 1.045 1.443.17.373.335.996.387 2.168.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.052 1.172-.218 1.795-.387 2.168-.233.528-.585.983-1.045 1.443-.46.46-.915.812-1.443 1.045-.373.17-.996.335-2.168.387-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.052-1.795-.218-2.168-.387-.528-.233-.983-.585-1.443-1.045-.46-.46-.812-.915-1.045-1.443-.17-.373-.335-.996-.387-2.168-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.052-1.172.218-1.795.387-2.168.233-.528.585.983 1.045 1.443.46.46.915.812 1.443 1.045.373.17.996.335 2.168.387C8.416 2.175 8.796 2.163 12 2.163zm0 1.8a.96.96 0 100 1.92.96.96 0 000-1.92zm-1.934 2.704a4.26 4.26 0 108.52 0 4.26 4.26 0 00-8.52 0zm6.634 0a2.37 2.37 0 11-4.74 0 2.37 2.37 0 014.74 0z" clip-rule="evenodd" /></svg>`;
  const twitterIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>`;
  const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>`;
  const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>`;

</script>

{#if show}
<div in:fly={{ y: 50, duration: 600, opacity:0 }} class="max-w-4xl mx-auto bg-gradient-to-br from-white/70 via-sky-50/70 to-pink-50/70 dark:from-slate-800/80 dark:via-sky-900/80 dark:to-slate-900/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-pink-100 dark:border-slate-700/70">
  <div class="text-center mb-10 md:mb-12">
    <h1 class="text-4xl sm:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-4" style="font-family: 'Playfair Display', serif;">¡Hablemos!</h1>
    <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
      Si tienes alguna pregunta sobre los productos, pedidos personalizados, o simplemente quieres saludar, ¡no dudes en contactarnos! A Rosa le encantará saber de ti.
    </p>
  </div>

  <div class="grid md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16">
    <div class="space-y-6 p-6 bg-sky-50/50 dark:bg-slate-700/30 rounded-xl shadow-lg border border-sky-100 dark:border-slate-700">
      <h3 class="text-2xl font-semibold text-sky-700 dark:text-sky-300 mb-4 border-b border-sky-200 dark:border-slate-600 pb-2" style="font-family: 'Playfair Display', serif;">Información de Contacto</h3>
      
      <a href="mailto:rosa.artesana@example.com" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 group transition-colors duration-200">
        {@html emailIcon}
        <span class="group-hover:underline">rosa.artesana@example.com</span>
      </a>
      <div class="flex items-center text-gray-700 dark:text-gray-300">
        {@html locationIcon}
        <span>Ciudad Creativa (Pedidos online)</span>
      </div>
      
      <div class="pt-3 mt-3 border-t border-sky-100 dark:border-slate-600">
        <h4 class="text-lg font-medium text-sky-600 dark:text-sky-400 mb-2">Síguenos en Redes</h4>
        <div class="flex space-x-4">
          <a href="https://instagram.com/tejerosa_ejemplo" target="_blank" aria-label="Instagram" class="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300">
            {@html instagramIcon}
          </a>
          <a href="https://twitter.com/tejerosa_ejemplo" target="_blank" aria-label="Twitter" class="text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            {@html twitterIcon}
          </a>
        </div>
      </div>
    </div>

    <div class="p-6 bg-pink-50/50 dark:bg-rose-900/20 rounded-xl shadow-lg border border-pink-100 dark:border-slate-700">
      <h2 class="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-5 border-b border-pink-200 dark:border-slate-600 pb-2" style="font-family: 'Playfair Display', serif;">Envíanos un Mensaje</h2>
      <form on:submit|preventDefault={handleSubmit} class="space-y-5">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre Completo</label>
          <input type="text" id="name" bind:value={formData.name} required class="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white transition-colors duration-200" placeholder="Tu nombre">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
          <input type="email" id="email" bind:value={formData.email} required class="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white transition-colors duration-200" placeholder="tu@email.com">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tu Mensaje</label>
          <textarea id="message" rows="4" bind:value={formData.message} required class="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white transition-colors duration-200 resize-none" placeholder="Escribe aquí tu consulta o saludo..."></textarea>
        </div>
        <button type="submit" class="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 dark:from-pink-600 dark:to-rose-600 dark:hover:from-pink-500 dark:hover:to-rose-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-700 focus:ring-opacity-50 flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span>Enviar Mensaje</span>
        </button>
      </form>
    </div>
  </div>
</div>
{/if} 